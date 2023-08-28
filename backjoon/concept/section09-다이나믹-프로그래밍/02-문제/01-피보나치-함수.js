/*** https://www.acmicpc.net/problem/1003
 * 점화식을 도출하기 위해 몇 가지 예시를 직접 코드를 실행하며 확인할 수 있다
 */
// 0과 1이 몇 번씩 출력되는지 확인하는 소스코드
let zero = 0
let one = 0
function fibonacci(n) {
  if (n == 0) {
    zero++
    return 0
  } else if (n == 1) {
    one++
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}
let n = 10 // 이 값을 바꾸어 가면서 확인하기
console.log(n, fibonacci(n), zero, one)

let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

// 앞서 계산된 결과를 저장하기 위한 DP 테이블 초기화
d = new Array(100).fill(0)
d[0] = 0
d[1] = 1

// 피보나치 함수(Fibonacci Function) 반복문으로 구현(보텀업)
for (let i = 2; i <= 40; i++) {
  d[i] = d[i - 1] + d[i - 2]
}

let testCases = Number(input[0])
for (let t = 1; t <= testCases; t++) {
  // N번째 피보나치 수에 대하여
  let n = Number(input[t])
  // 0의 개수와 1의 개수 출력
  if (n == 0) console.log(1, 0)
  else console.log(d[n - 1], d[n])
}
