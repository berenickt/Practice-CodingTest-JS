/*** https://www.acmicpc.net/problem/9466
 * 모든 학생들은 프로젝트를 함께 하고 싶은 학생을 한 명씩 선택한다.
 * 자기 자신을 선택하는 것도 가능하다.
 * 결과적으로 어느 프로젝트 팀에도 속하지 못한 학생들의 수를 계산해야 한다
 *
 * 모든 학생들은 자신이 원하는 학생과 같은 팀에 소속되고자 한다.
 * 각 학생들의 선택을 방향 간선으로 표현하여 그래프를 구성할 수 있다.
 * 한 팀에 포함된 임의의 학생 A와 B가 있을 때, A에서 B로 도달할 수 있어야 한다.
 * 즉, 본 문제는 사이클(cycle)을 구성하는 부분 그래프에 포함된 노드의 개수를 세는 문제
 */
function dfs(x, graph, visited, finished, result) {
  visited[x] = true // 현재 노드 방문 처리
  let y = graph[x] // 다음 노드
  if (!visited[y]) {
    // 다음 노드를 아직 방문하지 않았다면
    dfs(y, graph, visited, finished, result)
  }
  // 다음 노드를 방문한 적 있고, 완료되지 않았다면
  else if (!finished[y]) {
    // 사이클이 발생한 것이므로 사이클에 포함된 노드 저장
    while (y != x) {
      result.push(y)
      y = graph[y]
    }
    result.push(x)
  }
  finished[x] = true // 현재 노드의 처리가 완료됨
}

let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let testCases = Number(input[0]) // 테스트 케이스의 수
let line = 1
while (testCases--) {
  let n = Number(input[line])
  let graph = [0, ...input[line + 1].split(' ').map(Number)]
  let visited = new Array(n + 1).fill(false)
  let finished = new Array(n + 1).fill(false)
  let result = []

  for (let x = 1; x <= n; x++) {
    // 각 위치에서 연결 요소 계산 및 사이클 판단
    if (!visited[x]) dfs(x, graph, visited, finished, result)
  }

  line += 2 // 다음 테스트 케이스로 이동
  console.log(n - result.length)
}
