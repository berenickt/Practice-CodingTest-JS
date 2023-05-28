/*** https://www.acmicpc.net/problem/1058
 * 거리가 2 이하인 친구의 수를 계산한다.
 * 예를 들어 A에서 거리가 2 이하인 예시는 다음과 같다.
 * 예시 1) A – B
 * 예시 2) A – C - B
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let INF = 1e9 // 무한을 의미하는 값으로 10억을 설정
let n = Number(input[0]) // 노드의 개수(N)

// graph[i][j]는 i에서 j로 가기 위한 초기 비용(간선 비용)
let graph = [new Array(n + 1).fill(INF)]
for (let i = 1; i <= n; i++) {
  graph.push(new Array(n + 1).fill(INF))
  let line = input[i].split('')
  for (let j = 0; j < n; j++) {
    if (line[j] == 'Y') graph[i][j + 1] = 1
  }
}
for (let i = 1; i <= n; i++) graph[i][i] = 0 // 자기 자신으로 가는 비용은 0원

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

// 모든 A에서 B로 가는 최단 경로 확인
let twoFriends = new Array(n + 1).fill(0)
for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    // 거리가 2 이하인 노드의 수 세기
    if (a != b && graph[a][b] <= 2) twoFriends[a]++
  }
}

// 거리가 2 이하인 노드의 수 중에서 최댓값을 출력
console.log(twoFriends.reduce((a, b) => Math.max(a, b)))
