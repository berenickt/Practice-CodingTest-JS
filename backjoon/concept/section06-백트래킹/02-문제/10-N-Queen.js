/*** https://www.acmicpc.net/problem/9663
 * 𝑁 × 𝑁 체스 보드 위에 퀸 𝑁개가 서로 공격할 수 없게 놓는 문제다.
 * 예를 들어 8 × 8에 하나의 퀸이 놓여져 있는 예시는 다음과 같다
 *
 * 8 × 8에 8개의 퀸을 서로 공격할 수 없게 놓는 예시는 다음과 같다.
 * 하나의 퀸 A가 이미 존재하는 상태에서, 다른 퀸 B를 놓으려면 어떻게 해야 할까?
 * 퀸 A의 "상하좌우 및 대각선" 위치가 아닌 위치에 퀸 B를 놓을 수 있다
 *
 * 하나의 퀸 𝐴가 이미 존재하는 상태에서, 다른 퀸 𝐵를 놓으려면 어떻게 해야 할까?
 * 트리 구조로 표현하면 이해가 쉽다.
 *
 * 다만, 이 문제는 가능한 모든 조합의 수를 구하는 것과 같다.
 * 매 재귀함수마다 실제로 𝑁 × 𝑁 모든 위치를 모두 볼 필요가 없다.
 * 맨 처음 행(row)부터 차례대로 퀸을 놓는다고 생각하면 가짓수를 훨씬 줄일 수 있다.
 * N-Queen 문제는 가능한 조합을 계산하는 것이므로, 현재 행의 위쪽 행은 보지 않아도 된다.
 *
 * 백트래킹은 기본적으로 가능한 노드에 대하여 계속해서 재귀적으로 함수를 호출한다.
 * 백트래킹은 모든 경우의 수를 탐색하기에 적합하다.
 * N-Queen 문제를 해결하기 위해서는 특정 위치(노드)의 가능 여부를 판단할 필요가 있다.
 * 가능한 노드 여부는 다음의 두 가지를 보면 된다
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0]) // 전체 맵(map)의 크기
let queens = [] // 현재 체스판에 놓인 퀸(queen)의 위치 정보들

function possible(x, y) {
  // (x, y) 위치에 퀸을 놓을 수 있는지 확인
  for (let [a, b] of queens) {
    // 현재까지 놓았던 모든 퀸(queen)의 위치를 하나씩 확인하며
    if (a == x || b == y) return false // 행이나 열이 같다면 놓을 수 없음
    if (Math.abs(a - x) == Math.abs(b - y)) return false // 대각선에 위치한 경우 놓을 수 없음
  }
  return true
}
let cnt = 0
function dfs(row) {
  if (row == n) cnt += 1 // 퀸(queen)을 N개 배치할 수 있는 경우 카운트
  for (let i = 0; i < n; i++) {
    // 현재 행(row)에 존재하는 열을 하나씩 확인하며
    if (!possible(row, i)) continue // 현재 위치에 놓을 수 없다면 무시
    queens.push([row, i]) // 현재 위치에 퀸을 놓기
    dfs(row + 1) // 재귀 함수 호출
    queens.pop() // 현재 위치에서 퀸을 제거하기
  }
}
dfs(0)
console.log(cnt)
