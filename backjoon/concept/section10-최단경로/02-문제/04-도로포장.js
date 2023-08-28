/*** https://www.acmicpc.net/problem/1162
 * [문제 설명]
 * 1번 노드에서 𝑁번 노드까지 도달하기 위한 최단 거리를 구하는 문제다.
 * 노드의 개수(𝑁)가 최대 10,000개 이므로, 다익스트라 최단 경로 알고리즘을 사용해야 한다.
 * 이때 𝐾개의 간선의 비용을 0으로 만들 수 있다는 점이 본 문제의 특징이다.
 *
 * [문제 해결 아이디어]
 * 본 문제는 다이나믹 프로그래밍(dynamic programming)을 사용하여 해결할 수 있다.
 * 다익스트라를 사용하며, 방문하는 각 노드까지의 최단 거리를 DP 테이블에 기록한다.
 * 구체적으로 각 노드에 대해 𝑑𝑖𝑠𝑡𝑎𝑛𝑐𝑒 노드 번호 현재까지 포장 횟수 를 갱신한다.
 * 해당 노드를 포장할지 안 할지 결정하는 방식이다.
 *
 * 𝐾개의 간선의 비용을 0으로 만들 수 있다는 점이 본 문제의 특징이다.
 * 𝑑𝑖𝑠𝑡𝑎𝑛𝑐𝑒 노드 번호 현재까지 포장 횟수 를 갱신한다.
 * 점화식: 𝑑[𝑎][𝑘+1] = 𝑑[𝑎의 이전 노드 𝑝][𝑘] (𝑝→a 비용을 0으로 만든다.)
 */
function dijkstra(start) {
  // 다익스트라(Dijkstra) 알고리즘 수행
  let pq = new PriorityQueue((a, b) => b[0] - a[0]) // 최소힙(Min Heap)
  // 시작 노드로 가기 위한 최단 경로는 0으로 설정하여, 큐에 삽입
  pq.enq([0, start, 0]) // (비용, 노드 번호, 포장 횟수)
  distance[start][0] = 0
  while (pq.size() != 0) {
    // 우선순위 큐가 비어있지 않다면
    // 가장 최단 거리가 짧은 노드에 대한 정보 꺼내기
    let [dist, now, paved] = pq.deq()
    // 현재 노드가 이미 처리된 적이 있는 노드라면 무시
    if (distance[now][paved] < dist) continue
    // 현재 노드와 연결된 다른 인접한 노드들을 확인
    for (let i of graph[now]) {
      // 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
      // 1) 포장하지 않는 경우
      let cost = dist + i[1]
      if (cost < distance[i[0]][paved]) {
        distance[i[0]][paved] = cost
        pq.enq([cost, i[0], paved])
      }
      // 2) 포장하는 경우(cost 대신에 dist 사용)
      if (paved < k && dist < distance[i[0]][paved + 1]) {
        distance[i[0]][paved + 1] = dist
        pq.enq([dist, i[0], paved + 1])
      }
    }
  }
}

let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let INF = 1e17 // 무한을 의미하는 값으로 10억을 설정
// 노드의 개수(N), 간선의 개수(M), 포장할 간선의 수(K)
let [n, m, k] = input[0].split(' ').map(Number)
// 각 노드에 연결되어 있는 노드에 대한 정보를 담는 배열을 만들기
let graph = []
for (let i = 0; i <= n + 1; i++) graph.push([])
for (let i = 1; i <= m; i++) {
  // 모든 간선 정보를 입력받기
  let [a, b, c] = input[i].split(' ').map(Number)
  graph[a].push([b, c]) // 양방향 간선
  graph[b].push([a, c])
}

// 최단 거리 테이블을 모두 무한으로 초기화 ([인덱스][포장 횟수])
let distance = [new Array(k + 1).fill(INF)]
for (let i = 1; i <= n; i++) distance[i] = new Array(k + 1).fill(INF)

dijkstra(1) // 다익스트라 알고리즘을 수행
let result = INF // 노드 N에 도착하기 위한 최소 거리 출력
for (let i = 0; i <= k; i++) {
  result = Math.min(result, distance[n][i])
}
console.log(result)
