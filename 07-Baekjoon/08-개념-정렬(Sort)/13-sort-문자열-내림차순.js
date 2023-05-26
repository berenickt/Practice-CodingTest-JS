/***
 * 문자열에 대하여 내림차순 정렬
 */
let arr = ['fineapple', 'banana', 'durian', 'apple', 'carrot'];
function compare(a, b) {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
}
arr.sort(compare);
console.log(arr); // [ 'fineapple', 'durian', 'carrot', 'banana', 'apple' ]
