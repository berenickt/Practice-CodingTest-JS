/*** https://www.acmicpc.net/problem/2884
 * 첫째 줄에 두 정수 H와 M이 들어옴
 * 이는 현재 상근이가 설정한 놓은 알람 시간 H시 M분을 의미
 *
 * 1. 현재시각이 주어졌을 때, 45분을 감소시킨다.
 * 2. 0분보다 작아지면, 시(hour)가 1시간 감소한다.
 * 3. 0시보다 작아지면, 시(hour)가 23시로 초기화된다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let hour = Number(input[0].split(' ')[0])
let minute = Number(input[0].split(' ')[1])

if (minute < 45) {
  hour -= 1
  minute += 15
  if (hour < 0) hour = 23
} else minute -= 45

console.log(hour + ' ' + minute)
