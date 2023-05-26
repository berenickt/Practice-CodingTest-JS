/*** https://www.acmicpc.net/problem/11650
 * sort() 메서드를 이용해 해결할 수 있다.
 * JavaScript의 경우 원하는 기준에 따라서 객체에 대한 정렬을 수행하는 기능을 제공한다.
 * 본 문제에서 정렬할 데이터는 한점 x, y으로 객체형태다.
 *
 * 이때, 다음의 기준에 따라서 정렬을 수행한다.
 * 1. 기본적으로 𝑥좌표가 증가하는 순으로 정렬한다.
 * 2. 만약에 x좌표가 같으면 y좌표가 증가하는 순으로 정렬한다.
 */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let data = [];

for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  data.push([x, y]);
}

function compare(a, b) {
  if (a[0] != b[0]) return a[0] - b[0]; // x 좌표 기준 오름차순
  else return a[1] - b[1]; // x가 같으면 y 좌표 기준 오름차순
}
data.sort(compare); // 정렬 수행

let answer = ''; // 정렬 결과 출력
for (let point of data) {
  answer += point[0] + ' ' + point[1] + '\n';
}
console.log(answer);
