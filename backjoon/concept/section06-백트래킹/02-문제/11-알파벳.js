/*** https://www.acmicpc.net/problem/1987
 *
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [r, c] = input[0].split(' ').map(Number) // 맵의 크기 R X C 입력받기
let arr = []
for (let i = 1; i <= r; i++) arr.push(input[i])

let dx = [-1, 1, 0, 0] // 상, 하, 좌, 우 방향
let dy = [0, 0, -1, 1]
let visited = new Set() // 방문한 적 있는 알파벳 집합
let maxDepth = 0 // 최대 깊이

function dfs(depth, x, y) {
  maxDepth = Math.max(maxDepth, depth) // 최대 깊이(max depth) 계산
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i]
    let ny = y + dy[i]
    if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue // 맵을 벗어난다면 무시
    if (visited.has(arr[nx][ny])) continue
    visited.add(arr[nx][ny]) // 방문 처리
    dfs(depth + 1, nx, ny) // 재귀 함수 호출
    visited.delete(arr[nx][ny]) // 방문 처리 해제
  }
}
visited.add(arr[0][0]) // 왼쪽 위에서 출발
dfs(1, 0, 0)
console.log(maxDepth)
