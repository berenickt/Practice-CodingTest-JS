/** 연결리스트로 큐
 * 연결 리스트로 큐를 구현할 떄는 2개의 포인터를 가진다.
 * - 머리(head) : 남아있는 원소 중 가장 먼저 들어온 데이터를 가리키는 포인터
 * - 꼬리(tail) : 남아있는 원소 중 가장 마지막에 들어온 데이터를 가리키는 포인터
 *
 * 삽입할 때는 꼬리 위치에 데이터를 넣고, 삭제할 때는 머리 위치에 데이터를 꺼낸다.
 * JS에서는 배열보다는 연결리스트를 사용,
 * Dictionary 자료형을 이용해 큐를 구현
 */
class Queue {
  constructor() {
    this.items = {}
    this.headIndex = 0
    this.tailIndex = 0
  }
  enqueue(item) {
    this.items[this.tailIndex] = item
    this.tailIndex++
  }
  dequeue() {
    const item = this.items[this.headIndex]
    delete this.items[this.headIndex]
    this.headIndex++
    return item
  }
  peek() {
    return this.items[this.headIndex]
  }
  getLength() {
    return this.tailIndex - this.headIndex
  }
}

// 구현된 큐(Queue) 라이브러리 사용
queue = new Queue()

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) // - 삭제() - 삽입(1) - 삽입(4) - 삭제() queue.enqueue(5);
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(7)
queue.dequeue()
queue.enqueue(1)
queue.enqueue(4)
queue.dequeue()

// 먼저 들어온 순서대로 출력
while (queue.getLength() != 0) {
  console.log(queue.dequeue())
}
