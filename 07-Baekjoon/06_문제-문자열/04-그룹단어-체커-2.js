/*** https://www.acmicpc.net/problem/1316
 * 각알파벳을 하나씩 확인할 수 있다.
 * a부터 z까지 총 26개의 알파벳이 있다.
 * 각 알파벳에 대하여 연속해서 등장한 횟수가 1번인지 체크한다.
 */
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let summary = 0;

for (let i = 1; i <= n; i++) {
  let data = input[i];
  if (check(data)) summary += 1;
}
console.log(summary);
