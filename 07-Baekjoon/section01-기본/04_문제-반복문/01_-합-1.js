/*** https://www.acmicpc.net/problem/8393
 * n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램
 *
 * 이 경우 시간복잡도 𝑂(𝑁)
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0])
let summary = 0

for (let i = 1; i <= n; i++) {
  summary += i
}

console.log(summary)
