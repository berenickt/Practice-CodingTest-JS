/*** https://www.acmicpc.net/problem/1546
 * 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다.
 * 그리고 나서 모든 점수를 (점수 / M * 100) 으로 고쳤다.
 *
 * [e.g.]
 * 세준이의 최고점이 70이고, 수학점수가 50이었으면,
 * 수학점수는 (50 / 70 * 100) 이 되어 (71.43 점)이 된다.
 *
 * 세준이의 성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램
 *
 * [cf.]
 * 첫째 줄에 시험 본 과목의 개수 N
 * 둘째 줄에 세준이의 현재 성적
 *
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
