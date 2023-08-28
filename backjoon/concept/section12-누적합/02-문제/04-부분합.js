/*** https://www.acmicpc.net/problem/1806
 * 길이 𝑁짜리 수열이 주어진다.
 * 이 수열에서 구간 합 중에 그 합이 𝑆 이상이 되는 것 중, 가장 짧은 것의 길이를 계산한다.
 *
 * [예시]
 * 𝑁 = 10, 𝑆 = 15, 𝑎𝑟𝑟 = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]인 경우를 가정하자.
 * 이 경우 𝑎𝑟𝑟[3] + 𝑎𝑟𝑟[4] ≥ 𝑆 = 15이며, 길이는 2가 된다.
 *
 * 투 포인터를 사용하여 구간 합을 체크하여 문제를 해결할 수 있다.
 * 다음과 같이 초기화를 진행한다.
 * 1. 시작점(𝑠𝑡𝑎𝑟𝑡) = 0
 * 2. 끝점(𝑒𝑛𝑑) = 0
 *
 * 시작점(𝑠𝑡𝑎𝑟𝑡)이 증가하면 구간 합이 증가한다.
 * 끝점(𝑒𝑛𝑑)이 증가하면 구간 합이 감소한다
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let [n, s] = input[0].split(' ').map(Number)
let arr = input[1].split(' ').map(Number)

let result = 1e9
let start = 0 // 시작점(start)
let end = 0 // 끝점(end)
let summary = arr[0] // 구간 합

// i가 고정된 상태에서 j를 최대한 오른쪽으로 이동시키는 구현 방식
while (true) {
  // 현재 합이 s보다 작다면, 합을 키우기 위해 end를 증가
  while (end < n - 1 && summary < s) {
    end += 1
    summary += arr[end]
  }
  if (summary >= s) {
    // 현재 합이 s 이상인 경우
    result = Math.min(result, end - start + 1) // 최소 길이 계산
  }
  summary -= arr[start]
  start += 1
  // [유의] 탈출 조건에 유의
  if (start >= n) break
}
if (result == 1e9) result = 0
console.log(result)
