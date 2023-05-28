/*** https://www.acmicpc.net/problem/1504
 * 노드의 개수가 800개이므로, 다익스트라를 활용해 최단 경로를 계산할 수 있다.
 * 임의로 주어진 두 개의 정점 𝐴와 𝐵를 반드시 통과하는 최단 경로를 계산한다.
 * 따라서 아래의 두 경우 중에서 더 짧은 경우를 계산하면 된다.
 * 1. 1 → 𝐴 → 𝐵 → 𝑁
 * 2. 1 → 𝐵 → 𝐴 → 𝑁
 *
 * 이를 위해 총 3번의 다익스트라 알고리즘을 수행하면 된다.
 * 1. 노드 1에서 출발하여 𝐴, 𝐵에 도착할 때
 * 2. 노드 𝐴에서 출발하여 𝐵, 𝑁에 도착할 때
 * 3. 노드 𝐵에서 출발하여 𝐴, 𝑁에 도착할 때
 *
 * 노드의 개수가 800개이므로, 다익스트라를 활용해 최단 경로를 계산할 수 있다.
 * 경로: 𝑋 → 𝑌로 갈 때 𝐾를 거쳐야 한다. (최단 경로: 𝑋 → 𝐾 + 𝐾 → 𝑌)
 */
function dijkstra(start) {
  // 다익스트라(Dijkstra) 알고리즘 수행
  let pq = new PriorityQueue((a, b) => b[0] - a[0]) // 최소힙(Min Heap)
  // 시작 노드로 가기 위한 최단 거리는 0으로 우선순위 큐에 삽입
  pq.enq([0, start])
  distance[start] = 0
  while (pq.size() != 0) {
    // 우선순위 큐가 비어있지 않다면
    // 가장 최단 거리가 짧은 노드에 대한 정보 꺼내기
    let [dist, now] = pq.deq()
    // 현재 노드가 이미 처리된 적이 있는 노드라면 무시
    if (distance[now] < dist) continue
    // 현재 노드와 연결된 다른 인접한 노드들을 확인
    for (let i of graph[now]) {
      let cost = dist + i[1]
      // 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost
        pq.enq([cost, i[0]])
      }
    }
  }
}

let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let INF = 1e9 // 무한을 의미하는 값으로 10억을 설정
// 노드의 개수, 간선의 개수를 입력받기
let [n, m] = input[0].split(' ').map(Number)
// 각 노드에 연결되어 있는 노드에 대한 정보를 담는 배열을 만들기
let graph = []
for (let i = 0; i <= n + 1; i++) graph.push([])
// 모든 간선 정보를 입력받기
for (let i = 1; i <= m; i++) {
  let [a, b, c] = input[i].split(' ').map(Number)
  // a번 노드에서 b번 노드로 가는 비용이 c라는 의미
  graph[a].push([b, c])
  graph[b].push([a, c])
}
// 꼭 거쳐야 하는 a와 b 노드 입력받기
let [a, b] = input[m + 1].split(' ').map(Number)

let distance = new Array(n + 1).fill(INF) // 최단 거리 테이블 초기화
dijkstra(1) // 다익스트라 알고리즘 수행
let distance_1_to_a = distance[a]
let distance_1_to_b = distance[b]

distance = new Array(n + 1).fill(INF) // 최단 거리 테이블 초기화
dijkstra(a) // 다익스트라 알고리즘 수행
let distance_a_to_b = distance[b]
let distance_a_to_n = distance[n]

distance = new Array(n + 1).fill(INF) // 최단 거리 테이블 초기화
dijkstra(b) // 다익스트라 알고리즘 수행
let distance_b_to_a = distance[a]
let distance_b_to_n = distance[n]

let route1 = distance_1_to_a + distance_a_to_b + distance_b_to_n
let route2 = distance_1_to_b + distance_b_to_a + distance_a_to_n

let result = Math.min(route1, route2)
if (result >= INF) console.log(-1) // 경로가 없는 경우
else console.log(result)
