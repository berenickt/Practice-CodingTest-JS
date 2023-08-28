/*** https://www.acmicpc.net/problem/10800
 * 문제에서 주어진 예시를 그림으로 그려보면 다음과 같다.
 * 자기 공보다 크기가 작고 색이 다른 공을 사로잡을 수 있다.
 * 예를 들어 1번 공은 4번 공만 잡을 수 있다.
 *
 * 공의 개수 𝑁이 최대 20만까지 들어올 수 있다.
 * 시간 복잡도 𝑂 𝑁𝑙𝑜𝑔𝑁 의 알고리즘을 작성해야 한다.
 * - 𝑂(𝑁^2)으로 푸는 경우: 20만 X 20만 = 400억
 * - 𝑂(𝑁)으로 푸는 경우: 20만
 * - 𝑂(𝑁𝑙𝑜𝑔𝑁)으로 푸는 경우: 20만 X 18 = 360만
 * 따라서 𝑂(𝑁𝑙𝑜𝑔𝑁)의 시간 복잡도를 가지는 𝑠𝑜𝑟𝑡()를 사용할 수 있다.
 *
 * 색상과 상관 없이 항상 자기보다 작은 공들을 잡을 수 있다고 하면?
 * 1. 단순히 크기만 고려해서 정렬한다.
 *   - 입력이 [10, 15, 3, 8]이라면, 정렬해서 [3, 8, 10, 15]를 만들자.
 * 2. 이후에 누적합을 구해준다.
 *   - 누적합이란 앞에서부터 계속 더해준 값을 모아 놓은 것을 말한다.
 *   - 누적합: [3, 11, 21, 36]
 *   - 누적합을 한 칸씩 오른쪽으로 이동(shift)해주면 다음과 같다.
 *    -- [0, 3, 11, 21]
 *    -- 이것은 각 공에 대하여 “자기보다 작은 공들의 크기 합“과 같다.
 *
 * 이제 “자기와 같은 색상은 잡을 수 없다”는 조건도 함께 고려한다면?
 * [핵심] 똑같은 방식으로 해결하면 되는데, 색상마다 누적합을 계산해주면 된다.
 *
 * 자기 공보다 크기가 작고 색이 다른 공을 사로잡을 수 있다.
 * 모든 공을 크기를 기준으로 오름차순 정렬한 뒤에 다음 공식을 계산한다.
 * 전체 공들의 크기 누적 합 – 같은 색상인 공들의 크기 누적 합
 */
let input = require('fs').readFileSync('/dev/stdin')
input = input.toString().split('\n')

let n = Number(input[0])
let arr = []
for (let i = 0; i < n; i++) {
  // 색상(c)와 크기(s)를 입력받기
  let c = Number(input[i + 1].split(' ')[0])
  let s = Number(input[i + 1].split(' ')[1])
  arr.push([c, s, i])
}
// 크기를 기준으로 오름차순 정렬
arr.sort((a, b) => a[1] - b[1])

let summary = 0 // 전체 누적 합
let colorSummary = Array(200001).fill(0) // 색상별 누적 합
let result = Array(n).fill(0) // 공의 등장 순서(i)별 최종 결과

let start = 0
while (start < n) {
  // 크기가 같은 공의 마지막 인덱스 찾기(start는 시작 인덱스 end는 끝 인덱스)
  let end = start
  while (end < n && arr[start][1] == arr[end][1]) end += 1
  // 자기보다 작은 공들의 크기 합 - 같은 색상인 공들의 크기 합
  for (let i = start; i < end; i++) {
    result[arr[i][2]] = summary - colorSummary[arr[i][0]]
  }
  // 합계 값(누적 합) 갱신
  for (let i = start; i < end; i++) {
    colorSummary[arr[i][0]] += arr[i][1] // 색상별 누적 합
    summary += arr[i][1] // 전체 누적 합
  }
  start = end
}
console.log(result.join('\n'))
