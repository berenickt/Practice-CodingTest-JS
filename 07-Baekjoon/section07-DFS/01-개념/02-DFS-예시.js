// DFS 메서드 정의
function dfs(graph, v, visited) {
  // 현재 노드를 방문 처리
  visited[v] = true
  console.log(v)
  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited)
    }
  }
}

// 각 노드가 연결된 정보를 표현
graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]]

// 각 노드가 방문된 정보를 표현
visited = Array(9).fill(false)

// 정의된 DFS 함수 호출
dfs(graph, 1, visited)

/*** DFS를 활용한 완전 탐색
 * 흔히 DFS는 모든 노드를 [완전 탐색]하기 위한 방법으로 사용된다.
 * 완전 탐색 알고리즘에서는 기본적으로 각 노드 및 간선에 대하여 한번씩 확인하도록 한다.
 * DFS를 응용하여 모든 경우의 수를 계산하기 위한
 * 백트래킹(back-tracking) 알고리즘으로 사용할 수 있다. (기본 알고리즘)
 * -> 백트래킹에 비하여 기본적인 형태의 DFS는 그 코드 예시가 간단하다
 */
