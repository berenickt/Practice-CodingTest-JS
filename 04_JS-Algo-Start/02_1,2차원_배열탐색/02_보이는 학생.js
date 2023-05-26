/**
 * 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다.
 * 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때,
 * 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램
 * cf. 앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.
 * @param {*} arr 학생들의 키가 숫자로 들어있는 배열
 * @returns
 */
function solution(arr) {
  let answer = 1;
  let max = arr[0]; // 맨앞의 값으로 초기화

  // ** 2번쨰부터 max보다 크면, 보인다는 의미
  // 1. 그 보이는 횟수를 카운트하고,
  // 2. 보인 학생의 키가 가장 크다는 소리이므로, 보인 학생을 max로
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
