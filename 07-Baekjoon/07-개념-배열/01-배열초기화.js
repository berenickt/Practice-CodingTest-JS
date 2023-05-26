/*** JS 배열 초기화
 * 1. 대괄호 사용하기
 * 2. Array() 사용하기
 */
// **** 대괄호 사용하기
let arr = [];

arr.push(7);
arr.push(8);
arr.push(9);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 7 8 9
}

// **** Array() 사용하기
let arr2 = new Array();

arr2.push(7);
arr2.push(8);
arr2.push(9);

for (let i = 0; i < arr2.length; i++) {
  console.log(arr[i]); // 7 8 9
}

// **** JavaScript의 배열은 일반적인 변수 외에도 객체를 담을 수도 있다.
let arr3 = ['Hello', 777, true];

console.log(arr3); // [ 'Hello', 777, true ]

// **** 임의의 크기를 가지는 배열 초기화
// 원하는 값을 직접 입력하여 초기화
let arr4 = [0, 1, 2, 3, 4];
console.log(arr4); // [ 0, 1, 2, 3, 4 ]

// 하나의 값으로 초기화
let arr5 = Array.from({ length: 5 }, () => 7);
console.log(arr5); // [ 7, 7, 7, 7, 7 ]
