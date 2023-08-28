/*** https://www.acmicpc.net/problem/2805
 * 나무 자르기 문제의 목표: 적절한 높이(height) 값을 찾기
 * 높이를 15로 설정한 경우, 총 7만큼의 나무를 얻을 수 있다.
 *
 * 1. 절단기의 높이가 올라가는 경우: 일반적으로 얻을 수 있는 나무의 양이 감소한다.
 * 2. 절단기의 높이가 내려가는 경우: 일반적으로 얻을 수 있는 나무의 양이 증가한다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0].split(' ')[0]) // 나무의 수(N)
let m = Number(input[0].split(' ')[1]) // 가져갈 나무의 길이(M)
let arr = input[1].split(' ').map(Number) // 각 나무의 높이

let start = 0 // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let end = arr.reduce((a, b) => Math.max(a, b))

let result = 0
while (start <= end) {
  // 이진 탐색 수행(반복문)
  let mid = parseInt((start + end) / 2) // 현재의 중간점(높이)
  let total = 0 // mid로 잘랐을 때 얻을 수 있는 나무의 양 계산
  for (x of arr) if (x > mid) total += x - mid
  if (total < m) end = mid - 1 // 나무의 양이 부족한 경우 더 많이 자르기(높이 줄이기)
  else {
    // 나무의 양이 충분한 경우 덜 자르기(높이 키우기)
    result = mid // 최대한 덜 잘랐을 때가 정답이므로, result에 기록
    start = mid + 1
  }
}
console.log(result)
