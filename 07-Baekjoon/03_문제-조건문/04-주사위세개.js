/*** https://www.acmicpc.net/problem/2480
 * 주사위를 3개 던진다.
 * 1. 눈금 세개가 모두 같으면 -> 10,000 + (같은눈금) X 1,000원
 * 2. 눈금 두개가 같으면 -> 1,000 + (같은눈금) X 100원
 * 3. 눈금이 모두다르면 -> (가장 큰 눈금) X 100원
 */
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);
let c = Number(input[0].split(' ')[2]);

// 세 개의 수가 모두 같은 경우
if (a == b && b == c) console.log(10000 + a * 1000);
// 세 개의 수가 전부 같지는 않지만, 두 개의 수가 같은 경우 else if (a == b) console.log(1000 + a * 100);
else if (a == c) console.log(1000 + a * 100);
else if (b == c) console.log(1000 + b * 100);
// 세 개의 수가 전부 다른 경우
else console.log(Math.max(a, b, c) * 100);
