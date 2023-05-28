/*** https://www.acmicpc.net/problem/14395
 * BFS 문제는 최단 거리를 찾거나 최소 횟수를 찾는 문제에서 많이 사용된다.
 * 만약에 그래프 형태로 문제가 표현된다면 BFS를 이용해 볼 수 있다.
 *
 * 이 문제에서는 주어진 연산이 +, −, ∗, /이다.
 * 특정한 정수 s에서 시작해서 "탐색"을 하는 형태로 간주할 수 있다.
 * • 따라서 값이 𝑡인 노드를 만날 때까지 BFS를 수행한다.
 *
 * [문제 해결 아이디어]
 * 최소 연산 횟수를 구하는 문제이므로, 너비 우선 탐색(BFS)을 사용한다.
 * 예를 들어 𝑠 = 7일 때, 연산 횟수(간선 개수)를 2까지 고려할 때 다음과 같은 형태로 각 노드를 방문한다
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

// 시작(s)과 목표(t)를 입력받기
let [s, t] = input[0].split(' ').map(Number)

// 너비 우선 탐색(BFS) 수행
let queue = new Queue()
// (값, 해당 값을 만들기 위한 연산자) 삽입
queue.enqueue([s, ''])
let visited = new Set([s])
let found = false

if (s == t) {
  // 시작 값과 목표 값이 같은 경우
  console.log(0)
  process.exit()
}

// 큐가 빌 때까지 반복하기
while (queue.getLength() != 0) {
  let [value, opers] = queue.dequeue()
  if (value > 1e9) continue // 값의 범위를 벗어나는 경우
  if (value == t) {
    // 목표 값에 도달한 경우
    console.log(opers) // 전체 연산자들을 출력
    found = true
    break
  }
  for (let oper of ['*', '+', '-', '/']) {
    // 각 연산자로 BFS 수행
    let nextValue = value
    if (oper == '*') nextValue *= value
    if (oper == '+') nextValue += value
    if (oper == '-') nextValue -= value
    if (oper == '/' && value != 0) nextValue = 1
    if (!visited.has(nextValue)) {
      queue.enqueue([nextValue, opers + oper])
      visited.add(nextValue)
    }
  }
}

// 바꿀 수 없는 경우
if (!found) console.log(-1)
