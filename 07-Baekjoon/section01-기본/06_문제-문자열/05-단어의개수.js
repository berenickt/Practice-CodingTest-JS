/*** https://www.acmicpc.net/problem/1152
 * 영어 대소문자와 공백으로 이루어진 문자열이 주어진다.
 * 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램
 * 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다
 *
 * [cf.]
 * 첫 줄에 영어 대소문자와 공백으로 이루어진 문자열
 * 또한 문자열은 공백으로 시작하거나 끝날 수 있다
 *
 * [풀이]
 * 단순히 전체 문자열에 포함된 단어의 개수를 계산한다.
 * 결과적으로 공백(" ")으로 구분된 단어의 개수를 세면 된다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// trim() 메서드는 문자열 양 끝의 공백을 제거한다.
// 공백으로 구분된 단어의 개수 출력한다.
let data = input[0].trim().split(' ')

if (data === '') console.log(0)
else console.log(data.length)
