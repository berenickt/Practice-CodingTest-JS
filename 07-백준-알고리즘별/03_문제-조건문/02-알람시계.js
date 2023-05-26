/*** https://www.acmicpc.net/problem/2884
 * 1. 현재시각이 주어졌을 때, 45분을 감소시킨다.
 * 2. 0분보다 작아지면, 시(hour)가 1시간 감소한다.
 * 3. 0시보다 작아지면, 시(hour)가 23시로 초기화된다.
 */
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let hour = Number(input[0].split(' ')[0]);
let minute = Number(input[0].split(' ')[1]);

// 분이 45분 미만이라면 hour -= 1;
if (minute < 45) {
  minute += 15;
  if (hour < 0) hour = 23;
} else minute -= 45;
console.log(hour + ' ' + minute);
