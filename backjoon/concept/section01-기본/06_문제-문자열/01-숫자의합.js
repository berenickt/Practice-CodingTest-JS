/*** https://www.acmicpc.net/problem/11720
 * N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램
 *
 * [cf.]
 * 첫째 줄에 숫자의 개수 N
 * 둘째 줄에 숫자 N개가 공백없이 주어짐
 *
 * [풀이]
 * 문자열에서 각 문자(원소)를 하나씩 확인하여 정수로 변환한다.
 * 정수로 변환된 각 값을 모두 더하여 정답을 계산할 수 있다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let string = input[1]

let answer = 0

// 문자열에 포함된 문자를 하나씩 확인하며, 모든 숫자를 더하기
for (let x of string) answer += Number(x)

console.log(answer)
