/*** https://www.acmicpc.net/problem/9009
 * 피보나치 수 ƒ_K는 ƒ_K =  ƒ_K-1 + ƒ_K-2로 정의되며,
 * 초기값은 ƒ_0 = 0과 ƒ_1 = 1 이다.
 * 양의 정수는 하나 혹은 그 이상의 서로 다른 피보나치 수들의 합으로 나타낼 수 있다는 사실은 잘 알려져 있다.
 *
 * 하나의 양의 정수에 대한 피보나치 수들의 합은 여러 가지 형태가 있다.
 * [e.g.]
 * 정수 100은 ƒ4 + ƒ6 + ƒ11 = 3 + 8 + 89
 * 또는 ƒ1 + ƒ3 + ƒ6 + ƒ11 = 1 + 2 + 8 + 89,
 * 또는 ƒ4 + ƒ6 + ƒ9 + ƒ10 = 3 + 8 + 34 + 55 등으로 나타낼 수 있다.
 *
 * 이 문제는 하나의 양의 정수를 최소 개수의 서로 다른 피보나치 수들의 합으로 나타내는 것이다.
 * @returns 하나의 양의 정수가 주어질 때, 피보나치 수들의 합이 주어진 정수와 같게 되는 최소 개수의 서로 다른 피보나치 수들
 *
 * [풀이]
 * 피보나치 수, 앞의 2개의 수를 더해 다음 수를 만드는 수열
 * 정수 100은 다음과 같은 조합으로 표현가능하다.
 * 1) 100 = 3 + 8 + 89
 * 2) 100 = 1 + 2+ 8 + 89
 * 3) 100 = 3 + 8+ 34 + 55
 *
 * `가장 큰 피보나치 수부터 뺄 떄`, 최소 개수를 만족할 수 있다.
 * 이유: X - A는 A보다 작은 서로 다른 피보나치 수들의 합으로 표현 가능하다.
 * 이떄 A는 가능한 가장 큰 피보나치 수를 의미한다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// 피보나치 수들 계산
pibo = []
pibo.push(0)
pibo.push(1)

while (pibo[pibo.length - 1] < 1e9) {
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1])
}

let testCases = Number(input[0])

for (let tc = 1; tc <= testCases; tc++) {
  let n = Number(input[tc])
  let result = []
  let i = pibo.length - 1 // 가장 큰 피보나치 수의 인덱스

  // n이 0이 될 때까지
  while (n > 0) {
    // 가능한 큰 피보나치 수부터 빼기
    if (n >= pibo[i]) {
      n -= pibo[i]
      result.push(pibo[i])
    }
    i--
  }
  let answer = ''
  for (let i = result.length - 1; i >= 0; i--) {
    answer += result[i] + ' ' // 오름차순 출력
  }
  console.log(answer)
}
