/*** https://www.acmicpc.net/problem/2670
 * 𝑑𝑝 𝑖 를 𝑖를 마지막 인덱스로하는 연속곱의 최댓값으로 정의한다.
 * 각 원소의 위치에서 이전 원소와 곱셈을 수행할 지 결정할 수 있다.
 * 점화식: 𝑑𝑝[𝑖] = max(𝑑𝑝[𝑖], 𝑑𝑝[𝑖] ∗ 𝑑𝑝[𝑖 − 1])
 * 편의상 하나의 배열만 사용하여 DP 테이블에 초기 데이터를 담을 수 있다.
 * 이후에 해당 DP 테이블의 값을 점화식에 따라서 갱신할 수 있다
 */
// readline 모듈보다는 fs를 이용해 파일 전체를 읽기
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let n = Number(input[0])

dp = [] // 다이나믹 프로그래밍을 위한 DP 테이블 초기화
for (let i = 1; i <= n; i++) {
  dp.push(Number(input[i]))
}

// 다이나믹 프로그래밍 수행
for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i], dp[i] * dp[i - 1])
}

console.log(Math.max(...dp).toFixed(3))
