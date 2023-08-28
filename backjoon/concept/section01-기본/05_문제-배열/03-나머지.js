/*** https://www.acmicpc.net/problem/3052
 * 두 자연수 A와 B가 있을 때, A % B는 A를 B로 나눈 나머지
 * [e.g.] 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2
 *
 * 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다.
 * 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램
 *
 * 원소를 하나씩 확인한다는 점에서 시간복잡도는 𝑂(𝑁)
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let data = input.map(Number)
let mySet = new Set() // 집합 객체 생성

for (let i = 0; i < 10; i++) {
  mySet.add(data[i] % 42) // 42로 나눈 나머지를 집합의 원소로 삽입
}

// 집합에 포함된 원소의 개수 출력
console.log(mySet.size)
