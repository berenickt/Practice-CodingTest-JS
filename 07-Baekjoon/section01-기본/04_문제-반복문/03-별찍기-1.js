/*** https://www.acmicpc.net/problem/2438
 * 첫째 줄에는 별 1개,
 * 둘째 줄에는 별 2개,
 * N번째 줄에는 별 N개를 찍는 문제
 *
 * 2중 반복문법을 이용하여 문제를 해결할수있다
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0])
let result = ''

// prettier-ignore
for (let i = 0; i < n; i++) { // 층(행)만큼 반복
  for (let j = 0; j <= i; j++) {   // 현재 행만큼 별을 출력
    result += '*'
  }
  result += '\n'
}

console.log(result)
