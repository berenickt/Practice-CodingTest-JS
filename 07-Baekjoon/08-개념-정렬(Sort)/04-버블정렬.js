function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        // 내림차순 예시
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

/* 1) 버블 정렬의 수행 시간 측정 */
// 0부터 999까지의 정수 30000개를 담은 배열 생성
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));
// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
bubbleSort(arr);
endTime = new Date().getTime();
// 시간차 출력
console.log('버블 정렬 소요 시간:', endTime - startTime, 'ms.');

/* 2) 이미 정렬된 배열에 대한 버블 정렬의 수행 시간 측정 */ // 값이 7인 정수 30000개를 담은 배열 생성
arr = Array.from({ length: 30000 }, () => 7);
// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
bubbleSort(arr);
endTime = new Date().getTime();
// 시간차 출력
console.log('정렬된 배열에 대한 버블 정렬 소요 시간:', endTime - startTime, 'ms.');
