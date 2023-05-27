/*** https://www.acmicpc.net/problem/7490
 * 1부터 𝑁까지의 수를 오름차순으로 쓴 수열 1, 2, 3, … 𝑁 이 있다고 해보자.
 * 이때 각 수 사이에 사용할 수 있는 연산으로는 다음의 세 가지 연산이 있다.
 * 1. 더하기(+)
 * 2. 빼기(-)
 * 3. 숫자 이어 붙이기(공백)
 *
 * 결과적으로 𝑁이 주어졌을 때, 수식의 결과가 0이 되는 모든 수식을 찾아야 한다.
 * 테스트 케이스 및 자연수 𝑁의 최댓값은 9이다.
 * 3개의 연산 중에서 연속적으로 𝑁번 선택하는 중복 순열 문제로 이해할 수 있다.
 * 따라서 가능한 전체 경우의 수는 3^8이다
 */
function dfs(result, depth) {
  // 현재 순열(permutation) 처리(중복 순열)
  if (depth == n - 1) {
    let str = '' // 현재 수식 문자열
    for (let i = 0; i < n - 1; i++) str += arr[i] + result[i]
    str += arr[n - 1] + ''
    current = eval(str.split(' ').join('')) // 공백을 제거한 뒤에 수식 계산
    if (current == 0) console.log(str) // 수식의 결과가 0이 되는 경우 출력
    return
  }

  // 더하기(+), 빼기(-), 혹은 이어 붙이기( )
  for (let x of [' ', '+', '-']) {
    result.push(x)
    dfs(result, depth + 1) // 재귀 함수 호출
    result.pop()
  }
}

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let testCase = Number(input[0])
let n = 0
let arr = []
// 각 테스트 케이스 처리
for (let tc = 1; tc <= testCase; tc++) {
  n = Number(input[tc]) // 자연수(N) 입력받기
  arr = []
  for (let i = 1; i <= n; i++) arr.push(i) // 1부터 N까지의 수 삽입
  dfs([], 0)
  console.log()
}
