/*** https://www.acmicpc.net/problem/1316
 * 그룹 단어란 단어에 존재하는 모든 문자에 대해서,
 * 각 문자가 연속해서 나타나는 경우만을 말한다.
 *
 * [e.g.]
 * ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고,
 * kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만,
 * aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
 *
 * 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램
 *
 * [cf.]
 * 첫째 줄에 단어의 개수 N
 * 둘째 줄부터 N개의 줄에 단어
 *
 * [return] 그룹 단어의 개수를 출력
 *
 * [풀이]
 * 각 알파벳을 하나씩 확인할 수 있다.
 * a부터 z까지 총 26개의 알파벳이 있다.
 * 각 알파벳에 대하여 연속해서 등장한 횟수가 1번인지 체크한다.
 */
function checkGroupWord(data) {
  let setData = new Set(data[0])

  for (let i = 0; i < data.length - 1; i++) {
    // 오른쪽 단어와 다르다면
    if (data[i] != data[i + 1]) {
      // 이미 등장한 적 있는 알파벳이라면
      if (setData.has(data[i + 1])) return false
      else setData.add(data[i + 1])
    }
  }
  return true
}

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let summary = 0

for (let i = 1; i <= n; i++) {
  let data = input[i]
  if (checkGroupWord(data)) summary += 1
}

console.log(summary)
