/*** https://www.acmicpc.net/problem/15651
 * 모든 순열의 수를 고려하기 위해 재귀 함수(백트래킹)를 사용할 수 있다.
 * 하나의 순열을 트리(tree)에서 리프 노드까지의 경로로 생각할 수 있다.
 * -> 이때, 𝑀개의 원소를 뽑는 순열을 고려하는 것이므로, 깊이(depth)는 𝑀과 같다.
 * 원소를 중복하여 선택하므로, 방문 처리(visited) 배열을 사용하지 않는다.
 * -> 한 번 방문한(방문 처리된) 원소도 중복해서 또 방문할 수 있다.
 * 따라서 기본 순열 코드에서 단순히 𝑣𝑖𝑠𝑖𝑡𝑒𝑑 변수를 제거한다
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [n, m] = input[0].split(' ').map(Number) // 1부터 N까지 자연수 중에서 M개를 고른 중복 순열
let arr = [] // 중복 순열을 계산하고자 하는 원소(element)가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i)
let selected = [] // 현재 중복 순열에 포함된 원소(element)의 인덱스

let answer = ''

// prettier-ignore
function dfs(arr, depth) {
  // 모든 중복 순열을 확인하는 부분
  if (depth == m) {
    let result = [] // 중복 순열 결과 저장 테이블
    for (let i of selected) result.push(arr[i])
    for (let x of result) answer += x + ' ' // 계산된 중복 순열을 실질적으로 처리하는 부분
    answer += '\n'
    return
  }
  // 하나씩 원소 인덱스(index)를 확인하며
  for (let i = 0; i < arr.length; i++) {
    selected.push(i) // 현재 원소 선택
    dfs(arr, depth + 1) // 재귀 함수 호출
    selected.pop() // 현재 원소 선택 취소
  }
}
dfs(arr, 0)
console.log(answer)
