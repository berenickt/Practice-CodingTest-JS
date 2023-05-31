/*** https://www.acmicpc.net/problem/1493
 * 세준이는 length × width × height 크기의 박스를 가지고 있다.
 * 그리고 세준이는 이 박스를 큐브를 이용해서 채우려고 한다.
 * 큐브는 정육면체 모양이며, 한 변의 길이는 2의 제곱꼴이다.
 * (e.g. 1x1x1, 2x2x2, 4x4x4, 8x8x8)
 *
 * 세준이가 가지고 있는 박스의 종류와 큐브의 종류와 개수가 주어졌을 때,
 * @returns 박스를 채우는데 필요한 큐브의 최소 개수
 *
 * [cf.]
 * 첫째 줄에 세 자연수 length, width, height가 주어진다.
 * 둘째 줄에 세준이가 가지고 있는 큐브의 종류의 개수 N이 주어진다.
 * 셋째 줄부터 총 N개의 줄에 큐브의 종류 A_i와 개수 B_i가 i가 증가하는 순서대로 주어짐
 *
 * [풀이]
 * 큐브의 길이, 너비, 높이는 항상 2의 제곱 형태를 보인다.
 * 큰 큐브는 항상 자기보다 작은 큐브로 채울 수 있다.
 * 결과적으로, 큰 큐브부터 차근차근 채워나가면 해결할 수 있다.
 * 그리디 알고리즘 유형의 대표적인 예시인 [거스름돈] 문제와 유사하다.
 *
 * 큰 큐브는 항상 자기보다 작은 큐브로 채울 수 있다.
 * 각 큐브를 몇 개 넣을 수 있는지 계산하기 위해 (2^i x 2^i x 2^i) 격자로 전체 박스를 나누어 확인한다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// x보다 작거나 같으면서 가장 가까운 2^i를 찾는 함수
function nearestSquare(x) {
  let i = 1
  while (2 ** i <= x) i += 1
  return i - 1
}

let length = Number(input[0].split(' ')[0])
let width = Number(input[0].split(' ')[1])
let height = Number(input[0].split(' ')[2])
let cubes = Array(20).fill(0)
let n = Number(input[1])

for (let i = 2; i <= n + 1; i++) {
  let a = Number(input[i].split(' ')[0])
  let b = Number(input[i].split(' ')[1])
  cubes[a] = b
}

let size = 19
size = nearestSquare(length)
size = Math.min(size, nearestSquare(width))
size = Math.min(size, nearestSquare(height))

let res = 0
let used = 0

for (let i = size; i >= 0; i--) {
  used *= 8 // 채널, 너비, 높이가 2씩 줄었으므로 큐브의 개수는 8배 증가
  cur = 2 ** i // 현재의 정육면체 큐브의 길이

  // 채워넣어야 할 큐브의 개수 계산
  let required =
    parseInt(length / cur) *
    parseInt(width / cur) * //
    parseInt(height / cur) *
    -used

  let usage = Math.min(required, cubes[i]) // 이번 단계에서 넣을 수 있는 큐브의 개수
  res += usage
  used += usage
}

if (used == length * width * height) console.log(res) // 박스를 가득 채운 경우
else console.log(-1) // 박스를 가득 채우지 못한 경우
