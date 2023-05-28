/*** https://www.acmicpc.net/problem/11728
 * 정렬되어 있는 배열 𝐴와 𝐵가 주어진다.
 * 두 배열을 이어 붙인 뒤에 정렬한 결과를 출력한다.
 *
 * [해결 방법] 두 배열 𝐴와 𝐵가 이미 정렬되어 있다.
 * 따라서, 두 배열에서의 각각 원소 위치를 가리키는 포인터 𝑖와 𝑗를 사용한다.
 * 병합 정렬 알고리즘에서 두 개의 배열을 병합할 때 사용하는 알고리즘과 동일
 *
 * 각 부분 배열은 이미 정렬된 상태로 본다.
 * 각 부분 배열에 대하여 첫째 원소부터 시작하여 하나씩 확인한다.
 * 총 원소의 개수가 𝑁개일 때, 𝑂 𝑁 의 시간 복잡도가 요구된다
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let [n, m] = input[0].split(' ').map(Number)
let a = input[1].split(' ').map(Number)
let b = input[2].split(' ').map(Number)

let result = []
let i = 0
let j = 0

while (i < n && j < m) {
  // 배열 A와 배열 B에서 차례대로 더 작은 원소 넣기
  if (a[i] < b[j]) {
    // 배열 A의 원소가 더 작다면
    result.push(a[i])
    i += 1
  } else {
    // 배열 B의 원소가 더 작다면
    result.push(b[j])
    j += 1
  }
}

// 각 배열에 남아있는 원소들을 순차적으로 삽입
while (i < n) {
  result.push(a[i])
  i += 1
}
while (j < m) {
  result.push(b[j])
  j += 1
}

// 결과 배열의 각 원소를 공백 기준으로 출력
console.log(result.join(' '))
