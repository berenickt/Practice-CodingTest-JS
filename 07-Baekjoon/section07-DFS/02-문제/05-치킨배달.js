/*** https://www.acmicpc.net/problem/15686
 * 치킨 거리는 집과 가장 가까운 치킨집 사이의 거리이다.
 * 𝑀개의 치킨 집만 남기는 모든 경우의 수 중에서 [모든 집의 치킨 거리의 합]의 최솟값을 계산한다.
 * 𝑁 = 5, 𝑀 = 3인 경우를 고려해 보자. (정답은 5)
 */
function dfs(depth, start) {
  if (depth == m) {
    // 각 조합을 확인하는 부분
    let result = [] // 조합(combination) 결과 저장 테이블
    for (let i of selected) result.push(chicken[i])
    let sum = 0 // 치킨 거리의 합
    for (let [hx, hy] of house) {
      // 모든 집에 대하여
      let temp = 1e9 // 가장 가까운 치킨 집을 찾기
      for (let [cx, cy] of result) {
        temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy))
      }
      sum += temp // 가장 가까운 치킨 집까지의 거리를 더하기
    }
    answer = Math.min(answer, sum) // 최솟값 계산
    return
  }
  // start 지점부터 하나씩 원소 인덱스(index)를 확인하며
  for (let i = start; i < chicken.length; i++) {
    if (visited[i]) continue // [중복을 허용하지 않으므로] 이미 처리 된 원소라면 무시
    selected.push(i) // 현재 원소 선택
    visited[i] = true // 현재 원소 방문 처리
    dfs(depth + 1, i + 1) // 조합이므로, 재귀 함수 호출시 다음 인덱스(index)를 넣기
    selected.pop() // 현재 원소 선택 취소
    visited[i] = false // 현재 원소 방문 처리 취소
  }
}

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let [n, m] = input[0].split(' ').map(Number) // 도시의 크기(N)와 치킨집의 개수(M)
let chicken = [] // 전체 치킨집 위치 배열
let house = [] // 전체 집 위치 배열
for (let i = 1; i <= n; i++) {
  // 전체 도시 정보 입력받기
  let line = input[i].split(' ').map(Number) // 빈 칸(0), 집(1), 치킨집(2)
  for (let j = 0; j < n; j++) {
    if (line[j] == 1) house.push([i, j]) // 집(1)
    if (line[j] == 2) chicken.push([i, j]) // 치킨집(2)
  }
}
let visited = new Array(chicken.length).fill(false) // 각 치킨집 방문 여부
let selected = [] // 현재 조합에 포함된 원소(element)
let answer = 1e9
dfs(0, 0)
console.log(answer)
