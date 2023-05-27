/*** https://www.acmicpc.net/problem/10998
 * JavaScript를 이용해 정수를 처리해야 한다.
 * 이를 위해, 입력 받은 문자열 데이터를 정수로 변환해야 한다.
 * 이후에 곱셈을 수행한 결과를 출력한다.
 * fs모듈을 이용해 특정파일에서 문자열을 읽어올 수 있다.
 */
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// 첫째 줄의 데이터를 공백 기준으로 나누기
data = input[0].split(' ')
// data = ['1', '2']

a = Number(data[0])
b = Number(data[1])

console.log(a * b)
