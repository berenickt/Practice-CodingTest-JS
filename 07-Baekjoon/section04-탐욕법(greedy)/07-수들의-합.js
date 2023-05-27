/*** https://www.acmicpc.net/problem/1789
 * 문제 해결 아이디어: 가능한 작은 수부터 더하는 것이 좋다.
 * 예를 들어, 𝑆 = 200일 때, 1부터 시작하여 차례대로 더하면서, 합이 𝑆를 넘어가지 않도록 한다.
 *
 * 1. 1, 2, 3, … 순서대로 더해갈 때, S를 넘지 않도록 하되, 최대한 많이 더한다.
 * 2. 그때까지의 수의 개수가 정답이다.
 * 검증: 𝑆 = 200일 때, 1, 2, 3, 4, 5, 6, ..., 18, 19까지 더하면 190이다.
 * 이때 19 대신에 29로 바꾸어 주면 합이 200이다. → 따라서 정답은 19
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

s = Number(input[0])
let sum = 0
let current = 0

while (sum <= s) {
  current += 1
  sum += current
}

console.log(current - 1)
