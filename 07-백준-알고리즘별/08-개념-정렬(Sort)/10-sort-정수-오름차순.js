/***
 * 정수에 대한 오름차순 정렬
 */
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];
function compare(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}
arr.sort(compare);
// console.log(arr); // [1, 2, 3, 5, 7, 8, 9, 15, 21]

/*** 정수에 대한 오름차순 정렬
 * a가 b보다 작을때, 반환값이 음수가 되어 a가 앞에 위치한다.
 */
let arr2 = [1, 8, 5, 9, 21, 3, 7, 2, 15];
function compare(a, b) {
  return a - b;
}
arr2.sort(compare);
// console.log(arr2); // [1, 2, 3, 5, 7, 8, 9, 15, 21]

/*** 정수에 대한 오름차순 정렬
 * 비교함수를 한 줄에 정의하여 곧바로 적용할 수 있다.
 */
let arr3 = [1, 8, 5, 9, 21, 3, 7, 2, 15];
arr3.sort((a, b) => a - b);
// console.log(arr3); // [1, 2, 3, 5, 7, 8, 9, 15, 21]
