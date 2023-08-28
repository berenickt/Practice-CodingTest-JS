/*** https://www.acmicpc.net/problem/2668
 * 첫째 줄에서 뽑은 정수들이 이루는 집합 A와 뽑힌 정수들의 바로 밑에 있는
 * 정수들이 이루는 집합 B가 일치하도록 하는 집합 A의 최대 크기를 계산한다.
 * 아래 예시에서는 𝐴 = {1, 3, 5}일 때 𝐵 = {3, 1, 5}이며, 이것이 최대 크기다.
 *
 * 첫째 줄과 둘째 줄의 관계를 방향 간선으로 표현하여 그래프를 구성할 수 있다.
 * [핵심] 본 문제는 사이클(cycle)을 구성하는 부분 그래프에 포함된 노드의 개수를 세는 문제
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

let n = Number(input[0])
let graph = [0]
for (let i = 1; i <= n; i++) {
  graph.push(Number(input[i]))
}
let visited = new Array(n + 1).fill(false)
let finished = new Array(n + 1).fill(false)
let result = []

for (let x = 1; x <= n; x++) {
  if (!visited[x]) dfs(x, graph, visited, finished, result)
}
console.log(result.length)
result.sort((a, b) => a - b)
for (let x of result) console.log(x)
