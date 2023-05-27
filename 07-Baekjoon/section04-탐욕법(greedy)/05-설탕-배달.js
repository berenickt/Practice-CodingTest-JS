/*** https://www.acmicpc.net/problem/2839
 * 현실에서 적용할 수 있는 가장 단순한 공식을 생각해보자.
 *
 * 어떤 수를 0으로 만들어야 하는 상황에서 2가지 연산을 사용할수있다.
 * 1. 값에서 5를빼기
 * 2. 값에서 3을빼기
 *
 * [문제 해결 아이디어]
 * 1) 현재 값이 5로 나누어 떨어지는 경우, 5로 나누면 될 것이다.
 * 2) 그렇지 않다면, 기존의 값이 5로 나누어 떨어지는 값이 될 때까지 3을 빼준 뒤에 1)을 수행한다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let cnt = 0
let flag = false

// 더 이상 반복할 수 없을 때까지 반복
while (n >= 0) {
  // n이 0이 되었거나, 5로 나누어 떨어지는 값인 경우
  if (n == 0 || n % 5 == 0) {
    cnt += parseInt(n / 5) // 5로 나눈 몫을 더하기
    console.log(cnt)
    flag = true
    break
  }
  n -= 3
  cnt += 1
}
if (!flag) {
  console.log(-1)
}
