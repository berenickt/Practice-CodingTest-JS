/*** https://www.acmicpc.net/problem/11404
 * 모든 도시의 쌍(𝐴, 𝐵)에 대하여 최단 거리를 모두 구해야 한다.
 * 플로이드 워셜(Floyd-Warshall) 알고리즘을 사용할 수 있다.
 * - 노드의 개수(𝑁)가 최대 100개이므로, 시간 복잡도 𝑂(𝑁^3)으로 충분히 해결 가능하다.
 * 두 노드 사이의 간선이 여러 개일 수 있으므로, 가장 비용이 적은 간선만 고려한다. (중복 간선)
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let INF = 1e9 // 무한을 의미하는 값으로 10억을 설정
let n = Number(input[0]) // 노드의 개수(N)
let m = Number(input[1]) // 간선의 개수(M)

// graph[i][j]는 i에서 j로 가기 위한 초기 비용(간선 비용)
let graph = [new Array(n + 1).fill(INF)]
for (let i = 1; i <= n; i++) {
  graph.push(new Array(n + 1).fill(INF))
  graph[i][i] = 0 // 자기 자신으로 가는 비용은 0원
}
for (let i = 2; i <= m + 1; i++) {
  let [a, b, c] = input[i].split(' ').map(Number)
  graph[a][b] = Math.min(graph[a][b], c)
}

// 점화식에 따라 플로이드 워셜 알고리즘을 수행
for (let k = 1; k <= n; k++) {
  // K는 거쳐가는 노드
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      let cost = graph[a][k] + graph[k][b]
      if (graph[a][b] > cost) {
        // K를 거쳐갈 때 비용이 더 저렴하다면 테이블 갱신
        graph[a][b] = cost
      }
    }
  }
}

for (let a = 1; a <= n; a++) {
  // 수행된 결과를 출력
  let line = ''
  for (let b = 1; b <= n; b++) {
    if (graph[a][b] == INF) line += '0 ' // 도달할 수 없는 경우, "0"이라고 출력
    else line += graph[a][b] + ' ' // 도달할 수 있는 경우 거리를 출력
  }
  console.log(line)
}
