/*** https://www.acmicpc.net/problem/1181
 * sort() 메서드를 이용해 해결할 수 있다.
 * 본 문제에서는 문자열의 중복을 허용하지 않으므로, 집합(set) 자료형을 사용할 수 있다.
 * 데이터의 개수(𝑁)가 최대 20,000이므로, 시간 복잡도 𝑂 𝑁𝑙𝑜𝑔𝑁 의 정렬 알고리즘을 사용한다.
 *
 * 정렬 기준 함수(compare function)을 작성하여 다음의 조건에 따라 정렬을 수행한다.
 * 1. 길이가짧은것부터
 * 2. 길이가같으면사전순으로
 */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]); // 단어의 개수(N)와 전체 문자열 입력
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}
// 중복된 원소를 제거하기 위해 집합(set)으로 변환한 뒤에 배열로 되돌리기
arr = [...new Set(arr)];
arr.sort((a, b) => {
  // 길이가 다르면 길이가 짧은 것이 우선
  if (a.length != b.length) return a.length - b.length;
  else {
    // 길이가 같으면 사전 순으로 정렬
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
});
for (let x of arr) {
  // 정렬된 결과를 한 줄에 하나씩 출력
  console.log(x);
}
