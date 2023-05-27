/*** https://www.acmicpc.net/problem/1000
 * JavaScript를 이용해 정수를 처리해야 한다.
 * 이를 위해, 입력받은 문자열 데이터를 정수로 변환해야 한다.
 * 이후에 덧셈을 수행한 결과를 출력한다.
 * fs모듈을 이용해 특정파일에서 문자열을 읽어올수있다.
 */
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// ["1", "2"]
let line = input[0].split(' ')

let a = parseInt(line[0]) // 1
let b = parseInt(line[1]) // 2

console.log(a + b)
