/** https://school.programmers.co.kr/learn/courses/30/lessons/42746
 * @param {*} numbers 0 또는 양의 정수가 담긴 배열
 * @returns 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return
 */
function solution2(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return answer[0] === '0' ? '0' : answer;
}

console.log(solution([6, 10, 2])); // 6210
// 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210
console.log(solution([3, 30, 34, 5, 9])); // 9534330

/*** sort((a, b) => (a - b))
 * 0보다 크면 오름차순으로 정렬,
 * 0보다 작으면 내림차순으로 정렬,
 * 0이면 변동없음
 */
