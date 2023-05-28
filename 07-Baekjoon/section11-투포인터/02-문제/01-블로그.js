/*** https://www.acmicpc.net/problem/21921
 * 𝑁일간의 방문자 수가 배열 형태로 주어진다.
 * [요구 사항] 𝑋일 동안 가장 많이 들어온 방문자 수와 그 기간들을 출력한다.
 *
 * [예시 1] 𝑁 = 5, 𝑋 = 2인 경우를 생각해 보자.
 * 𝑎𝑟𝑟 = 1, 4, 2, 5, 1
 * 이때, 정답은 다음과 같다.
 * 7 → 가장 많이 들어온 방문자 수: 𝑎𝑟𝑟 2 부터 𝑎𝑟𝑟 3 까지(길이는 𝑋 = 2)
 * 1 → 가장 많이 들어온 방문자 수가 7인 구간은 1개만 존재
 *
 * [예시 2] 𝑁 = 7, 𝑋 = 5인 경우를 생각해 보자.
 * 𝑎𝑟𝑟 = 1, 1, 1, 1, 1, 5, 1
 * 이때, 정답은 다음과 같다.
 * 9 → 가장 많이 들어온 방문자 수: 𝑎𝑟𝑟 1 부터 𝑎𝑟𝑟 5 , 𝑎𝑟𝑟 2 부터 𝑎𝑟𝑟 6 두 가지 경우
 * 2 → 가장 많이 들어온 방문자 수가 7인 구간은 2개 존재
 *
 * 고정 크기 윈도우를 사용하여 슬라이딩 윈도우를 사용한다
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let [n, x] = input[0].split(' ').map(Number)
let arr = [0, ...input[1].split(' ').map(Number)]

let sum = 0
for (let i = 1; i <= n; i++) {
  // 1부터 X번째 날의 방문자 수의 합
  if (i <= x) sum += arr[i]
}
let maxSum = sum // 가장 큰 합
let count = 1 // 기간의 개수

// 슬라이딩 윈도우 시작
let left = 1
let right = x
while (true) {
  // 윈도우를 한 칸 오른쪽으로 이동하기
  left += 1
  right += 1
  if (right > n) break
  sum = sum + arr[right] - arr[left - 1] // 합을 계산하여 정답 갱신
  if (maxSum == sum) count += 1
  else if (maxSum < sum) {
    // 더 큰 합을 찾은 경우
    maxSum = sum
    count = 1
  }
}

if (maxSum == 0) console.log('SAD') // 정답 출력
else {
  console.log(maxSum)
  console.log(count)
}
