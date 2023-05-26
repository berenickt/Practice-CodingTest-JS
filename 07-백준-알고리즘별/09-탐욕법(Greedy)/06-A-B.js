/*** https://www.acmicpc.net/problem/16953
 * 본 문제에서는 정수 𝐴를 𝐵로 바꾸려고 한다.
 * 사용 가능한 연산은 다음과 같은 두가지다.
 * 1. 2를곱한다.
 * 2. 1을수의가장오른쪽에추가한다.
 *
 * [문제 해결 아이디어] 𝐵에서 𝐴로 이동한다고 생각해 보자.
 * 현재의 𝐵값이 정해져 있을때, 취할수 있는 행동은 항상 정해져있다.
 * 1) 값이 2로 나누어 떨어지는경우        -> 2로 나누는 연산만 사용가능하다.
 * 2) 그렇지 않고, 일의 자릿수가 1인경우  -> 10으로 나누는 연산만 사용가능하다.
 * 3) 위 경우가 모두 해당되지 않는경우    -> 더 이상 이동이 불가능하므로, 종료한다.
 */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split(' ').map(Number); // A와 B 입력
let flag = false;
let result = 1;

while (a <= b) {
  if (a == b) {
    flag = true;
    break;
  }
  if (b % 2 == 0) b = parseInt(b / 2); // 2로 나누어 떨어지는 경우
  else if (b % 10 == 1) b = parseInt(b / 10); // 그렇지 않고, 일의 자릿수가 1인 경우
  else break; // 위 경우가 모두 해당되지 않는 경우
  result++;
}
if (flag) console.log(result);
else console.log(-1);
