/*** https://www.acmicpc.net/problem/9461
 * 점화식을 도출하기 위해 몇 가지 예시를 고려해 볼 수 있다.
 */
// readline 모듈보다는 fs를 이용해 파일 전체를 읽기
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

// 앞서 계산된 결과를 저장하기 위한 DP 테이블 초기화
d = new Array(101).fill(0)
d[1] = 1
d[2] = 1
d[3] = 1

// 다이나믹 프로그래밍(Dynamic Programming) 진행 (보텀업)
for (let i = 4; i <= 100; i++) {
  d[i] = d[i - 2] + d[i - 3]
}

let testCases = Number(input[0]) // 테스트 케이스의 개수
for (let t = 1; t <= testCases; t++) {
  let n = Number(input[t]) // N 입력받기
  console.log(d[n])
}
