// BFS 메서드 정의
function bfs(graph, start, visited) {
  queue = new Queue()
  queue.enqueue(start)
  // 현재 노드를 방문 처리
  visited[start] = true
  // 큐가 빌 때까지 반복
  while (queue.getLength() != 0) {
    // 큐에서 하나의 원소를 뽑아 출력하기
    v = queue.dequeue()
    console.log(v)
    // 아직 방문하지 않은 인접한 원소들을 큐에 삽입
    for (i of graph[v]) {
      if (!visited[i]) {
        queue.enqueue(i)
        visited[i] = true
      }
    }
  }
}

// 각 노드가 연결된 정보를 표현
graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]]

// 각 노드가 방문된 정보를 표현
visited = Array(9).fill(false)

// 정의된 BFS 함수 호출
bfs(graph, 1, visited)
