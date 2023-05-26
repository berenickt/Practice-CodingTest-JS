/*** https://github.com/ndb796/priorityqueuejs
 * index.js 소스 코드를 가져온 뒤에 다음과 같이 사용할 수 있다.
 */

// 최대힙(Max Heap)
let pq = new PriorityQueue((a, b) => a.cash - b.cash)

pq.enq({ cash: 250, name: 'Doohyun Kim' })
pq.enq({ cash: 300, name: 'Gildong Hong' })
pq.enq({ cash: 150, name: 'Minchul Han' })

console.log(pq.size()) // 3
console.log(pq.deq()) // {cash: 300, name: 'Gildong Hong'}
console.log(pq.peek()) // {cash: 250, name: 'Doohyun Kim'}
console.log(pq.size()) // 2

/*** https://github.com/ndb796/priorityqueuejs/blob/master/index.js
 * deq()  : Dequeues the top element of the priority queue. | 가장 우선순위가 높은거 뽑기
 * peek() : Peeks at the top element of the priority queue. | peek (살짝 엿보기, 훔쳐보기)
 */
