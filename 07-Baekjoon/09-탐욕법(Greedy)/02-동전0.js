/*** https://www.acmicpc.net/problem/11047
 * 거스름돈 문제와 동일한 아이디어로 해결할 수 있다.
 * 화폐의 종류가 𝑁개이고, 𝐾원을 만들어야 한다.
 * 또한 각 화폐의 단위는 서로 배수관계에 해당한다.
 * 본 문제는 그리디 알고리즘을 이용해 문제를 해결할 수 있다.
 *
 * 단순히 가장 큰 화폐 단위부터 먼저 거슬러준다.
 * 각 화폐의 단위는 서로 배수 관계에 해당한다.
 * 예를 들어 화폐 4개가 있다면, 10, 50, 100, 500원과 같은 형식이 전형적이다.
 * 가치가 큰 동전은 가치가 작은 동전들의 합으로 표현될 수 있다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0].split(' ')[0]) // 동전의 개수
let k = Number(input[0].split(' ')[1]) // 만들어야 할 금액

let arr = []
// 전체 동전(화폐 단위) 데이터 입력
for (let i = 1; i <= n; i++) arr.push(Number(input[i]))
let cnt = 0

// 가치가 큰 동전부터 확인
for (let i = n - 1; i >= 0; i--) {
  cnt += parseInt(k / arr[i]) // 해당 동전을 몇 개 사용해야 하는지
  k %= arr[i] // 해당 동전으로 모두 거슬러 준 뒤 남은 금액
}
console.log(cnt)
