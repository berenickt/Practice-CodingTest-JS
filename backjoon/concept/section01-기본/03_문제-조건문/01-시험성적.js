/*** https://www.acmicpc.net/problem/9498
 * 시험점수를 입력받아
 * A학점 : 90점이상 100점이하
 * B학점 : 80점이상 89점이하
 * C학점 : 70점이상 79점이하
 * D학점 : 60점이상 69점이하
 * F학점 : 59점이하
 * 를 출력하는 프로그램
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

data = Number(input[0])

function check(a) {
  if (90 <= a && a <= 100) console.log('A')
  else if (80 <= a && a <= 89) console.log('B')
  else if (70 <= a && a <= 79) console.log('C')
  else if (60 <= a && a <= 69) console.log('D')
  else console.log('F')
}

check(data)
