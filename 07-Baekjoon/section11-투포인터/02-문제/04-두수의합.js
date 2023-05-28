/*** https://www.acmicpc.net/problem/3273
 * 다음과 같이 원소가 주어진 경우를 가정한다.
 * 𝑎𝑟𝑟 = [5, 12, 7, 10, 9, 1, 2, 3, 11]
 * 원소를 오름차순 정렬한 결과는 다음과 같다.
 * 𝑠𝑜𝑟𝑡𝑒𝑑 = [1, 2, 3, 5, 7, 9, 10, 11, 12]
 *
 * 모든 정수가 양의 정수이고 서로 다르므로, 투 포인터를 사용할 수 있다.
 * 초기화: 𝑠𝑡𝑎𝑟𝑡 = 0, 𝑒𝑛𝑑 = 𝑁 − 1
 * 오름차순 정렬이 되어 있다면, 다음이 성립한다.
 * 1. 시작점(start)을 1 증가시키면, 𝑠𝑜𝑟𝑡𝑒𝑑 𝑠 + 𝑠𝑜𝑟𝑡𝑒𝑑 𝑒 가 증가한다.
 * 2. 끝점(end)을 1 감소시키면, 𝑠𝑜𝑟𝑡𝑒𝑑 𝑠 + 𝑠𝑜𝑟𝑡𝑒𝑑 𝑒 가 감소한다.
 *
 * 따라서 현재의 합(𝑠𝑜𝑟𝑡𝑒𝑑 𝑠 + 𝑠𝑜𝑟𝑡𝑒𝑑 𝑒 )와 𝑋를 매번 비교한다
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let n = Number(input[0]) // 원소의 개수(N)
let arr = input[1].split(' ').map(Number) // 전체 원소 입력
let x = input[2] // X 입력

arr.sort((a, b) => a - b) // 오름차순 정렬

// [현재 구현] start가 고정된 상태에서 end를 최대한 왼쪽으로 이동시키는 구현
let result = 0
let start = 0 // 시작점(start)
let end = n - 1 // 끝점(end)
while (true) {
  // 현재 합이 x보다 크다면, 합을 줄이기 위해 end를 감소
  while (end > 0 && arr[start] + arr[end] > x) {
    end -= 1
  }
  if (arr[start] + arr[end] == x) {
    // 현재 합이 x인 경우
    result += 1 // 카운트
    end -= 1 // 모든 정수가 다르다는 조건이 있으므로, end를 감소
  }
  start += 1
  // [유의] 탈출 조건에 유의
  if (start >= end) break // 서로 다른 2개의 정수를 고르는 [조합]이므로
}
console.log(result)
