/*** https://www.acmicpc.net/problem/2752
 * sort() 메서드를 이용해 해결할 수 있다.
 * JavaScript의 경우 원하는 기준에 따라서 객체에 대한 정렬을 수행하는 기능을 제공한다.
 * 단순히 세 개의 수가 주어지므로, 이를 배열에 담아 정렬(sorting)을 수행한다.
 */
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let arr = input[0].split(' ').map(Number); // 오름차순 정렬 수행

arr.sort(function (a, b) {
  return a - b;
});
let answer = '';
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + ' ';
}
console.log(answer);
