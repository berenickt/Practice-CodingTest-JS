/*** https://www.acmicpc.net/problem/2156
 * 점화식을 도출하기 위해 몇 가지 예시를 고려해 볼 수 있다.
 * 01타일 문제와 유사한 아이디어로 점화식을 도출할 수 있다
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let n = Number(input[0]) // 포도주의 개수(N)
let arr = []
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}

let dp = new Array(n).fill(0)
dp[0] = arr[0]
dp[1] = arr[0] + arr[1]
dp[2] = Math.max(arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[2])

// 점화식에 따라서 DP 테이블 갱신
for (let i = 3; i < n; i++) {
  dp[i] = dp[i - 1]
  dp[i] = Math.max(dp[i], arr[i] + dp[i - 2])
  dp[i] = Math.max(dp[i], arr[i] + arr[i - 1] + dp[i - 3])
}
console.log(dp[n - 1])
