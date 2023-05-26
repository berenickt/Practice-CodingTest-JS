/** 풀이, https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * 수많은 마라톤 선수들이 마라톤에 참여하였습니다.
 * 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
 * @param {*} participant 참가자 배열
 * @param {*} completion 완주자 배열
 * @returns 완주하지 못한 참가자
 *
 * 풀이
 * - participant에는 있고, completion에는 없는 한 명을 찾기
 * - 푸는 방법은 2가지
 * -- sort로도 해결할 수 있지만 sort를 사용하면 O(NlogN) 시간이 걸리는 반면,
 * -- 해시(Map)로 풀면 O(N) 시간이 걸림
 *
 * sort 풀이
 * 1. 두 배열을 sort()
 * 2. 순회하면서 다른 1명을 찾기
 */
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  let i = 0;
  while (1) {
    if (participant[i] !== completion[i]) return participant[i];
    i++;
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // "leo"
console.log(solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])); // "vinko"
console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])); // "mislav"
