/*** https://www.acmicpc.net/problem/3052
 * 각 원소를 하나씩 확인하며, 42로 나눈 나머지를 차례대로 출력한다.
 * 원소를 하나씩 확인한다는 점에서 시간복잡도는 𝑂(𝑁)이다.
 */
// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let data = input.map(Number)
let mySet = new Set() // 집합 객체 생성

// 원소를 하나씩 확인하며
for (let i = 0; i < 10; i++) {
  mySet.add(data[i] % 42) // 42로 나눈 나머지를 집합의 원소로 삽입
}

// 집합에 포함된 원소의 개수 출력
console.log(mySet.size)
