/*** https://www.acmicpc.net/problem/18870
 * 좌표압축이란, 쉽게 말해 각 값을 `크기순위`로 변경하는 것이다.
 * 배열 [ 2, 4, -10, 4, -9 ] 를 생각해보자.
 * 이를 순위로 표현하면(0부터 시작) [2, 3, 0, 3, 1]로 이해할 수 있다.
 * 이러한 결과를 어떻게 얻을 수 있을까?
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let n = Number(input[0])
let arr = input[1].split(' ').map(Number)

// 집합(set)으로 변경해 중복 값을 없앤 뒤에 다시 배열로 변환
let uniqueArray = [...new Set(arr)]
uniqueArray.sort((a, b) => a - b) // 오름차순 정렬 수행

// 0부터 차례대로 매핑(mapping) 수행
let myMap = new Map()
for (let i = 0; i < uniqueArray.length; i++) {
  myMap.set(uniqueArray[i], i)
}

answer = ''
for (x of arr) answer += myMap.get(x) + ' '
console.log(answer)
