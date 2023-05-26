/*** https://www.acmicpc.net/problem/8393
 * 자연수 𝑁의 최대 값은 10,000이다.
 * 따라서, 단순히 1부터 10,000까지의 값을 차례대로 더해도 괜찮다.
 * 이 경우 시간복잡도 𝑂(𝑁)이다.
 */
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);
let summary = 0;
for (let i = 1; i <= n; i++) {
  summary += i;
}
console.log(summary);
