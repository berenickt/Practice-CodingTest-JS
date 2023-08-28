/*** https://www.acmicpc.net/problem/4803
 * 하나의 그래프 안에 포함된 트리(tree)의 개수를 세는 문제다.
 * 트리: 사이클이 없는 연결 요소
 * 트리의 정의에 따라서 DFS를 이용해 트리의 개수를 계산하여 문제를 해결할 수 있다.
 *
 * 무방향 그래프 내 사이클 판별 알고리즘은 다음과 같다.
 * 특정 노드에서 DFS를 수행하는 과정에서 “인접 노드가 이미 방문한 노드라면” 사이클이다.
 * 단, 무방향 그래프이므로 직전 노드는 제외한다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let line = 0
let testCase = 1

while (true) {
  let [n, m] = input[line].split(' ').map(Number)
  if (n == 0 && m == 0) break // 노드의 개수(N)와 간선의 개수(M)
  graph = [] // 트리 정보 입력받기
  for (let i = 1; i <= n; i++) graph[i] = []
  for (let i = 1; i <= m; i++) {
    let [x, y] = input[line + i].split(' ').map(Number)
    graph[x].push(y)
    graph[y].push(x)
  }
  visited = new Array(n + 1).fill(false) // 방문 처리 배열
  let cnt = 0 // 그래프 내 트리의 개수
  for (let i = 1; i <= n; i++) {
    // 하나씩 노드를 확인하며
    if (!visited[i]) {
      // 연결 요소이면서
      if (!isCycle(i, 0)) cnt++ // 사이클이 아니라면 트리이므로, 카운트하기
    }
  }
  if (cnt == 0) console.log(`Case ${testCase}: No trees.`)
  else if (cnt == 1) console.log(`Case ${testCase}: There is one tree.`)
  else console.log(`Case ${testCase}: A forest of ${cnt} trees.`)
  line += m + 1 // 다음 테스트 케이스로 이동
  testCase++
}
