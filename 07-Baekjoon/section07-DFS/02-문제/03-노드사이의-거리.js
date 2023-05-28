/*** https://www.acmicpc.net/problem/1240
 * 본 문제에서는 트리가 양방향 간선으로 구성되어 있다고 가정해보자.
 *
 * 문제에서 주어지는 노드의 개수 𝑁은 최대 1000이다.
 * 주어지는 그래프는 항상 트리(tree) 형식이므로, 간선의 개수는 𝑁 − 1개이다.
 *
 * 트리에서 노드 𝐴와 𝐵를 잇는 경로는 오직 1개만 존재한다.
 * 따라서 트리 내에 존재하는 노드 𝐴와 𝐵의 거리를 구하기 위한 시간 복잡도는 𝑂(𝑁)이다.
 *
 * 쿼리의 개수 𝑀은 최대 1000이다.
 * 따라서, 매 쿼리마다 노드 𝐴와 𝐵의 거리를 계산해도 요구되는 시간 복잡도는 𝑂(𝑁𝑀)이다.
 *
 * 트리에서는 임의의 두 노드 간의 경로가 오직 1개이다.
 * 따라서 트리에서는 BFS가 아닌 DFS로도 간단히 최단 거리를 계산할 수 있다.
 * 단순히 매 쿼리(query)마다, 노드 𝐴에서 𝐵까지의 거리를 계산한다
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [n, m] = input[0].split(' ').map(Number) // 노드의 개수(N), 쿼리의 개수(M)
let graph = [] // 트리 정보 입력받기
for (let i = 1; i <= n; i++) graph[i] = []
for (let i = 1; i < n; i++) {
  // 노드 X와 노드 Y는 서로 연결
  let [x, y, cost] = input[i].split(' ').map(Number)
  graph[x].push([y, cost])
  graph[y].push([x, cost])
}

function dfs(x, dist) {
  // 깊이 우선 탐색(DFS) 함수 구현
  if (visited[x]) return // 각 노드는 한 번만 방문
  visited[x] = true // 방문 처리
  distance[x] = dist
  for (let [y, cost] of graph[x]) dfs(y, dist + cost)
}

for (let i = 0; i < m; i++) {
  // 각 쿼리(query)마다 매번 DFS를 수행
  let [x, y] = input[n + i].split(' ').map(Number)
  visited = new Array(n + 1).fill(false)
  distance = new Array(n + 1).fill(-1)
  dfs(x, 0) // 노드 X에서 출발했을 때의 모든 노드까지의 거리 계산
  console.log(distance[y]) // Y까지의 최단 거리
}
