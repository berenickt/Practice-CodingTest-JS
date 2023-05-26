/*** https://www.acmicpc.net/problem/4344
 * 1. 먼저 𝑁개의 원소에 대한 평균값을 계산한다. 𝑂(𝑁)
 * 2. 다시 𝑁개의 원소를 하나씩 확인하여 평균 이상인지 확인한다. 𝑂(𝑁)
 * 3. 전체 시간복잡도는 𝑂(𝑁)이다.
 */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCases = Number(input[0]);

// 각각의 테스트 케이스를 확인
for (let t = 1; t <= testCases; t++) {
  let data = input[t].split(' ').map(Number);
  let n = data[0]; // 첫 번째 수는 데이터의 개수
  let summary = 0; // n개의 점수에 대하여 평균 계산
  for (let i = 1; i <= n; i++) {
    summary += data[i];
  }

  let average = summary / n;
  let cnt = 0; // 점수가 평균을 넘는 학생 수 계산
  for (let i = 1; i <= n; i++) if (data[i] > average) cnt += 1;

  // 점수가 평균을 넘는 학생의 비율을 소수점 아래 셋째 자리까지 출력
  console.log(`${((cnt / n) * 100).toFixed(3)}%`);
}
