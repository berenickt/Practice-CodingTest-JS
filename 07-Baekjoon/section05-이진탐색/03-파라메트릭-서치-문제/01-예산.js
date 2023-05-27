/*** https://www.acmicpc.net/problem/2512
 * 문제 요구사항: 적절한 상한 금액을 찾는 것이 문제의 목표다.
 * 전체 국가 예산이 485이고, 4개의 지방 예산 요청이 120, 110, 140, 150이라고 하자.
 * 상한 금액이 127인 경우, 배정 금액의 합이 120 + 110 + 127 + 127 = 484이다.
 *
 * 1. 배정된 총 예산이 조건을 만족한다면, 상한 금액을 증가(최대화가 목표)시킨다.
 * 2. 배정된 총 예산이 조건을 만족하지 못한다면, 상한 금액을 감소시킨다
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0].split(' ')[0]) // 지방의 수(N)
let arr = input[1].split(' ').map(Number) // 각 지방의 예산 요청
let m = Number(input[2]) // 총 예산(M)

let start = 1 // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let end = arr.reduce((a, b) => Math.max(a, b))

let result = 0
while (start <= end) {
  // 이진 탐색 수행(반복문)
  let mid = parseInt((start + end) / 2) // 현재의 중간점(상한액)
  let total = 0 // 배정된 예산의 총액 계산
  for (x of arr) {
    // 각 지방에서 요청한 예산을 하나씩 확인하며
    total += Math.min(mid, x) // 예산 배정
  }
  if (total <= m) {
    // 조건을 만족한다면, 상한액(최대화가 목표)을 증가시키기
    result = mid
    start = mid + 1
  } else {
    // 조건을 만족하지 못한다면, 상한액을 감소시키기
    end = mid - 1
  }
}
console.log(result)
