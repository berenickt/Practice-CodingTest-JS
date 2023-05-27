/*** https://www.acmicpc.net/problem/10869
 * JavaScript를 이용해 기본적인 사칙연산을 수행할 수 있다.
 * JavaScript에서 나누기 연산(/)을 수행하면 실수 데이터가 반환될 수 있다.
 * 따라서 몫을 구하기 위해서는 parseInt() 함수를 사용한다.
 */
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(parseInt(a / b))
console.log(a % b)
