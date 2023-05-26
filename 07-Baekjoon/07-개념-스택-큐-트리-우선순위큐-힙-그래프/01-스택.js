/*** JavaScript에서 스택을 구현 - 배열 자료형
 * push() 메서드 : 마지막 위치에 원소를 삽입하며, 시간 복잡도는 𝑂 1
 * pop() 메서드  : 마지막 위치에서 원소를 추출하며, 시간 복잡도는 𝑂 1
 */
let stack = []

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제()
stack.push(5)
stack.push(2)
stack.push(3)
stack.push(7)
stack.pop()
stack.push(1)
stack.push(4)
stack.pop()

let reversed = stack.slice().reverse()
console.log(reversed) // [ 1, 3, 2, 5 ] | 최상단 원소부터 출력
console.log(stack) // [ 5, 2, 3, 1 ]
