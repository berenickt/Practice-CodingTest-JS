/*** https://www.acmicpc.net/problem/16953
 * 정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.
 * - 2를 곱한다.
 * - 1을 수의 가장 오른쪽에 추가한다
 *
 * @returns A를 B로 바꾸는데 필요한 연산의 최솟값
 *
 * [e.g.]
 * A = 2, B = 162
 * 2 → 4 → 8 → 81 → 162
 *
 * [문제 해결 아이디어] 반대로 구현하는 것을 상상해봅시다.
 * B에서 A로 이동한다고 생각해 보자.
 * 현재의 B값이 정해져 있을때, 취할수 있는 행동은 항상 정해져있다.
 * 1) 값이 2로 나누어 떨어지는경우        -> 2로 나누는 연산만 사용가능하다.
 * 2) 그렇지 않고, 일의 자릿수가 1인경우  -> 10으로 나누는 연산만 사용가능하다.
 * 3) 위 경우가 모두 해당되지 않는경우    -> 더 이상 이동이 불가능하므로, 종료한다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [a, b] = input[0].split(' ').map(Number) // A와 B 입력
let flag = false // A에서 B로 이동가능 여부
let result = 1

while (a <= b) {
  if (a == b) {
    flag = true
    break
  }
  if (b % 2 == 0) b = parseInt(b / 2) // 2로 나누어 떨어지는 경우
  else if (b % 10 == 1) b = parseInt(b / 10) // 그렇지 않고, 일의 자릿수가 1인 경우
  else break // 위 경우가 모두 해당되지 않는 경우
  result++
}

if (flag) console.log(result)
else console.log(-1)
