// 정수 N을 입력 받기
n = 4
// 모든 식량 정보 입력받기
array = [1, 3, 1, 5]

// 앞서 계산된 결과를 저장하기 위한 DP 테이블 초기화
d = new Array(100).fill(0)

// 다이나믹 프로그래밍(Dynamic Programming) 진행 (보텀업)
d[0] = array[0]
d[1] = Math.max(array[0], array[1])
for (let i = 2; i < n; i++) {
  d[i] = Math.max(d[i - 1], d[i - 2] + array[i])
}

// 계산된 결과 출력
console.log(d[n - 1])
