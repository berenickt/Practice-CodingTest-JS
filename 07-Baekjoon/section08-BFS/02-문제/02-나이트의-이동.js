/*** https://www.acmicpc.net/problem/7562
 * 가중치가 없는 그래프에서의 최단 경로를 구하는 문제이므로 BFS를 사용한다.
 * 나이트가 존재하는 위치에서 BFS를 수행하여 모든 칸까지의 최단 거리를 계산한다.
 * 각 위치에서 8가지 방향으로 이동할 수 있다는 차이점이 있다
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

dx = [-2, -2, -1, -1, 1, 1, 2, 2] // 이동할 여덟 가지 방향 정의
dy = [-1, 1, -2, 2, -2, 2, -1, 1]

let testCases = Number(input[0]) // 테스트 케이스의 수
let line = 1
while (testCases--) {
  let l = Number(input[line])
  let [x, y] = input[line + 1].split(' ').map(Number) // 현재 위치
  let [targetX, targetY] = input[line + 2].split(' ').map(Number) // 목표 위치
  let visited = [] // 방문 정보
  for (let i = 0; i < l; i++) visited.push(new Array(l).fill(0))
  queue = new Queue() // 너비 우선 탐색(BFS) 수행
  queue.enqueue([x, y])
  visited[x][y] = 1
  while (queue.getLength() != 0) {
    let cur = queue.dequeue()
    x = cur[0]
    y = cur[1]
    for (let i = 0; i < 8; i++) {
      // 현재 위치에서 이동하고자 하는 위치 확인
      let nx = x + dx[i]
      let ny = y + dy[i]
      if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue // 공간을 벗어난 경우 무시
      if (visited[nx][ny] == 0) {
        // 방문하지 않은 위치인 경우
        visited[nx][ny] = visited[x][y] + 1
        queue.enqueue([nx, ny])
      }
    }
  }
  line += 3 // 다음 테스트 케이스로 이동
  console.log(visited[targetX][targetY] - 1) // 항상 도달 가능
}
