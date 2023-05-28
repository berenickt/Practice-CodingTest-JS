/*** https://www.acmicpc.net/problem/2842
 * 전체 공간은 𝑁 × 𝑁의 행렬로 표현된다.
 * 출발 지점(우체국)은 "P", 집은 "K", 목초지는 "."로 표현된다.
 * 현재 위치에서 인접한 8칸으로 이동 가능하다.
 *
 * [목표]
 * 1. "P"에서 출발하여 모든 "K"를 방문한 뒤에 다시 "P"로 돌아온다.
 * 2. 방문하는 칸 중 가장 높은 곳과 낮은 곳의 차이를 최소화한다
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let n = Number(input[0])
let arr = [] // 마을 정보
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(''))
}

let height = [] // 고도 정보
for (let i = n + 1; i <= n + n; i++) {
  height.push(input[i].split(' ').map(Number))
}

// 이동 가능한 인접한 8가지 칸
let dx = [-1, -1, -1, 0, 0, 1, 1, 1]
let dy = [-1, 0, 1, -1, 1, -1, 0, 1]

function dfs(x, y) {
  visited[x][y] = true // 방문 처리
  if (arr[x][y] == 'K') cnt += 1 // 집(K)인 경우 카운트
  for (let i = 0; i < 8; i++) {
    let nx = x + dx[i]
    let ny = y + dy[i]
    // 범위를 벗어나는 경우 무시
    if (nx < 0 || nx >= n || ny < 0 || ny > n) continue
    if (!visited[nx][ny]) {
      // 아직 방문한 적 없는 경우
      // 정해진 범위 [left, right] 안에 해당하는 고도인 경우
      if (height[nx][ny] >= uniqueHeight[left] && height[nx][ny] <= uniqueHeight[right]) {
        dfs(nx, ny)
      }
    }
  }
}

let uniqueHeight = new Set()
let target = 0
let result = 1e9
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    uniqueHeight.add(height[i][j])
    if (arr[i][j] == 'P') {
      // 출발 지점(P)
      startX = i
      startY = j
    }
    if (arr[i][j] == 'K') target += 1 // 전체 집(K)의 개수
  }
}
uniqueHeight = [...uniqueHeight] // 고유한 고도(height) 값 정렬
uniqueHeight.sort((a, b) => a - b)

let left = 0
let right = 0
let middle = 0
for (let i = 0; i < uniqueHeight.length; i++) {
  // 출발 지점의 높이(height)를 초기 right으로 설정
  if (uniqueHeight[i] == height[startX][startY]) {
    right = i
    middle = i
    break
  }
}

while (true) {
  // 방문 가능한 집의 수(cnt)가 target보다 작다면, right을 증가
  while (true) {
    visited = []
    for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false))
    cnt = 0
    dfs(startX, startY) // 깊이 우선 탐색(DFS)으로 방문 가능한 집 카운트
    if (right < uniqueHeight.length - 1 && cnt < target) right += 1
    else break
  }
  if (cnt == target) {
    // 모든 집을 방문 가능한 경우
    // 가장 높은 고도와 낮은 고도의 차이 [최솟값] 기록
    result = Math.min(result, uniqueHeight[right] - uniqueHeight[left])
  }
  left += 1
  // [유의] 탈출 조건에 유의
  if (left > middle || right >= uniqueHeight.length) break
}
console.log(result)
