/*** https://www.acmicpc.net/problem/10818
 * 배열의 원소를 하나씩 확인하여, 최댓값과 최솟값을 찾는 문제다.
 * 최댓값(max value)과 최솟값(min value) 정보를 업데이트한다.
 * 원소를 차례대로 하나씩 확인한다는 점에서 시간복잡도𝑂(𝑁)로 해결할 수 있다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let data = input[1].split(' ').map(x => Number(x))

let minValue = data.reduce((a, b) => Math.min(a, b))
let maxValue = data.reduce((a, b) => Math.max(a, b))

console.log(minValue + ' ' + maxValue)
