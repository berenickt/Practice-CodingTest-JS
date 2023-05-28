/*** https://www.acmicpc.net/problem/1932
 * 아래 그림은 크기가 5인 정수 삼각형의 한 모습이다.
 * - 맨 위층부터 시작해서 아래에 있는 수 중 하나를 선택하여 아래층으로 내려올 때, 이제까지
 *   선택된 수의 합이 최대가 되는 경로를 구하는 프로그램을 작성해야 한다.
 *
 * - 아래층에 있는 수는 현재 층에서 선택된 수의 대각선 왼쪽 또는 대각선 오른쪽에 있는 것
 *   중에서만 선택할 수 있다.
 * - 삼각형의 크기는 1 이상 500 이하이다.
 * - 삼각형을 이루고 있는 각 수는 모두 정수이다.
 * - 각 정수의 값의 범위는 0 이상 9999 이하이다.
 *
 * 특정한 위치에 도달하기 위해서는 다음의 2가지 위치에서만 내려올 수 있다.
 * 1. 왼쪽 위 혹은 2. 바로 위
 *
 * 단, DP 테이블에 접근해야 할 때마다 리스트의 범위를 벗어나지 않는지 체크할 필요가 있다.
 * 편의상 하나의 배열만 사용해 DP 테이블에 초기 데이터를 담아서 점화식에 따라 갱신할 수 있다
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let n = Number(input[0])
let dp = [] // 다이나믹 프로그래밍을 위한 DP 테이블 초기화

for (let i = 1; i <= n; i++) {
  let data = input[i].split(' ').map(Number)
  dp.push(data)
}

// 다이나믹 프로그래밍으로 2번째 줄부터 내려가면서 확인
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    // 왼쪽 위에서 내려오는 경우
    let upLeft = 0
    if (j != 0) upLeft = dp[i - 1][j - 1]
    // 바로 위에서 내려오는 경우
    let up = 0
    if (j != i) up = dp[i - 1][j]
    // 최대 합을 저장
    dp[i][j] = dp[i][j] + Math.max(upLeft, up)
  }
}

console.log(Math.max(...dp[n - 1]))
