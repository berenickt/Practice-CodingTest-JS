/*** https://www.acmicpc.net/problem/11509
 * 큰 방에 N개의 풍선이 떠있다. 풍선들은 왼쪽부터 오른쪽까지 일렬로 있다.
 * 진솔이는 화살 가지고 노는 것과 사냥 연습하는 것을 좋아한다.
 * 진솔이는 화살을 왼쪽에서 오른쪽으로 쏜다. 높이는 임의로 선택한다.
 *
 * 화살은 선택된 높이 H에서 풍선을 마주칠 때까지 왼쪽에서 오른쪽으로 이동한다.
 * 화살이 풍선을 마주치는 순간, 풍선은 터지고 사라진다.
 *
 * 화살은 계속해서 가던길을 가는데 높이는 1 줄어든다.
 * 그러므로 만약 화살이 높이 H에서 이동 중이었다면 풍선을 터트린 후에는 높이가 H-1이 된다.
 * 우리의 목표는 모든 풍선을 터트리되 가능한한 적은 화살을 사용하는 것
 *
 * [cf.]
 * 첫 번째 줄에는 정수 N
 * 두 번째 줄에는 배열 H_i가 N개 들어옴
 * 각각의 H는 i번째 풍선의 높이에 해당하며 왼쪽에서 오른쪽으로 나열되는 순서
 *
 * [핵심 아이디어]
 * 왼쪽부터 하나씩 풍선을 확인한다.
 * 해당 높이에 존재하는 화살이 없다면 화살을 새롭게 사용한다.
 * 5개의 풍선의 높잉가 각각 [4, 5, 2, 1, 4]일 떄는 다음과 같다.
 * 4일떄 사용, 5일떄 사용, 2일 떄 사용해서 총 3개의 화살이 필요
 */
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', line => {
  input.push(line) // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
}).on('close', () => {
  let data = input[1].split(' ').map(Number) // 모든 풍선의 위치 정보 입력받기
  let result = 0
  let arrow = new Array(1000001).fill(0) // 각 높이에 화살이 몇 개 있는지

  for (let x of data) {
    // 해당 높이에 화살이 있다면
    if (arrow[x] > 0) {
      arrow[x] -= 1
      arrow[x - 1] += 1
    }
    // 해당 높이에 화살이 없다면
    else {
      arrow[x - 1] += 1
      result += 1 // 화살 쏘기
    }
  }

  console.log(result)
  process.exit()
})
