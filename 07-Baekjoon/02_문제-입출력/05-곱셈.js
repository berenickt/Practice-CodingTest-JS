/*** https://www.acmicpc.net/problem/2588
 * 세자리 수 두개가 주어진다.
 * 문자열로 처리하면, 각 자릿수를 손쉽게 얻어 처리할 수 있다.
 * 1. 입력데이터:“872”
 * 2. 일의자리문자:“2”,십의자리문자:“7”,백의자리문자:“8”
 * 3. 이후에 Number()함수를 이용해 각 문자를 정수 데이터로 변환한다.
 */
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input[0];
let b = input[1];

x_1 = b[2]; // 일의 자리
x_2 = b[1]; // 십의 자리
x_3 = b[0]; // 백의 자리

console.log(Number(a) * Number(x_1));
console.log(Number(a) * Number(x_2));
console.log(Number(a) * Number(x_3));
console.log(Number(a) * Number(b));
