/*** https://www.acmicpc.net/problem/2606
 * 1번 노드에서 도달할 수 있는 다른 노드의 개수를 출력하는 문제다.
 * DFS를 이용해 양방향 그래프에 대한 그래프 탐색을 진행할 수 있다.
 *
 * DFS를 이용해 1번 노드에서 출발해 그래프 탐색을 진행할 수 있다.
 * 그래프를 인접 리스트로 표현할 때, 인덱스 0은 사용하지 않도록 하면 직관적이다
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0]) // 정점의 개수(N)
let m = Number(input[1]) // 간선의 개수(M)
let graph = [] // 그래프 정보 입력
for (let i = 1; i <= n; i++) graph[i] = []
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(' ').map(Number)
  graph[x].push(y)
  graph[y].push(x)
}

let cnt = 0
let visited = new Array(n + 1).fill(false)
function dfs(x) {
  // 깊이 우선 탐색(DFS) 수행
  visited[x] = true // 현재 노드를 방문 처리
  cnt++
  for (y of graph[x]) {
    // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    if (!visited[y]) dfs(y)
  }
}
dfs(1)
console.log(cnt - 1)
