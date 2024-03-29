/*** 삽입 정렬(Insertion Sort)
 * 각 수(데이터)를 적절한 위치에 삽입하는 정렬 기법
 * 매 단계에서 현재 처리중인 원소가 삽입될 위치를 찾기위해 약 𝑁번의 연산이 필요
 * 결과적으로 약 𝑁개의 단계를 거친다는점에서 최악의 경우 𝑂(𝑁^2)의 시간복잡도
 *
 * 1. 각 단계에서 현재 원소가 삽입될 위치를 찾는다.
 * 2. 적절한위치에 도달할 때까지 반복적으로 왼쪽으로 이동한다.
 * cf. 삽입정렬을 수행할때는 처음에 첫 번째 원소는 정렬이 되어있다고 고려
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j부터 1까지 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        // 한 칸씩 왼쪽으로 이동 // 스와프(swap)
        let temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      } else {
        // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤 break;
      }
    }
  }
}
