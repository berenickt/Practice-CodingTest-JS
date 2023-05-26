/** https://school.programmers.co.kr/learn/courses/30/lessons/42747
 * H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다.
 * -- https://en.wikipedia.org/wiki/H-index
 * 위키백과에 따르면, H-Index는 다음과 같이 구합니다.
 *
 * 어떤 과학자가 발표한 논문 n편 중,
 * h번 이상 인용된 논문이 h편 이상이고, 나머지 논문이 h번 이하 인용되었다면, h의 최댓값이 이 과학자의 H-Index
 * @param {*} citations 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열
 * @returns 이 과학자의 H-Index
 *
 * [풀이] h번 이상 인용된 것이 h번째인 순간 찾기
 */
function solution(citations) {
  let answers = 0

  // 1. 논문 인용횟수 내림차순
  citations.sort((a, b) => b - a) // 6 5 3 1 0

  // 2. 인용횟수가 많은 논문 수(index) < cittations[index])면, 정답 경우 수++
  for (const index in citations) {
    if (index < citations[index]) {
      // console.log(index); // 0 1 2 - 해당 인용 횟수의 순위
      // console.log(citations[index]); // 6 5 3 -- 논문별 인용횟수
      answers++
    }
  }

  return answers
}

console.log(solution([3, 0, 6, 1, 5])) // 3
// 이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다.
// 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3
