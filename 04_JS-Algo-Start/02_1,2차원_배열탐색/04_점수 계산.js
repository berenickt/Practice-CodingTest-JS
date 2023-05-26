/**
 * 여러 개의 OX 문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우에는
 * 가산점을 주기 위해서 다음과 같이 점수 계산을 하기로 하였다.
 *
 * 1번 문제가 맞는 경우에는 1점으로 계산
 * 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산
 * 연속으로 문제의 답이 맞는 경 두 번째 문제는 2점, 세 번째 문제는 3점, .., K번째 문제는 K점으로 계산
 * 틀린 문제는 0점으로 계산
 *
 * e.g. 아래와 같이 10 개의 OX 문제에서 답이 맞은 문제의 경우에는 1로 표시하고,
 * 틀린 경우에는 0으로 표시하였을 때, 점수 계산은 아래 표와 같이 계산되어 총 점수는 1+1+2+3+1+2 = 10점
 * | 채점 | 1    | 0    | 1    | 1    | 1    | 0    | 0    | 1    | 1    | 0    |
 * | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
 * | 점수 | 1    | 0    | 1    | 2    | 3    | 0    | 0    | 1    | 2    | 0    |
 * @param {*} arr 문제를 맞은 순서 배열
 * @returns
 */
function solution(arr) {
  let answer = 0 // 총 누적점수
  let cnt = 0 // 1을 만났을 떄 누적점수

  for (let x of arr) {
    if (x === 1) {
      cnt++
      answer += cnt
    } else cnt = 0
  }

  return answer
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]
console.log(solution(arr))
