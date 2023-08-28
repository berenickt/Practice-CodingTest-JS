/*** 선택 정렬(Selection Sort)
 * 매 단계에서 가장 작은 원소를 선택해서 앞으로 보내는 정렬 방법
 * 앞으로 보내진 원소는 더 이상 위치가 변경되지 않는다.
 * 시간복잡도 𝑂(𝑁^2)로 비효율적인 정렬 알고리즘 중 하나
 *
 * 1. 각 단계에서 가장 작은 원소를 선택한다.
 * 2. 현재까지 처리되지 않은 원소들 중 가장 앞의 원소와 위치를 교체한다.
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    // 스와프(swap)
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
}
