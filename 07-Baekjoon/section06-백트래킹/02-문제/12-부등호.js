/*** https://www.acmicpc.net/problem/2529
 * 총 10개의 숫자 {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}중에서 중복 없이 모든 순열을 선택한다.
 * 선택한 뒤에 𝐾개의 부등호에 대한 순서를 만족하는지 확인한다.
 * 𝐾는 최대 9까지 입력될 수 있다.
 *
 * 0부터 9까지의 모든 숫자(digit) 중에 4개를 고르는 모든 순열을 고르면 다음과 같다.
 * [0, 1, 2, 3], [0, 1, 2, 4], …, [9, 8, 7, 6]
 */
function dfs(depth) {
  if (depth == k + 1) {
    // 각 순열(permutation)에 대한 처리
    let check = true // 부등식을 만족하는지 확인
    for (let i = 0; i < k; i++) {
      if (arr[i] == '<') {
        if (result[i] > result[i + 1]) check = false
      } else if (arr[i] == '>') {
        if (result[i] < result[i + 1]) check = false
      }
    }
    if (check) {
      // 부등식을 만족하는 경우에
      current = ''
      for (let x of result) current += x + ''
      if (first == '') first = current // 첫째 문자열은 [가장 작은 수]
    }
    return
  }
  for (let i = 0; i < 10; i++) {
    // 0부터 9까지의 숫자를 하나씩 고르는 순열(백트래킹)
    if (visited[i]) continue // 이미 고른 숫자라면 무시하도록
    visited[i] = true // 현재 선택한 숫자 방문 처리
    result.push(i)
    dfs(depth + 1) // 재귀 함수 호출
    visited[i] = false // 현재 선택한 숫자 방문 처리 취소
    result.pop()
  }
}

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let k = Number(input[0])
let arr = input[1].split(' ')
let visited = new Array(10).fill(false)
let result = []
let current = ''
let first = ''

dfs(0)
console.log(current + '\n' + first) // 마지막에 남은 current 값은 [가장 큰 문자열]
