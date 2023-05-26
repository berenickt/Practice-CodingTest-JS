/*** https://www.acmicpc.net/problem/2750
 * sort() 메서드를 이용해 해결할 수 있다.
 * 단순히 𝑁개의 수를 입력받아, 이를 오름차순 정렬한 결과를 반환할 수 있다.
 * 𝑁의값이 최대 1,000이므로, 시간복잡도 𝑂(𝑁^2)의 알고리즘을 사용할 수도 있다.
 */
function selectionSort(arr) {
  // 선택 정렬 함수
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++) if (arr[minIndex] > arr[j]) minIndex = j
    let temp = arr[i] // 스와프(swap)
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
}

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let n = Number(input[0])
let arr = []
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}
selectionSort(arr)
let answer = ''
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + '\n'
}
console.log(answer)
