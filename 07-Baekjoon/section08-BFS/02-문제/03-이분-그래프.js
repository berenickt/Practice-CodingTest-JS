/*** https://www.acmicpc.net/problem/1707
 * 이분 그래프(Bipartite Graph)는 노드들을 두 개의 집합으로 분할한 뒤에
 * 같은 집합에 속한 정점끼리 서로 인접하지 않는 그래프를 의미한다
 */
// Node.js에서는 Stack Size 초과로 DFS로 해결 불가능
// 미방문(color: -1), 빨강(color: 0), 파랑(color: 1)
function bfs(x, graph, visited) {
  queue = new Queue()
  queue.enqueue(x)
  visited[x] = 0 // 처음 노드는 빨간색으로 칠하기
  while (queue.getLength() != 0) {
    x = queue.dequeue()
    for (let y of graph[x]) {
      if (visited[y] == -1) {
        visited[y] = (visited[x] + 1) % 2 // 빨강 ↔ 파랑
        queue.enqueue(y)
      }
    }
  }
}
function isBipartite(graph, visited) {
  for (let x = 1; x < visited.length; x++) {
    for (let y of graph[x]) if (visited[x] == visited[y]) return false
  }
  return true
}

let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let testCases = Number(input[0]) // 테스트 케이스의 수
let line = 1
while (testCases--) {
  // 정점의 개수(V), 간선의 개수(E)
  let [v, e] = input[line].split(' ').map(Number)
  // 그래프 정보 입력받기
  let graph = []
  for (let i = 1; i <= v; i++) graph[i] = []
  for (let i = 1; i <= e; i++) {
    let [u, v] = input[line + i].split(' ').map(Number)
    graph[u].push([v])
    graph[v].push([u])
  }
  let visited = new Array(v + 1).fill(-1) // 방문 정보
  for (let i = 1; i <= v; i++) {
    // BFS를 이용해 색칠
    if (visited[i] == -1) bfs(i, graph, visited)
  }
  line += e + 1 // 다음 테스트 케이스로 이동
  if (isBipartite(graph, visited)) console.log('YES')
  else console.log('NO')
}
