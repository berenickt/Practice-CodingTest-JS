/*** https://www.acmicpc.net/problem/2908
 * 상근이는 세 자리 수 2개를 칠판에 써주었다.
 * 그 다음에 크기가 큰 수를 말해보라고 했다.
 * 동새인 상수는 수를 다른 사람과 다르게 거꾸로 읽는다.
 *
 * [e.g.]
 * 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다.
 * 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.
 * 두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램
 *
 * [풀이]
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
