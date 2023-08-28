/*** https://www.acmicpc.net/problem/10818
 * N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램
 *
 * [풀이]
 * 배열의 원소를 하나씩 확인하여, 최댓값과 최솟값을 찾는 문제
 * 최댓값(max value)과 최솟값(min value) 정보를 업데이트한다.
 * 원소를 차례대로 하나씩 확인한다는 점에서 시간복잡도는 𝑂(𝑁)
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)

// cf. 주어지는 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수
let minValue = 1000001 // 일단 가장 큰 수로 초기화
let maxValue = -1000001 // 일단 가장 작은 수로 초기화

for (let i = 0; i < n; i++) {
  if (minValue > arr[i]) minValue = arr[i]
  if (maxValue < arr[i]) maxValue = arr[i]
}

console.log(minValue, maxValue)
