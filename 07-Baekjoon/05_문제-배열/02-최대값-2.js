/*** https://www.acmicpc.net/problem/2562
 * 배열의 원소를 하나씩 확인하여, 최댓값과 그 인덱스를 찾는 문제다.
 * 계속해서 가장 큰 값을 가지는 원소의 인덱스(index)를 업데이트한다.
 * 원소를 차례대로 하나씩 확인한다는 점에서 시간복잡도𝑂(𝑁)로 해결할 수 있다.
 */
// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(x => Number(x));
let max = Math.max(...data);

console.log(max);
console.log(input.indexOf(max) + 1);
