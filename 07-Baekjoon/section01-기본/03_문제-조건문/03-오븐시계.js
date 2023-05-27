/*** https://www.acmicpc.net/problem/2525
 * 풀이
 * 1. 입력으로 주어진 시각을 “분”의 형태로 바꾸기
 * 2. “분”이 주어졌을때, 시각을 알려주는 기능을 작성하기
 *
 * e.g.
 * 입력: (17시 40분 + 80분) = (1060분 + 80분) = 1140분
 * 1. 1140를 1440으로 나눈 나머지를 취하기 : 1140분
 * 2. 이때, 60으로 나눈 몫을 시(hour)로 취하기 : 19시
 * 3. 이때, 60으로 나눈 나머지를 분(minute)으로 취하기 : 0분
 */
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [a, b] = input[0].split(' ').map(Number)
let c = Number(input[1])

let totalMinute = a * 60 + b + c // 분의 형태로 바꾸기 totalMinute %= 1440;
let hour = parseInt(totalMinute / 60)
let minute = totalMinute % 60

console.log(hour + ' ' + minute)
