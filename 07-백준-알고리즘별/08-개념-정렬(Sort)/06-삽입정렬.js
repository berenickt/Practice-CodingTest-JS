function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j부터 1까지 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        // 한 칸씩 왼쪽으로 이동 // 스와프(swap)
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤 break;
      }
    }
  }
}

/* 1) 삽입 정렬의 수행 시간 측정 */
// 0부터 999까지의 정수 30000개를 담은 배열 생성
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
insertionSort(arr);
endTime = new Date().getTime();

// 시간차 출력
console.log('삽입 정렬 소요 시간:', endTime - startTime, 'ms.');

/* 2) 이미 정렬된 배열에 대한 삽입 정렬의 수행 시간 측정 */ // 값이 7인 정수 30000개를 담은 배열 생성
arr = Array.from({ length: 30000 }, () => 7);

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
insertionSort(arr);
endTime = new Date().getTime();

// 시간차 출력
console.log('정렬된 배열에 대한 삽입 정렬 소요 시간:', endTime - startTime, 'ms.');
