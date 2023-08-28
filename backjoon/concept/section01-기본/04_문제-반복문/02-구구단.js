/*** https://www.acmicpc.net/problem/2739
 * N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램
 *
 * 단순히 1단부터 𝑁단까지 반복 문법을 이용하면 된다.
 * 2중 반복 문법을 사용하여 문제를 해결할 수 있다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0])

for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`)
}
