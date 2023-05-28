/*** https://www.acmicpc.net/problem/1697
 * 초기 위치(N)에서 동생의 위치(M)에 도달하는 최단 시간을 계산하는 문제다.
 * 모든 순간이동(간선)의 비용이 1초로 동일하므로, BFS로 최단 시간을 계산할 수 있다
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

const MAX = 100001
let [n, k] = input[0].split(' ').map(Number) // 초기 위치(N)와 동생의 위치(K)
let visited = new Array(MAX).fill(0) // 각 위치까지의 최단 시간

function bfs() {
  // 너비 우선 탐색(BFS)
  queue = new Queue()
  queue.enqueue(n)
  while (queue.getLength() != 0) {
    // 큐가 빌 때까지 반복
    let cur = queue.dequeue()
    if (cur == k) {
      // 동생의 위치에 도달한 경우
      return visited[cur] // 최단 시간 출력
    }
    for (let nxt of [cur - 1, cur + 1, cur * 2]) {
      // 공간을 벗어난 경우 무시
      if (nxt < 0 || nxt >= MAX) continue
      // 아직 방문하지 않은 위치라면
      if (visited[nxt] == 0) {
        visited[nxt] = visited[cur] + 1
        queue.enqueue(nxt)
      }
    }
  }
}
console.log(bfs())
