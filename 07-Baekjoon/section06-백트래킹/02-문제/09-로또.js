/*** https://www.acmicpc.net/problem/6603
 * 원소가 𝐾개인 집합 𝑆 = 1, 2, 3, 5, 8, 13, 21, 34 가 있다고 해보자.
 * 로또이기 때문에, 이 중에서 6개를 골라야 한다.
 * 현재 원소의 개수는 𝐾 = 8개이므로, 가능한 모든 조합의 수는 다음과 같다.
 *
 * 본 로또 문제의 요구사항은 다음과 같다.
 * 𝐾는 최대 6 ≤ 𝐾 ≤ 13이다.
 * 이 중에서 6개를 골라야 한다.
 * 최대 경우를 생각하면 다음과 같다.
 * 𝐶𝑜𝑚𝑏𝑖𝑛𝑎𝑡𝑖𝑜𝑛 13,6 = 8,580
 */
function dfs(arr, depth, start) {
  if (depth == 6) {
    // 모든 조합을 확인하는 부분(로또는 6개의 자연수로 구성)
    let result = [] // 조합(combination) 결과 저장 테이블
    for (let i of selected) result.push(arr[i])
    for (let x of result) answer += x + ' ' // 계산된 조합을 실질적으로 처리하는 부분
    answer += '\n'
    return
  }
  // start 지점부터 하나씩 원소 인덱스(index)를 확인하며
  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue // [중복을 허용하지 않으므로] 이미 처리 된 원소라면 무시
    selected.push(i) // 현재 원소 선택
    visited[i] = true // 현재 원소 방문 처리
    dfs(arr, depth + 1, i + 1) // 조합이므로, 재귀 함수 호출시 다음 인덱스(index)를 넣기
    selected.pop() // 현재 원소 선택 취소
    visited[i] = false // 현재 원소 방문 처리 취소
  }
}

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

for (let i = 0; i < input.length; i++) {
  let data = input[i].split(' ').map(Number)
  if (data[0] == 0) {
    break // 테스트 케이스 종료 조건
  } else {
    n = data[0]
    arr = data.slice(1)
    visited = new Array(n).fill(false) // 각 원소 인덱스(index)별 방문 여부
    selected = [] // 현재 조합에 포함된 원소(element)의 인덱스
    answer = ''
    dfs(arr, 0, 0)
    console.log(answer)
  }
}
