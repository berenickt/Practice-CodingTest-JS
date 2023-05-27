/*** https://www.acmicpc.net/problem/10971
 * 본 문제는 외판원 순회(traveling salesman problem, TSP) 문제다.
 * 어느 한 도시에서 출발해 𝑁개의 도시를 모두 거쳐 다시 원래의 도시로 돌아와야 한다
 */
// 2부터 N까지의 수를 하나씩 골라 나열하는 모든 순열을 계산
function dfs(depth) {
  // 현재 순열에 대한 처리
  if (depth == n - 1) {
    let totalCost = 0 // 1번 노드에서 출발
    let cur = 1 // 1번 노드에서 출발
    for (let i = 0; i < n - 1; i++) {
      // 현재 순열에 따라서 노드 이동
      let nextNode = result[i] // 다음 이동 노드까지의 비용 계산
      let cost = graph[cur][nextNode]
      if (cost == 0) return // 이동 불가능하면 무시
      totalCost += cost // 이동 가능하면, 비용을 더하고 노드 이동
      cur = nextNode
    }
    // 마지막 노드에서 1로 돌아오는 것이 필수
    let cost = graph[cur][1]
    if (cost == 0) return // 이동 불가능하면 무시
    totalCost += cost // 이동 가능하면, 비용을 더하고 노드 이동
    minValue = Math.min(minValue, totalCost) // 경로의 최소 비용 저장
  }
  for (let i = 2; i <= n; i++) {
    if (visited[i]) continue
    result.push(i) // 방문 처리
    visited[i] = true
    dfs(depth + 1) // 재귀 함수 호출
    result.pop() // 방문 처리 해제
    visited[i] = false
  }
}

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let graph = [] // 전체 그래프(graph) 정보 입력
for (let i = 0; i <= n; i++) graph.push([0])
for (let i = 1; i <= n; i++) {
  line = input[i].split(' ').map(Number)
  for (let j = 0; j < n; j++) graph[i].push(line[j])
}
let visited = new Array(11).fill(false) // 방문 처리 배열
let result = [] // 순열 정보 배열
let minValue = 1e9
dfs(0)
console.log(minValue)
