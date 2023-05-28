/*** https://www.acmicpc.net/problem/22862
 * 길이가 𝑁인 수열에서 𝐾개의 원소를 삭제할 수 있다.
 * 결과적으로 짝수로 이루어진 연속한 부분 수열 중에서 가장 긴 것을 계산하면 된다.
 * 본 문제는 투 포인터(two pointers) 알고리즘으로 해결 가능하다.
 *
 * 길이가 𝑁인 수열에서 𝐾개의 원소를 삭제할 수 있다.
 * 결과적으로 짝수로 이루어진 연속한 부분 수열 중에서 가장 긴 것을 계산하면 된다.
 * 본 문제는 투 포인터(two pointers) 알고리즘으로 해결 가능하다.
 * - 짝수인 경우: 단순히 end를 오른쪽으로 이동
 * - 홀수인 경우: 최대 𝐾까지 end를 오른쪽으로 이동
 */
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let [n, k] = input[0].split(' ').map(Number)
let arr = input[1].split(' ').map(Number)

let result = 0
let eraseCount = 0
for (let start = 0, end = 0; start < n; start++) {
  while (end < n) {
    if (arr[end] % 2 == 0) end++ // 짝수인 경우 end 증가
    else {
      // 홀수인 경우
      if (eraseCount == k) break // 더 지울 수 없다면 종료
      // 지울 수 있는 여건이 있다면 지우기
      eraseCount++
      end++
    }
  }
  result = Math.max(result, end - start - eraseCount) // 범위의 길이 계산
  // start를 한 칸 오른쪽으로 이동할 때, 가능하다면 지울 수 있는 개수 증가
  if (arr[start] % 2 == 1) eraseCount--
}
console.log(result)
