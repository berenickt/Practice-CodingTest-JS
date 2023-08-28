/*** https://www.acmicpc.net/problem/18353
 * 문제 요구사항: 전투력이 높은 병사가 앞쪽에 오도록 내림차순으로 배치한다.
 * 1) 배치 과정에서는 특정한 위치에 있는 병사를 열외시키는 방법을 이용한다.
 * 2) 그러면서도 남아 있는 병사의 수가 최대가 되도록 하는 것이 목표다
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)

arr.reverse() // 순서를 뒤집어 최장 증가 부분 수열(LIS) 문제로 변환

let d = [0] // LIS 배열
// 이진 탐색을 활용한 LIS 알고리즘 수행
for (x of arr) {
  if (d[d.length - 1] < x) {
    // 마지막 원소보다 현재 원소 x가 크다면 가장 뒤에 넣기
    d.push(x)
  } else {
    // x 이하인 원소가 있다면, 가능한 왼쪽에 있는 원소와 x를 교체
    let index = lowerBound(d, x, 0, d.length)
    d[index] = x
  }
}

// 열외해야 하는 병사의 최소 수를 출력
console.log(n - (d.length - 1))
