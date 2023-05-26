/*** https://www.acmicpc.net/problem/2750
 * sort() 메서드를 이용해 해결할 수 있다.
 * 단순히 𝑁개의 수를 입력받아, 이를 오름차순 정렬한 결과를 반환할 수 있다.
 * 𝑁의값이 최대 1,000이므로, 시간복잡도 𝑂(𝑁^2)의 알고리즘을 사용할 수도 있다.
 */
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  // 한 줄씩 입력받아 배열에 넣기
  arr.push(Number(input[i]));
}
arr.sort(function (a, b) {
  // 오름차순 정렬 수행
  return a - b;
});

let answer = '';
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + '\n';
}
console.log(answer);
