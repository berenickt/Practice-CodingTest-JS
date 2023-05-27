// ****  4행 5열의 빈 2차원 배열 생성
let arr = Array.from(Array(4), () => new Array(5))
// console.log(arr);
// [
//   [ <5 empty items> ],
//   [ <5 empty items> ],
//   [ <5 empty items> ],
//   [ <5 empty items> ]
// ]

// **** 반복문을 이용해 배열 초기화
let arr2 = new Array(3)

for (let i = 0; i < arr2.length; i++) {
  arr2[i] = Array.from({ length: 4 }, (undefined, j) => i * 4 + j)
}

// console.log(arr2); // [ [ 0, 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9, 10, 11 ] ]

// **** 반복문을 이용해 배열 초기화
let arr3 = new Array(3)
for (let i = 0; i < arr3.length; i++) {
  arr3[i] = Array.from({ length: 4 }, (undefined, j) => i * 4 + j)
}
console.log(arr3) // [ [ 0, 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9, 10, 11 ] ]
