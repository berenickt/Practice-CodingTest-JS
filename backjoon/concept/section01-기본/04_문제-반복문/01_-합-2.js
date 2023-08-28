/*** https://www.acmicpc.net/problem/8393
 * 혹은 단순히 등차수열의 합 공식을 이용할 수 있다.
 *
 * 등차수열의 제 1 항부터 제 𝑁항까지의 합을 𝑆이라고 하자.
 * 첫째 항이 𝑎, 마지막 항이 𝑙일때,
 * 𝑆 = 𝑁 ( 𝑎 + 𝑙 ) / 2
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0])

// 등차수열의 합 공식
console.log((n * (n + 1)) / 2)
