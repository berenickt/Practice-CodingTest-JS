/*** https://www.acmicpc.net/problem/2752
 * sort() 메서드를 이용해 해결할 수 있다.
 * JavaScript의 경우 원하는 기준에 따라서 객체에 대한 정렬을 수행하는 기능을 제공한다.
 * 단순히 세 개의 수가 주어지므로, 이를 배열에 담아 정렬(sorting)을 수행한다.
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

let arr = input[0].split(' ').map(Number)
selectionSort(arr)

let answer = ''
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + ' '
}
console.log(answer)
