/** 세수정렬
 * @copyight https://www.acmicpc.net/problem/2752
 * 동규는 세수를 하다가 정렬이 하고싶어졌다.
 * 숫자 세 개를 생각한 뒤에, 이를 오름차순으로 정렬하고 싶어 졌다.
 * 숫자 세 개가 주어졌을 때, 가장 작은 수, 그 다음 수, 가장 큰 수를 출력하는 프로그램
 *
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
