/*** https://www.acmicpc.net/problem/11441
 * 𝑁개의 수가 담긴 배열이 주어진다.
 * 𝑀개의 구간 (𝑖, 𝑗)가 주어졌을 때 𝑖번째 수부터 𝑗번째 수까지의 구간 합을 계산한다
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let n = Number(input[0])
let data = input[1].split(' ').map(Number)
let m = Number(input[2])

let prefixSum = [0] // 누적 합(prefix sum)
let summary = 0
for (let i of data) {
  summary += i
  prefixSum.push(summary)
}

let answer = ''
for (let query = 3; query <= m + 2; query++) {
  // 각 쿼리(query) 처리
  let [i, j] = input[query].split(' ').map(Number)
  answer += prefixSum[j] - prefixSum[i - 1] + '\n'
}
console.log(answer)
