/*** https://www.acmicpc.net/problem/1427
 * 배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.
 *
 * 총 10개의 숫자(digit)이 존재하며, 문제 해결 과정은 다음과 같다.
 * 1. 0부터 9까지의 모든 숫자에 대하여, 빈도수를 센다.
 * 2. 각 숫자를 내림차순으로 하나씩 확인하며, [빈도수 만큼] 출력한다
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = input[0] // 수(N) 입력받기

// 0부터 9까지 각 숫자(digit)의 출현 빈도를 담을 배열(array) 선언
let cnt = Array(10).fill(0) // 초기 빈도 값은 0으로 초기화

// 한 자리씩 숫자(digit)를 확인하며
for (let x of n) cnt[Number(x)]++

let answer = ''

// 9부터 0까지 하나씩 숫자(digit)를 확인하며
for (let i = 9; i >= 0; i--) {
  // 출현 빈도만큼 출력하기
  for (let j = 0; j < cnt[i]; j++) answer += i + ''
}

console.log(answer)
