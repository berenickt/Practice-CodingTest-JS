/*** https://www.acmicpc.net/problem/5567
 * 문제의 요구사항은 1번 학생의 "친구"와 "친구의 친구"의 수를 출력하는 것이다.
 * [해결 방법] 그래프로 표현한 뒤에 거리가 2 이하인 노드의 수를 출력한다.
 * 너비 우선 탐색(BFS)을 사용하면, 각 노드까지의 최단 거리를 구할 수 있다.
 * 결과적으로 BFS 호출 이후에 최단 거리가 2 이하인 노드의 수를 계산하면 된다
 *
 * 노드의 개수(𝑁)는 최대 500이다.
 * 간선의 개수(𝑀)는 최대 10,000이다.
 * 기본적인 BFS를 이용하여 문제를 해결할 수 있다
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let n = Number(input[0]) // 학생의 수
let m = Number(input[1]) // 친구 관계의 수

// 그래프 정보
let graph = []
for (let i = 1; i <= n; i++) {
  graph[i] = []
}
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(' ').map(Number)
  graph[x].push(y)
  graph[y].push(x)
}
// 모든 친구(노드)에 대한 최단 거리 초기화
let distance = new Array(n + 1).fill(-1)
distance[1] = 0 // 시작점까지의 거리는 0으로 설정

let queue = new Queue() // 너비 우선 탐색(BFS) 수행
queue.enqueue(1)
while (queue.getLength() != 0) {
  // 큐가 빌 때까지 반복하기
  let now = queue.dequeue()
  for (let nextNode of graph[now]) {
    // 현재 노드에서 이동할 수 있는 모든 노드를 확인
    if (distance[nextNode] == -1) {
      // 방문하지 않은 도시라면
      distance[nextNode] = distance[now] + 1
      queue.enqueue(nextNode)
    }
  }
}
// 최단 거리가 2 이하인 모든 친구(노드)의 수를 계산
let result = 0
for (let i = 1; i <= n; i++) {
  if (distance[i] != -1 && distance[i] <= 2) {
    result++
  }
}
console.log(result - 1) // 자기 자신은 제외
