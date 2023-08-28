/*** https://www.acmicpc.net/problem/5214
 * 하이퍼튜브 하나는 역 𝐾개를 서로 연결한다.
 * 1번 역에서 N번 역으로 가는데 방문하는 최소 역의 수를 출력하면 된다.
 * 역의 개수 𝑁이 최대 100,000이고, 하이퍼튜브의 개수 𝑀은 최대 1,000이다.
 * - 이때, 하이퍼튜브도 역(노드)으로 보고 BFS를 수행할 수 있다.
 *
 * 일종의 최단 거리 문제이다.
 *  - 각 간선의 비용이 모두 동일하기 때문에, BFS로 최단 거리를 계산할 수 있다.
 *  - 만약 각 간선의 비용이 다를 수 있다면, 다익스트라와 같은 방법을 이용해야 한다.
 * 하이퍼튜브를 통해서만 이동이 가능하므로, 계산된 최단 거리 값을 2로 나누면 그것이 정답이다.
 *  - 1 → H → 3 → H → 5로 갔다고 하면 거리가 4이므로, 지나야 하는 역의 개수는 2개다.
 *
 * [문제 해결 아이디어]
 * 하이퍼튜브를 포함하여 전체 노드를 그래프로 구성한다.
 * BFS를 이용해서 1번에서 𝑁번까지의 최단 거리를 계산한다.
 * 𝑁 = 5일 때의 예시로는 다음과 같은 것이 있다
 *
 * 1번에서 𝑁번까지 가는데 방문하는 최소 역의 수를 구해야 한다.
 * [핵심 아이디어] 하이퍼튜브를 노드로 간주하고, 너비 우선 탐색(BFS)을 사용한다.
 * 각 하이퍼튜브와 하이퍼튜브가 연결하는 노드들을 모두 양방향 간선으로 연결한다
 *
 * 1번 노드에서부터 너비 우선 탐색(BFS)을 수행한다.
 * 𝑁번 노드까지의 거리가 𝑑𝑖𝑠𝑡𝑎𝑛𝑐𝑒일 때 정답은 𝑑𝑖𝑠𝑡𝑎𝑛𝑐𝑒 // 2 + 1이다.
 * 아래 예시에서 정답은 4이다
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

// 역의 개수(N), 간선의 개수(K), 하이퍼튜브의 개수(M)
let [n, k, m] = input[0].split(' ').map(Number)
// 그래프 정보(N개의 역과 M개의 하이퍼튜브는 모두 노드)
let graph = []
for (let i = 1; i <= n + m; i++) graph[i] = []
for (let i = 1; i <= m; i++) {
  let arr = input[i].split(' ').map(Number)
  for (let x of arr) {
    graph[x].push(n + i) // 노드 → 하이퍼 튜브
    graph[n + i].push(x) // 하이퍼 튜브 → 노드
  }
}

let visited = new Set([1]) // 1번 노드에서 출발
let queue = new Queue()
queue.enqueue([1, 1]) // [거리, 노드 번호]
let found = false

while (queue.getLength() != 0) {
  // 큐가 빌 때까지 반복하기
  let [dist, now] = queue.dequeue()
  // N번 노드에 도착한 경우
  if (now == n) {
    // 절반은 하이퍼 튜브
    console.log(parseInt(dist / 2) + 1)
    found = true
    break
  }
  for (let y of graph[now]) {
    // 인접 노드를 하나씩 확인
    if (!visited.has(y)) {
      // 아직 방문하지 않았다면
      queue.enqueue([dist + 1, y]) // 방문 처리
      visited.add(y)
    }
  }
}
if (!found) console.log(-1) // N번 노드에 도달 불가능
