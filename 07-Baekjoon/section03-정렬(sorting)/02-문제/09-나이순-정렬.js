/*** https://www.acmicpc.net/problem/10814
 * 입력이 들어왔을 때, 일종의 객체로 이를 처리한다.
 * 다음과 같이 7명의 정보가 (나이, 이름) 형태로 주어진다고 가정하자
 * (27, Chulsoo)
 * (30, Gildong)
 * (25, Soonja)
 * (25, Zo)
 * (25, Amy)
 * (29, Boksoon)
 * (32, Junghwa)
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr = []

for (let i = 1; i <= n; i++) {
  // 각 사람의 (나이, 이름) 정보를 입력받기
  let age = Number(input[i].split(' ')[0])
  let name = input[i].split(' ')[1]
  arr.push([age, name])
}
arr.sort((a, b) => a[0] - b[0]) // Node.js의 정렬은 기본적으로 stable

let answer = ''
for (let x of arr) answer += x[0] + ' ' + x[1] + '\n'
console.log(answer)
