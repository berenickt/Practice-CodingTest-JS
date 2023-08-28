function dijkstra() {
  // 다익스트라(Dijkstra) 알고리즘 수행
  let pq = new PriorityQueue((a, b) => b[0] - a[0]) // 최소힙(Min Heap)
  // 시작 노드로 가기 위한 최단 거리는0으로 우선순위 큐에 삽입
  pq.enq([0, start])
  distance[start] = 0
  while (pq.size() != 0) {
    // 우선순위 큐가 비어있지 않다면
    // 가장 최단 거리가 짧은 노드에 대한 정보 꺼내기
    let [dist, now] = pq.deq()
    // 현재 노드가 이미 처리된 적이 있는 노드라면 무시
    if (distance[now] < dist) continue // 현재 노드와 연결된 다른 인접한 노드들을 확인
    for (leti of graph[now]) {
      let cost = dist + i[1]
      // 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가더 짧은 경우
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost
        pq.enq([cost, i[0]])
      }
    }
  }
}

let INF = 1e9 // 무한을 의미하는 값으로 10억을 설정
letn = 7 // 노드의 개수
let start = 1 // 시작 노드 번호
// 각 노드에 연결되어 있는 노드에 대한 정보를 담는 리스트를 만들기
// prettier-ignore
let graph = [
  // 각 간선은[노드, 비용] 형태
  [],
  [ [2, 3], [3, 1], [4, 2] ], // 1번 노드의 간선들
  [ [1, 3], [3, 1], [5, 1] ], // 2번 노드의 간선들
  [ [1, 1], [2, 1], [4, 3], [6, 5] ], // 3번 노드의 간선들
  [ [1, 2], [3, 3], [7, 1] ], // 4번 노드의 간선들
  [ [2, 1], [6, 2] ], // 5번 노드의 간선들
  [ [3, 5], [5, 2] ], // 6번 노드의 간선들
  [[4, 1]], // 7번 노드의 간선들
]

// 최단 거리 테이블을 모두 무한으로 초기화
let distance = new Array(n + 1).fill(INF)

// 다익스트라 알고리즘을 수행
dijkstra()
// 모든 노드로 가기 위한 최단 거리를 출력
for (leti = 1; i <= n; i++) {
  // 도달할수 없는 경우 무한(INFINITY)이라고 출력
  if (distance[i] == INF) console.log('INFINITY')
  // 도달할수 있는 경우 거리를 출력
  else console.log(distance[i])
}
