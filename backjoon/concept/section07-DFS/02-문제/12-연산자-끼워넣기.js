/*** https://www.acmicpc.net/problem/14888
 * 𝑁개의 수로 이루어진 수열이 있다.
 * 또한, 수 사이에 삽입할 수 있는 𝑁 − 1개의 연산자가 주어진다.
 *
 * 𝑁개의 수가 주어졌을 때(𝑁은 최대 11), 각 수 사이에 사칙연산 중 하나를 삽입한다.
 * 사용 가능한 총 연산자의 수는 𝑁 − 1개이다.
 * 따라서 단순히 모든 경우를 고려해도 시간 초과를 받지 않는다.
 * 따라서 연산자를 끼워 넣는 모든 경우의 수를 고려하여 값을 계산한다.
 * 완전 탐색을 위해 DFS를 사용할 수 있다
 */
function dfs(index, value) {
  if (index == n) {
    minValue = Math.min(minValue, value)
    maxValue = Math.max(maxValue, value)
    return
  }
  if (add > 0) {
    add--
    dfs(index + 1, value + arr[index])
    add++
  }
  if (sub > 0) {
    sub--
    dfs(index + 1, value - arr[index])
    sub++
  }
  if (mul > 0) {
    mul--
    dfs(index + 1, value * arr[index])
    mul++
  }
  if (div > 0) {
    div--
    dfs(index + 1, ~~(value / arr[index])) // 나눌 때는 나머지를 제거 (C++14과 동일)
    div++
  }
}

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0]) // 수의 개수
let arr = input[1].split(' ').map(Number) // 연산을 수행하고자 하는 수 리스트
// 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/)의 연산자 개수
let [add, sub, mul, div] = input[2].split(' ').map(Number)

// 최솟값과 최댓값 초기화
let minValue = 1e9
let maxValue = -1e9

// DFS 메서드 호출
dfs(1, arr[0])

// 최댓값과 최솟값을 차례대로 출력
console.log(maxValue)
console.log(minValue)
