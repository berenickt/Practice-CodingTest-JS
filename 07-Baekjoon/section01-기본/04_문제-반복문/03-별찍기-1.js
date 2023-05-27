/*** https://www.acmicpc.net/problem/2438
 * 2중 반복문법을 이용하여 문제를 해결할수있다
 */
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0])

let result = ''
// 층(행)만큼 반복
for (let i = 0; i < n; i++) {
  // 현재 행만큼 별을 출력
  for (let j = 0; j <= i; j++) {
    result += '*'
  }
  result += '\n'
}
console.log(result)
