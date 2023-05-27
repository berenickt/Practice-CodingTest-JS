/*** https://www.acmicpc.net/problem/2908
 * 세 자리수를 문자열 형태로 처리하여, 뒤집을 수 있다.
 * e.g. "285"가 입력으로 들어오면, "582"로 변경한 뒤에 정수 데이터로 변경한다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let a = input[0].split(' ')[0]
let b = input[0].split(' ')[1]

let newA = a[2] + a[1] + a[0]
let newB = b[2] + b[1] + b[0]

console.log(Math.max(Number(newA), Number(newB)))
