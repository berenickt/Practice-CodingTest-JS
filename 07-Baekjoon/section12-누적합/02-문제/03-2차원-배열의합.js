/*** https://www.acmicpc.net/problem/2167
 * 본 문제의 요구 사항은 다음과 같다.
 * -> 2차원 배열에서 (𝑖, 𝑗)부터 (𝑥, 𝑦) 위치까지의 직사각형에 저장된 수들의 합을 계산한다.
 * 예를 들어 (2, 2)부터 (3, 3)까지의 합은 11이다.
 *
 * [Step 1] 기본 누적 합 계산하기
 * (1, 1)부터 (𝑥, 𝑦) 위치까지의 직사각형에 저장된 수들의 누적 합을 계산한다.
 * 𝑠𝑢𝑚[𝑥][𝑦] = 𝑎𝑟𝑟[𝑥][𝑦] + 𝑠𝑢𝑚[𝑥−1][𝑦] + 𝑠𝑢𝑚[𝑥][𝑦−1] − 𝑠𝑢𝑚[𝑥−1][𝑦−1]
 *
 * [Step 2] 쿼리 처리하기
 * (𝑖, 𝑗)부터 (𝑥, 𝑦) 위치까지의 직사각형에 저장된 수들의 합을 계산할 수 있다.
 * 구간 합: 𝑠𝑢𝑚[𝑥][𝑦] − 𝑠𝑢𝑚[𝑖 − 1][𝑦] − 𝑠𝑢𝑚[𝑥][𝑗 − 1] + 𝑠𝑢𝑚[𝑖 − 1][𝑗 − 1]
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let [n, m] = input[0].split(' ').map(Number) // 배열 크기(N X M)
let arr = [new Array(m + 1).fill(0)] // 초기 배열
for (let i = 1; i <= n; i++) {
  arr.push([0, ...input[i].split(' ').map(Number)])
}
let k = Number(input[n + 1]) // 쿼리의 수(K)
let queries = [] // 각 쿼리 정보 배열
for (let line = n + 2; line <= n + 1 + k; line++) {
  let [i, j, x, y] = input[line].split(' ').map(Number)
  queries.push([i, j, x, y])
}

// (1, 1)부터의 누적 합(sum) 계산
let sum = []
for (let i = 0; i <= n; i++) sum.push(new Array(m + 1).fill(0))
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    sum[i][j] = arr[i][j] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1]
  }
}

// (i, j)부터 (n, m)까지의 구간 합 계산
for (let index = 0; index < k; index++) {
  let [i, j, x, y] = queries[index]
  let current = sum[x][y] - sum[i - 1][y] - sum[x][j - 1] + sum[i - 1][j - 1]
  console.log(current)
}
