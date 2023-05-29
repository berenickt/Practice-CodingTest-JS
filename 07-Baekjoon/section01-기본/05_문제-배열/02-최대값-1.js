/*** https://www.acmicpc.net/problem/2562
 * 9개의 서로 다른 자연수가 주어질 때,
 * 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램
 *
 * [e.g.]
 * 서로 다른 9개의 자연수 3, 29, 38, 12, 57, 74, 40, 85, 61이 주어지면,
 * 이들 중 최댓값은 85이고, 이 값은 8번째 수
 *
 * [풀이]
 * 배열의 원소를 하나씩 확인하여, 최댓값과 그 인덱스를 찾는 문제
 * 계속해서 가장 큰 값을 가지는 원소의 인덱스(index)를 업데이트한다.
 * 원소를 차례대로 하나씩 확인한다는 점에서 시간복잡도는 𝑂(𝑁)
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let maxIndex = 0
let maxValue = 0

for (let i = 0; i < 9; i++) {
  let data = Number(input[i])
  if (maxValue < data) {
    maxValue = data
    maxIndex = i
  }
}

console.log(maxValue)
console.log(maxIndex + 1)
