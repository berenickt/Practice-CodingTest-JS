/*** https://www.acmicpc.net/problem/1149
 * [문제 조건] 인접한 집과 색상이 달라야 한다.
 * 점화식을 도출하기 위해 몇 가지 예시를 고려해 볼 수 있다.
 *
 * 앞에서부터 차례대로 집을 확인한다.
 * 현재 집 𝑎𝑛에서 𝑗라는 색을 사용한다면?
 * 앞집 𝑎𝑛−1에서는 𝑗라는 색을 사용하지 않는 조건에 한하여 최적의 해(최솟값)을 고려한다
 */
// 요구사항: 인접한 집이 동일한 색을 안 쓸 때, 색칠하는 모든 경우의 수 계산
for (let i = 1; i < n; i++) {
  // 집을 하나씩 확인하며
  for (let j = 0; j < 3; j++) {
    // j번째 색을 사용할 때의 최솟값은?
    for (let k = 0; k < 3; k++) {
      // 앞집에서 k번째 색을 쓴다면
      if (j != k) d[i][j] = Math.min(d[i][j], arr[i][j] + d[i - 1][k])
    }
  }
}

// readline 모듈보다는 fs를 이용해 파일 전체를 읽기
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let n = Number(input[0]) // 집의 개수

arr = []
d = []
for (let i = 0; i < n; i++) {
  let [r, g, b] = input[i + 1].split(' ').map(Number)
  // 가능한 최댓값으로 초기화
  d.push(new Array(3).fill(1000000))
  arr.push([r, g, b])
}

// 첫 번째 집은 그대로 최솟값으로 기록
d[0][0] = arr[0][0]
d[0][1] = arr[0][1]
d[0][2] = arr[0][2]

// 요구사항: 인접한 집이 동일한 색을 안 쓸 때, 색칠하는 모든 경우의 수 계산
for (let i = 1; i < n; i++) {
  // 집을 하나씩 확인하며
  for (let j = 0; j < 3; j++) {
    // j번째 색을 사용할 때의 최솟값은?
    for (let k = 0; k < 3; k++) {
      // 앞집에서 k번째 색을 쓴다면
      if (j != k) d[i][j] = Math.min(d[i][j], arr[i][j] + d[i - 1][k])
    }
  }
}

console.log(Math.min(d[n - 1][0], d[n - 1][1], d[n - 1][2]))
