/*** https://www.acmicpc.net/problem/2667
 * 맵의 크기는 𝑁 × 𝑁 크기의 정사각형 형태이다.
 * 𝑁은 최대 25이므로, DFS 혹은 BFS를 이용할 수 있다.
 *
 * 연결 요소란, 모든 두 꼭짓점 사이에 경로가 존재하는 그래프를 의미한다.
 * 본 문제는 이러한 연결 요소(connected component)를 찾는 문제다.
 * 구체적으로 각 연결 요소에 포함된 원소의 개수를 계산하는 것이 요구된다.
 *
 * 연결 요소의 개수를 세는 방법은 다음과 같다.
 * 1. 방문하지 않은 노드를 만날 때마다 카운트(count)하고, DFS를 호출한다.
 * 2. DFS는 해당 위치로부터 연결된(연결 요소에 포함된) 모든 노드를 방문 처리한다.
 */
function dfs(x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= n) return 0
  if (graph[x][y] >= 1) {
    // 아직 방문하지 않았다면
    graph[x][y] = -1
    let result = 1
    result += dfs(x - 1, y) // 4가지 방향 호출
    result += dfs(x, y - 1)
    result += dfs(x + 1, y)
    result += dfs(x, y + 1)
    return result
  }
  return 0
}

let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let n = Number(input[0]) // 지도의 크기(N)
let graph = [] // 그래프 정보 입력

for (let i = 1; i <= n; i++) {
  graph.push(input[i].split('').map(Number))
}

let answer = [] // 단지의 수 = 연결 요소(connected component)의 수 계산
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let current = dfs(i, j) // 현재 위치에서 DFS 수행
    if (current > 0) answer.push(current) // 단지가 존재하는 경우
  }
}

answer.sort((a, b) => a - b) // 단지의 수와 오름차순 정렬된 각 단지내 집의 수 출력
console.log(answer.length + '\n' + answer.join('\n'))
