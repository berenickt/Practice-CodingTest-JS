/*** https://www.acmicpc.net/problem/2525
 * 훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때,
 * 오븐구이가 끝나는 시각을 계산하는 프로그램
 *
 * 입력 : A시 B분
 * 걸리는 시간 : C분
 *
 * [풀이]
 * 1. 입력으로 주어진 시각을 "분"의 형태로 바꾸기
 * 2. "분"이 주어졌을때, 시각을 알려주는 기능을 작성하기
 *
 * cf. 하루 = 1440분
 * [e.g. 2]
 * 입력: (17시 40분 + 80분) = (1060분 + 80분) = 1140분
 * 1. 1140를 1440으로 나눈 나머지를 취하기 : 1140분
 * 2. 이때, 60으로 나눈 몫을 시(hour)로 취하기 : 19시
 * 3. 이때, 60으로 나눈 나머지를 분(minute)으로 취하기 : 0분
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [a, b] = input[0].split(' ').map(Number)
let c = Number(input[1])

let totalMinute = a * 60 + b + c // 분의 형태로 바꾸기
totalMinute %= 1440
let hour = parseInt(totalMinute / 60)
let minute = totalMinute % 60

console.log(hour + ' ' + minute)
