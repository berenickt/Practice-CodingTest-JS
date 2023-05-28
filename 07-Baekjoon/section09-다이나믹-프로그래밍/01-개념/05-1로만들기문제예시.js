// 정수X를 입력받기
x = 26
// 앞서 계산된 결과를 저장하기 위한 DP 테이블 초기화
d = new Array(30001).fill(0)

// 다이나믹 프로그래밍(Dynamic Programming) 진행(보텀업)
for (leti = 2; i <= x; i++) {
  // 현재의 수에서1을 빼는 경우
  d[i] = d[i - 1] + 1
  // 현재의 수가2로 나누어 떨어지는 경우
  if (i % 2 == 0) d[i] = Math.min(d[i], d[parseInt(i / 2)] + 1)
  // 현재의 수가3으로 나누어 떨어지는 경우
  if (i % 3 == 0) d[i] = Math.min(d[i], d[parseInt(i / 3)] + 1)
  // 현재의 수가5로 나누어 떨어지는 경우
  if (i % 5 == 0) d[i] = Math.min(d[i], d[parseInt(i / 5)] + 1)
}
console.log(d[x])
