/*** https://www.acmicpc.net/problem/10814
 * 온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다.
 * 이때, 회원들을 나이가 증가하는 순으로,
 * 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램
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

// Node.js의 정렬은 기본적으로 "stable 정렬"을 제공함
arr.sort((a, b) => a[0] - b[0])
let answer = ''

for (let x of arr) {
  answer += x[0] + ' ' + x[1] + '\n'
}

console.log(answer)
