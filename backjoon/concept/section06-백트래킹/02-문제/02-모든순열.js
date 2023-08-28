/*** https://www.acmicpc.net/problem/10974
 * 𝑁이 주어졌을 때, 1부터 𝑁까지의 수로 이루어진 순열을 사전 순으로 출력한다.
 * 𝑁의 값은 최대 8이다. -> 이때 모든 순열을 출력하므로 최대 경우의 수는 8!개이다
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0]) // 1부터 N까지 자연수 중에서 중복 없이 N개를 고른 수열
let arr = [] // 순열을 계산하고자 하는 원소(element)가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i)
let visited = new Array(n).fill(false) // 각 원소 인덱스(index)별 방문 여부
let selected = [] // 현재 순열에 포함된 원소(element)의 인덱스

let answer = ''
// prettier-ignore
function dfs(arr, depth) {
  if (depth == n) { // 모든 순열을 확인하는 부분
    let result = [] // 순열(permutation) 결과 저장 테이블
    for (let i of selected) result.push(arr[i])
    for (let x of result) answer += x + ' ' // 계산된 순열을 실질적으로 처리하는 부분
    answer += '\n'
    return
  }
  for (let i = 0; i < arr.length; i++) { // 하나씩 원소 인덱스(index)를 확인하며
    if (visited[i]) continue // [중복을 허용하지 않으므로] 이미 처리 된 원소라면 무시
    selected.push(i) // 현재 원소 선택
    visited[i] = true // 현재 원소 방문 처리
    dfs(arr, depth + 1) // 재귀 함수 호출
    selected.pop() // 현재 원소 선택 취소
    visited[i] = false // 현재 원소 방문 처리 취소
  }
}
dfs(arr, 0)
console.log(answer)
