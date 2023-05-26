/*** https://www.acmicpc.net/problem/1152
 * 단순히 전체 문자열에 포함된 단어의 개수를 계산한다.
 * 결과적으로 공백(" ")으로 구분된 단어의 개수를 세면 된다.
 */
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// trim() 메서드는 문자열 양 끝의 공백을 제거한다.
// 공백으로 구분된 단어의 개수 출력한다.
let data = input[0].trim().split(' ');

if (data == '') console.log(0);
else console.log(data.length);
