/*** array.sort(compareFunction);
 * compareFunction은 정렬 기준을 정해주는 함수
 * 내림차순, 오름차순 등 구체적인 정렬 기준을 설정할 수 있다.
 */

/*** JavaScript 정렬 기준 함수(Compare Function)
 * JavaScript의 정렬 함수에서는 정렬 기준 함수가 사용된다.
 *
 * 두 개의 원소 a, b를 입력으로 받는다.
 * 1. 반환값이 0보다 작은 경우 -> a가 우선순위가 높아, 앞에 위치한다.
 * 2. 반환값이 0보다 큰 경우   -> b가 우선순위가 높아, 앞에 위치한다.
 * 3. 반환값이 0인 경우        -> a와 b의 순서를 변경하지 않는다.
 */

/*** 정렬 기준 함수(Compare Function) 참고 사항
 * 정렬 기준 함수를 사용하지 않으면 각 원소는 문자열로 취급된다.
 * 유니코드 값 순서대로 정렬된다.
 * 따라서, 항상 정렬 기준 함수를 명시하는 습관을 들일 필요가 있다.
 */

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
console.log(arr3); // [1, 2, 3, 5, 7, 8, 9, 15, 21]
