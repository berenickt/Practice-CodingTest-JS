/*** 문자열 대한 오름차순 정렬
 * 별도로 비교 함수(compare function)을 사용하지 않으면, 유니코드 순으로 정렬된다.
 * 따라서 함수를 적용하지 않음으로써, 간단히 문자열 정렬을 수행할 수 있다.
 */
let arr = ['fineapple', 'banana', 'durian', 'apple', 'carrot'];
arr.sort();
console.log(arr); // [ 'apple', 'banana', 'carrot', 'durian', 'fineapple' ]
