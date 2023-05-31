/*** https://www.acmicpc.net/problem/1931
 * 한 개의 회의실이 있는데 이를 사용하고자 하는 N개의 회의에 대하여 회의실 사용표를 만들려고 한다.
 * 각 회의 I에 대해 시작시간과 끝나는 시간이 주어져 있고,
 * @returns 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 회의의 최대 개수
 *
 * 단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.
 * 회의의 시작시간과 끝나는 시간이 같을 수도 있다. 이 경우에는 시작하자마자 끝나는 것으로 생각하면 된다.
 *
 * [cf.]
 * 첫째 줄에 회의의 수 N
 * 둘째 줄부터 N+1 줄까지 각 회의의 정보가 주어지는데 이것은 공백을 사이에 두고 회의의 시작시간과 끝나는 시간이 주어짐
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0]) // 회의의 개수
let arr = [] // 각 회의에 대한 (시작 시점, 종료 시점) 입력받기

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').map(Number))
}

// (1) 종료 시점 (2) 시작 시점을 우선순위로 오름차순 정렬
arr.sort((a, b) => {
  if (a[1] != b[1]) return a[1] - b[1]
  else return a[0] - b[0]
})

let count = 1
let current = 0 // 첫 번째 회의부터 확인

for (let i = 1; i < n; i++) {
  if (arr[current][1] <= arr[i][0]) {
    // 현재 회의가 끝난 이후에 회의가 시작되는 경우 카운트
    current = i
    count += 1
  }
}

console.log(count)
