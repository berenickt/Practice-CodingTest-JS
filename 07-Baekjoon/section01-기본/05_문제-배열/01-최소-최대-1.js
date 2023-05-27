/*** https://www.acmicpc.net/problem/10818
 * 배열의 원소를 하나씩 확인하여, 최댓값과 최솟값을 찾는 문제다.
 * 최댓값(max value)과 최솟값(min value) 정보를 업데이트한다.
 * 원소를 차례대로 하나씩 확인한다는 점에서 시간복잡도𝑂(𝑁)로 해결할 수 있다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)

// 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.
let minValue = 1000001 // 일단 큰 수로 초기화
let maxValue = -1000001 // 일단 작은 수로 초기화

for (let i = 0; i < n; i++) {
  if (minValue > arr[i]) minValue = arr[i]
  if (maxValue < arr[i]) maxValue = arr[i]
}
console.log(minValue, maxValue)
