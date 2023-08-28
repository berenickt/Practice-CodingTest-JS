/*** https://www.acmicpc.net/problem/1904
 * 점화식을 도출하기 위해 몇 가지 예시를 고려해 볼 수 있다
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let n = Number(input[0]) // N 입력받기

// 앞서 계산된 결과를 저장하기 위한 DP 테이블 초기화
d = new Array(1000001).fill(0)
d[1] = 1
d[2] = 2

// 다이나믹 프로그래밍(Dynamic Programming) 진행 (보텀업)
for (let i = 3; i <= n; i++) {
  // d[i] = (i) 1을 붙이는 경우 + (ii) 00을 붙이는 경우
  // 참고로 11을 붙이는 경우는 포함하지 않는데, (i)에 포함되기 때문이다.
  d[i] = (d[i - 1] + d[i - 2]) % 15746
  // 값이 매우 커질 수 있기 때문에 나머지를 구하는데, 더할 때마다 나머지만 저장하면 된다.
  // 예를 들어 (40 + 25 + 15) % 7 = ((40 % 7 + 25) % 7 + 15) % 7이다.
}

console.log(d[n])
