/*** https://www.acmicpc.net/problem/16953
 * 정수 𝐴를 𝐵로 바꾸려고 한다.
 * 사용할 수 있는 연산은 두 가지 종류가 있으며, "최소 연산 횟수"를 구해야 한다.
 * 1. 2를 곱하기
 * 2. 1을 오른쪽에 추가
 *
 * 본 문제에서는 "필요한 연산의 최솟값"을 구해야 한다.
 * 이는 다시 말하면, "최소 거리"를 구하는 문제와 동일하다.
 * 𝐴 = 2, 𝐵 = 41일 때, 최소 거리는 2이다
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// 시작(s)과 목표(t)를 입력받기
let [s, t] = input[0].split(' ').map(Number)
let queue = new Queue() // 너비 우선 탐색(BFS) 수행
queue.enqueue([s, 0]) // (값, 최소 연산 횟수) 삽입
let visited = new Set()
let found = false

// 큐가 빌 때까지 반복하기
while (queue.getLength() != 0) {
  let [value, dist] = queue.dequeue()
  if (value > 1e9) continue // 범위를 벗어나는 경우
  if (value == t) {
    // 목표 값에 도달한 경우
    console.log(dist + 1) // 최소 연산 횟수 + 1 출력
    found = true
    break
  }
  for (let oper of ['*', '+']) {
    let nextValue = value
    if (oper == '*') nextValue *= 2 // 2를 곱하기
    if (oper == '+') {
      // 1을 오른쪽에 추가
      nextValue *= 10
      nextValue += 1
    }
    if (!visited.has(nextValue)) {
      queue.enqueue([nextValue, dist + 1])
      visited.add(nextValue)
    }
  }
}
if (!found) console.log(-1) // 바꿀 수 없는 경우
