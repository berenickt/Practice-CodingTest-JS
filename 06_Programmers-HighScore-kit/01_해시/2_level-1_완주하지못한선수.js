/** 풀이, https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * 수많은 마라톤 선수들이 마라톤에 참여하였습니다.
 * 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
 * @param {*} participant 참가자 배열
 * @param {*} completion 완주자 배열
 * @returns 완주하지 못한 참가자
 *
 * 푸는 방법
 * - participant에는 있고, completion에는 없는 한 명을 찾기
 * - 푸는 방법은 2가지
 * -- sort로도 해결할 수 있지만 sort를 사용하면 O(NlogN) 시간이 걸리는 반면,
 * -- 해시(Map)로 풀면 O(N) 시간이 걸림
 *
 * 해쉬 풀이
 * 1. Hash map을 만들기 ( participant )
 * 2. Hash map을 뺀다 ( completion )
 * 3. valur가 0이 아닌 마지막 주자를 찾는다.
 */
function solution(participant, completion) {
  const hash = new Map();

  // 동명이인이 있을 수 있기 때문에
  // 참가자 hash에 ([key: 참가자 이름], [(value: 이미 추가한 key가 있다면 해당 값에 +1 아니면 0) + 1])
  // 완주한 선수의 value는 0, 완주하지 못한 선수의 value는 0보다 큰 값을 가짐
  participant.forEach(name => hash.set(name, (hash.get(name) || 0) + 1));
  completion.forEach(name => hash.set(name, (hash.get(name) || 0) - 1));

  // hash변수에 담겨있는 Map을 순회하면서 value가 0보다 큰 key(참가자)를 걸러내면 해당 key(참가자)가 완주하지 못한 선수로 판별
  for (const [name, value] of hash) {
    if (value) return name;
  }
}
console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // "leo"
console.log(solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])); // "vinko"
console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])); // "mislav"
