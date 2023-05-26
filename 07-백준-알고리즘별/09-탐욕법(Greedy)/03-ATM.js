/*** https://www.acmicpc.net/problem/11399
 * 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 계산한다.
 * [문제 해결 아이디어] 시간이 적게 소요되는 사람부터 처리할 때, 필요한 시간의 합이 최소가 된다.
 * 따라서 오름차순 정렬 이후에 누적 합을 계산하여 해결할 수 있다.
 */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 사람의 수
let arr = input[1].split(' ').map(Number); // 모든 처리 시간 입력받기

// 오름차순 정렬
arr.sort((a, b) => a - b);
let answer = 0;
let summary = 0;
for (let i = 0; i < n; i++) {
  summary += arr[i]; // i번째 사람이 기다린 총 시간
  answer += summary; // 지금까지 소요된 총 시간
}

console.log(answer);
