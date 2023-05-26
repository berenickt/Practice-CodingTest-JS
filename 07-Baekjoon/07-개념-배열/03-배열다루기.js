/***
 * JavaScript의 배열은 `동적 배열`이다.
 * 배열이 생성된 이후에도 배열의 크기를 임의로 변경할 수 있다.
 * push() 메서드를 통해 배열의 가장 뒤쪽에 새로운 원소를 추가할 수 있다
 */

let arr = [5, 6, 7, 8, 9]

arr.length = 8
arr[7] = 3
arr.push(1)

for (let x of arr) {
  console.log(x)
}

// 5
// 6
// 7
// 8
// 9
// undefined
// undefined
// 3
// 1
