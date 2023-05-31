/*** https://www.acmicpc.net/problem/2839
 * 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다.
 * 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다.
 * 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
 * 상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다.
 *
 * [e.g.]
 * 18킬로그램 설탕을 배달해야 할 때,
 * 3킬로그램 봉지 6개를 가져가도 되지만,
 * 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.
 *
 * 상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때,
 * 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램
 *
 * @returns 상근이가 배달하는 봉지의 최소 개수
 *
 * [풀이]
 * 현실에서 적용할 수 있는 가장 단순한 공식을 생각해보자.
 * 어떤 수를 0으로 만들어야 하는 상황에서 2가지 연산을 사용할수있다.
 * 1. 값에서 5를빼기
 * 2. 값에서 3을빼기
 *
 * [문제 해결 아이디어]
 * 3A + 5B = N
 * 1) 현재 값이 5로 나누어 떨어지는 경우, 5로 나누면 될 것이다.
 * 2) 그렇지 않다면, 기존의 값이 5로 나누어 떨어지는 값이 될 때까지 3을 빼준 뒤에 1)을 수행한다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let cnt = 0
let flag = false

// 더 이상 반복할 수 없을 때까지 반복
while (n >= 0) {
  // n이 0이 되었거나, 5로 나누어 떨어지는 값인 경우
  if (n == 0 || n % 5 == 0) {
    cnt += parseInt(n / 5) // 5로 나눈 몫을 더하기
    console.log(cnt)
    flag = true
    break
  }
  n -= 3
  cnt += 1
}

if (!flag) console.log(-1)
