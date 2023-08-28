/** https://school.programmers.co.kr/learn/courses/30/lessons/42628
 * 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.
 * - I 숫자	: 큐에 주어진 숫자를 삽입
 * - D 1	  : 큐에서 최대값을 삭제
 * - D -1	  : 큐에서 최소값을 삭제
 *
 * @param {*} operations 이중 우선순위 큐가 할 연산
 * @returns 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]
 */
function solution(operations) {
  const answer = [] // 정답담을 배열
  const numbers = [] // 큐 배열

  while (operations.length) {
    let out = operations.shift() // 맨 앞에서 한 개씩 꺼내기

    switch (out) {
      // 꺼낸 값이 큐에서 최대값 삭제라면, 뒤에서 삭제
      case 'D 1':
        if (numbers.length) numbers.pop()
        break
      // 꺼낸 값이 큐에서 최소값 삭제라면, 앞에서 삭제
      case 'D -1':
        if (numbers.length) numbers.shift()
        break
      // 큐에 숫자를 집어넣는 거라면, 길이만큼 문자열을 잘라서 넣고, 오름차순
      default:
        numbers.push(parseInt(out.slice(2, out.length)))
        numbers.sort((a, b) => a - b)
        break
    }
  }

  // **** 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]
  if (numbers.length) answer.push(numbers.pop())
  else answer.push(0)
  if (numbers.length) answer.push(numbers.shift())
  else answer.push(0)
  return answer
}

console.log(solution(['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1'])) // [ 0, 0 ]
// 16과 -5643을 삽입합니다.
// 최소값을 삭제합니다. -5643이 삭제되고 16이 남아있습니다.
// 최대값을 삭제합니다. 16이 삭제되고 이중 우선순위 큐는 비어있습니다.
// 우선순위 큐가 비어있으므로 최대값 삭제 연산이 무시됩니다.
// 123을 삽입합니다.
// 최솟값을 삭제합니다. 123이 삭제되고 이중 우선순위 큐는 비어있습니다.

console.log(solution(['I -45', 'I 653', 'D 1', 'I -642', 'I 45', 'I 97', 'D 1', 'D -1', 'I 333'])) // [ 333, -45 ]
