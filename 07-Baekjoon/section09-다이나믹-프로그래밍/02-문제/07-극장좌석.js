/*** https://www.acmicpc.net/problem/2302
 * VIP 좌석으로 구분된 각 좌석 묶음마다 경우의 수를 계산할 수 있다
 */
// readline 모듈보다는 fs를 이용해 파일 전체를 읽기
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let n = Number(input[0])
let m = Number(input[1])

let d = new Array(50).fill(0)
d[0] = 1
d[1] = 1
d[2] = 2

// 다이나믹 프로그래밍 (피보나치 수열)
function dp(x) {
  if (d[x] != 0) return d[x]
  d[x] = dp(x - 1) + dp(x - 2)
  return d[x]
}

// VIP 좌석을 기준으로 몇 개씩 묶이는지 확인
let arr = []
let start = 0
for (let i = 2; i < m + 2; i++) {
  end = Number(input[i])
  arr.push(end - 1 - start)
  start = end
}
arr.push(n - start)

// 각 묶음의 개수에 대하여 DP 테이블의 값 가져오기
let res = 1
for (let x of arr) res *= dp(x)
console.log(res)
