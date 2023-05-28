/*** https://www.acmicpc.net/problem/2003
 * 𝑁개의 수로 된 수열 𝐴 1 , 𝐴[2], …, 𝐴[𝑁]이 있다.
 * 이 수열의 𝑖번째 수부터 𝑗번째 수까지의 합을 고려하자.
 * -> 𝐴 𝑖 + 𝐴 𝑖 + 1 + … + 𝐴 𝑗 − 1 + 𝐴 𝑗 가 𝑀이 되는 경우의 수를 계산해야 한다.
 *
 * 이때, 다음의 두 가지 특성이 존재한다.
 * 1. start가 증가하면 구간 합이 감소한다.
 * 2. end가 증가하면 구간 합이 증가한다.
 */
let input = require('fs').readFileSync('/dev/stdin')
input = input.toString().split('\n')

let [n, m] = input[0].split(' ').map(Number)
let data = input[1].split(' ').map(Number)

let cnt = 0
let intervalSum = 0
let end = 0

// start를 차례대로 증가시키며 반복
for (let start = 0; start < n; start++) {
  // end를 가능한 만큼 이동시키기
  while (intervalSum < m && end < n) {
    intervalSum += data[end]
    end += 1
  }
  // 부분합이 m일 때 카운트 증가
  if (intervalSum == m) cnt += 1
  intervalSum -= data[start]
}
console.log(cnt)
