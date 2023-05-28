/*** https://www.acmicpc.net/problem/2638
 * 전체 맵은 𝑁 × 𝑀 형태를 가진다. (𝑁과 𝑀은 최대 100)
 * 한 시간마다 어떤 위치의 치즈를 녹이게 될 지 일일이 계산하면 어떨까?
 * BFS로 녹일 위치를 선택하고, 녹이는 과정을 반복 수행하여 본 문제를 해결할 수 있다
 *
 * 어떤 위치의 치즈를 녹여야 할까?
 * 치즈 내부의 공간은 치즈 외부 공기와 접촉하지 않는 것으로 간주한다.
 * 따라서, 단순히 주변이 0인지를 확인하는 방식으로는 해결할 수 없다.
 * 즉, 외부 공기를 정확히 파악하기 위해 (0, 0)의 위치에서 출발하여 BFS를 진행한다.
 * 가장자리에는 치즈가 없기 때문이다.
 *
 * [BFS 파트]
 * (0, 0)의 위치에서 출발하여 BFS를 진행한다.
 * 큐에서 하나의 원소를 꺼낸 뒤에는 상, 하, 좌, 우 위치를 확인한다.
 * 인접한 위치에 치즈가 있다면, 치즈가 있는 위치에 대하여 카운트(count)한다.
 *
 * [녹이기 파트]
 * 카운트가 2 이상인 치즈를 없앤다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
// 맵의 크기(N과 M) 정보 입력
let [n, m] = input[0].split(' ').map(Number)
let graph = [] // 2차원 맵 입력받기
for (let i = 1; i <= n; i++) {
  let row = input[i].split(' ').map(Number)
  graph.push(row)
}

// 상, 하, 좌, 우 방향 정보
let dx = [-1, 1, 0, 0]
let dy = [0, 0, -1, 1]

function bfs() {
  let visited = [] // 방문 처리 배열
  for (let i = 0; i < n; i++) visited.push(new Array(m).fill(false))
  visited[0][0] = true // 제일 왼쪽 위에서 출발
  let queue = new Queue() // 너비 우선 탐색(BFS) 수행
  queue.enqueue([0, 0])
  while (queue.getLength() != 0) {
    // 큐가 빌 때까지 반복하기
    let [x, y] = queue.dequeue()
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i]
      let ny = y + dy[i]
      // 맵을 벗어나는 경우 무시
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue
      if (!visited[nx][ny]) {
        if (graph[nx][ny] >= 1) graph[nx][ny] += 1 // 카운트 증가
        else {
          queue.enqueue([nx, ny])
          visited[nx][ny] = true
        }
      }
    }
  }
}

function melt() {
  let finish = true // 더 녹일 치즈가 없는지 여부
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] >= 3) {
        // 녹일 치즈라면
        graph[i][j] = 0 //녹이기
        finish = false
      } else if (graph[i][j] == 2) graph[i][j] = 1 // 한 면만 닿은 경우 무시
    }
  }
  return finish
}
let result = 0
while (true) {
  bfs()
  if (melt()) {
    console.log(result) // 전부 녹았다면
    break
  } else result += 1
}
