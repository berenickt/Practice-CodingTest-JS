/*** https://www.acmicpc.net/problem/2739
 * 단순히 1단부터 𝑁단까지 반복 문법을 이용하면 된다.
 * 2중 반복 문법을 사용하여 문제를 해결할 수 있다.
 */
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0])

for (let i = 1; i <= 9; i++) {
  // 템플릿 리터럴을 사용해 문자열 내부에 변수를 포함합니다. (백틱 문자 사용)
  console.log(`${n} * ${i} = ${n * i}`)
}
