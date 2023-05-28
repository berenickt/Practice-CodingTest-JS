/*** https://www.acmicpc.net/problem/18427
 * 1번부터 N번까지의 학생들은 각각 블록들을 가지고 있다.
 * - 학생마다 최대 M개의 블록을 가지고 있을 수 있으며,
 *   한 명의 학생이 가지고 있는 모든 블록들의 높이는 서로 다르다.
 * - 이때 1번부터 N번까지의 학생들이 가진 블록을 차례대로 사용하여
 *   바닥에서부터 쌓아 올려 하나의 탑을 만들고자 한다.
 * - 단, 어떤 학생의 블록은 사용하지 않아도 되며 한 학생당 최대 1개의 블록만을 사용할 수 있다.
 * - 1번부터 N번까지의 학생들이 가지고 있는 블록들에 대한 정보가 주어졌을 때,
 *   높이가 정확히 H인 탑을 만들 수 있는 경우의 수를 계산하는 프로그램을 작성하여라
 *
 * 예를 들어 𝑁 = 3, 𝑀 = 3, 𝐻 = 5인 상황을 가정하자.
 * 또한 각 학생마다 가지고 있는 블록들의 높이가 다음과 같다고 가정하자.
 * - 1번 학생: 2, 3, 5
 * - 2번 학생: 3, 5
 * - 3번 학생: 1, 2, 3
 * 이때는 다음 그림과 같이 6가지가 존재한다.
 * (블록을 사용하지 않는 경우는 X로 표시하였다.)
 */
// readline 모듈보다는 fs를 이용해 파일 전체를 읽기
let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n')

let [n, m, h] = input[0].split(' ').map(Number)
let a = []
let d = new Array(h + 1).fill(0)
for (let i = 1; i <= n; i++) {
  a.push(input[i].split(' ').map(Number))
}

d[0] = 1
// 모든 학생에 대하여 처리
for (let i = 0; i < n; i++) {
  let data = []
  // 0부터 h까지의 모든 높이에 대하여 처리
  for (j = 0; j <= h; j++) {
    for (let k = 0; k < a.length; k++) {
      // 해당 학생의 모든 블록을 확인하며
      // 현재 학생의 블록으로 특정 높이의 탑을 쌓을 수 있는 경우
      if (d[j] != 0 && j + a[i][k] <= h) {
        data.push([j + a[i][k], d[j]])
      }
    }
  }
  // 쌓을 수 있는 높이에 대하여, 경우의 수 증가
  for ([height, value] of data) {
    d[height] = (d[height] + value) % 10007
  }
}
console.log(d[h])
