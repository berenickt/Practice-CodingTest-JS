/*** https://www.acmicpc.net/problem/10814
 *
 */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  // 각 사람의 (나이, 이름) 정보를 입력받기
  let age = Number(input[i].split(' ')[0]);
  let name = input[i].split(' ')[1];
  arr.push([age, name]);
}
arr.sort((a, b) => a[0] - b[0]); // Node.js의 정렬은 기본적으로 stable

let answer = '';
for (let x of arr) answer += x[0] + ' ' + x[1] + '\n';
console.log(answer);
