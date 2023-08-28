/*** https://www.acmicpc.net/problem/17609
 * 회문(回文) 또는 "팰린드롬(palindrome)"은 앞 뒤 방향으로 볼 때 같은 순서의 문자로 구성된 문자열을 말한다.
 * e.g. ‘abba’ ‘kayak’, ‘reviver’, ‘madam’은 모두 회문
 *
 * 만일 그 자체는 회문이 아니지만 한 문자를 삭제하여 회문으로 만들 수 있는 문자열이라면
 * 이런 문자열을 "유사회문(pseudo palindrome)"이라고 부른다.
 * e.g. ‘summuus’는 5번째나 혹은 6번째 문자 ‘u’를 제거하여 ‘summus’인 회문이 되므로 유사회문
 *
 * 제시된 문자열을 분석하여
 * 그것이 그 자체로 회문인지,
 * 또는 한 문자를 삭제하면 회문이 되는 “유사회문”인지,
 * 아니면 회문이나 유사회문도 아닌 일반 문자열인지를 판단해야 한다.
 *
 * @returns 문자열 그 자체로 회문이면 0, 유사회문이면 1, 그 외는 2를 출력
 *
 * [cf.]
 * 첫 줄에는 주어지는 문자열의 개수를 나타내는 정수 T
 * 다음 줄부터 T개의 줄에 걸쳐 한 줄에 하나의 문자열이 입력으로 주어짐
 *
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

function palindrome(x) {
  return x == x.split('').reverse().join('')
}

let testCases = Number(input[0])

for (let tc = 1; tc <= testCases; tc++) {
  // 문자열을 하나씩 입력받아 처리
  let data = input[tc]

  // 회문인 경우
  if (palindrome(data)) console.log(0)
  // 회문이 아닌 경우, 유사 회문인지 검사
  else {
    let found = false
    let n = data.length // 문자열의 길이
    for (let i = 0; i < parseInt(n / 2); i++) {
      // 대칭이 아닌 인덱스를 찾은 경우
      if (data[i] != data[n - i - 1]) {
        // 앞쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
        if (palindrome(data.slice(0, i) + data.slice(i + 1, n))) found = true
        // 뒤쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
        if (palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n))) found = true
        break
      }
    }
    if (found) console.log(1) // 유사 회문인 경우
    else console.log(2) // 회문도 유사 회문도 아닌 경우
  }
}
