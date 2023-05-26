/*** https://www.acmicpc.net/problem/11509
 *
 */
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line); // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
}).on('close', function () {
  let data = input[1].split(' ').map(Number); // 모든 풍선의 위치 정보 입력받기
  let result = 0;
  let arrow = new Array(1000001).fill(0); // 각 높이에 화살이 몇 개 있는지
  for (let x of data) {
    if (arrow[x] > 0) {
      // 해당 높이에 화살이 있다면
      arrow[x] -= 1;
      arrow[x - 1] += 1;
    } else {
      // 해당 높이에 화살이 없다면
      arrow[x - 1] += 1;
      result += 1; // 화살 쏘기
    }
  }
  console.log(result);
  process.exit();
});
