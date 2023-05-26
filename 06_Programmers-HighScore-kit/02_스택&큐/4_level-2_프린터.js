class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // 넣기
  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // 빼기
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  peek() {
    return this.head.value;
  }
}

/** https://school.programmers.co.kr/learn/courses/30/lessons/42587
 * 일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다.
 * 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다.
 * 이런 문제를 보완하기 위해 `중요도가 높은 문서를 먼저 인쇄하는 프린터`를 개발했습니다.
 *
 * 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.
 * 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
 * 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면
 *    J를 대기목록의 가장 마지막에 넣습니다.
 * 3. 그렇지 않으면 J를 인쇄합니다.
 *
 * e.g. 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고, 중요도가 2 1 3 2라면 C D A B 순으로 인쇄
 * 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다.
 * 위의 예에서 C는 1번째로, A는 3번째로 인쇄
 *
 * @param {*} priorities 현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열
 * @param {*} location 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지
 * @returns 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지
 */
function solution(priorities, location) {
  const queue = new Queue(); // 큐 생성

  // 대기목록만큼 순회
  for (let i = 0; i < priorities.length; i += 1) {
    // 각각의 우선순위와 인덱스
    queue.enqueue([priorities[i], i]);
  }

  // 내림차순 정렬
  priorities.sort((a, b) => b - a); // 첫번쨰 예제의 경우 [ 3, 2, 2, 1 ]

  let count = 0; // 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지

  // 큐가 비어있을 떄까지 반복
  while (true) {
    const currentValue = queue.peek(); // 가장 앞에 노드 반환

    // 지금까지 수행한 우선순위보다 작은 경우, 그 값을 맨 뒤에 넣기
    if (currentValue[0] < priorities[count]) queue.enqueue(queue.dequeue());
    // 지금까지 수행한 우선순위가 더 큰 경우, 바로 dequeue
    else {
      const value = queue.dequeue();
      count += 1;

      // 뽑은 문서가 내가 찾은 문서라면
      if (location === value[1]) return count;
    }
  }
}

function solution2(priorities, location) {
  let answer = 0;
  let queue = [];
  let maxDocument = Math.max(...priorities);

  for (const index in priorities) queue.push(index);

  while (priorities.length) {
    // 우선순위가 높은 문서보다 작다면, 뒤로 보내기
    if (priorities[0] < maxDocument) {
      priorities.push(priorities.shift());
      queue.push(queue.shift());
    }
    // 우선순위가 같다면, 맨 앞의 문서를 빼서
    else {
      answer += 1;
      priorities.shift();

      // (맨 앞의 위치 === 요청문서위치)면, 정답
      if (queue.shift() == location) return answer;
      maxDocument = Math.max(...priorities);
    }
  }
}

// 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요
console.log(solution2([2, 1, 3, 2], 2)); // 1
// 2번 위치, 즉 [2, 1, 3, 2]에서 3번이 언제 끝나는지, 2번 위치의 3이 우선순위가 가장 높으니 1

console.log(solution2([1, 1, 9, 1, 1, 1], 0)); // 5
// 0번 위치, 맨 앞의 1이 언제 끝나는지, 9, 1, 1, 1, 1으로 5번째
