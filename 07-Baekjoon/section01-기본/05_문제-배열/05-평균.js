/*** https://www.acmicpc.net/problem/1546
 * 다음 과정을 통해 시간복잡도 𝑂(𝑁)으로 문제를 해결할 수 있다.
 * 1. 가장먼저, 최댓값을 계산한다.
 * 2. 이후에 각 값을 하나씩 확인하여 새로운값 𝑋 / 𝑀 × 100을 계산하여 평균을 구한다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let scores = input[1].split(' ').map(Number)

let maxValue = scores.reduce((a, b) => Math.max(a, b))
let updated = []
// 수정된 원소 하나씩 저장
for (let i = 0; i < n; i++) {
  updated.push((scores[i] / maxValue) * 100)
}

// 배열에 포함된 원소의 평균 출력
console.log(updated.reduce((a, b) => a + b) / n)
