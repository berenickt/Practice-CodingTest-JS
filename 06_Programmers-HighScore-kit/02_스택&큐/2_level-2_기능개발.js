/** https://school.programmers.co.kr/learn/courses/30/lessons/42586
 * 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다.
 * 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
 *
 * 또, 각 기능의 개발속도는 모두 다르기 때문에 `뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발`될 수 있고,
 * 이때 `뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포`됩니다.
 *
 * @param {*} progresses 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열
 * @param {*} speeds 각 작업의 개발 속도가 적힌 정수 배열
 * @returns 각 배포마다 몇 개의 기능이 배포되는지
 *
 * cf. 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다.
 * e.g. 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.
 */
function solution(progresses, speeds) {
  const answer = []

  // **** 작업이 며칠에 걸쳐 완료되는지 알려면, 100% 완료 기준으로 '(100 - 진도) / 속도'를 이용
  // e.g. 개발 진도(progresses) 30의 개발속도(speeds) 30을 예시로 하면 ((100-30)/30)의 값은 2.3333...
  // 개발 기간이 2.3일이면 최소 3일이 필요하므로 올림(ceil)
  const days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]))
  // console.log(days); // [ 7일, 3일, 9일 ]
  let day = 1 // 최소한 작업에 필요한 일수 1일이라서 1로 초기화
  let maxDay = days[0] // 최대 많이 걸리는 일 수는 비교하면서 counting해야되서 첫번째 값으로 초기화

  // days를 순회, 1부터 순회하는 이유는 0은 위에서 초기값으로 줬기 때문
  for (let i = 1; i < days.length; i++) {
    // 순회한 날 <= 최대 일수이면, 날짜++
    if (days[i] <= maxDay) day++
    // 순회한 날 > 최대일수면,
    else {
      maxDay = days[i] // 그 순회한 날을 최대일수로 할당
      answer.push(day)
      day = 1 // 다시 counting하게끔 1로 초기화
    }
  }

  answer.push(day)

  return answer
}

console.log(solution2([93, 30, 55], [1, 30, 5])) // [ 2, 1 ] | 7일쨰 2개의 기능, 9일째 1개의 기능
// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [ 1, 3, 2 ]
