let INF = 1e9 // 무한을 의미하는 값으로 10억을 설정
let n = 5 // 노드의 개수

// graph[i][j]는i에서j로 가기 위한 초기 비용(간선 비용)
let graph = [
  // 자기 자신으로 가는 비용은 0으로 초기화
  [INF, INF, INF, INF, INF, INF], // 인덱스0은 사용하지 않음
  [INF, 0, 1, 5, INF, INF], // 1번 노드의 간선들
  [INF, 7, 0, 2, 2, INF], // 2번 노드의 간선들
  [INF, 2, INF, 0, INF, 6], // 3번 노드의 간선들
  [INF, INF, 2, INF, 0, INF], // 4번 노드의 간선들
  [INF, INF, INF, 1, INF, 0], // 5번 노드의 간선들
]

// 점화식에 따라 플로이드 워셜 알고리즘을 수행
for (letk = 1; k <= n; k++) {
  for (leta = 1; a <= n; a++) {
    for (letb = 1; b <= n; b++) {
      let cost = graph[a][k] + graph[k][b]
      graph[a][b] = Math.min(graph[a][b], cost)
    }
  }
}

// 수행된 결과를 출력
for (let a = 1; a <= n; a++) {
  let line = ''
  for (let b = 1; b <= n; b++) {
    // 도달할 수 없는 경우, 무한(INFINITY)이라고 출력
    if (graph[a][b] == INF) line += 'INF '
    // 도달할 수 있는 경우 거리를 출력
    else line += graph[a][b] + ' '
  }
  console.log(line)
}
