/*** indexOf()
 * 특정한 값을 가지는 원소의 첫째 인덱스를 반환, 𝑂(𝑁)
 * 만약, 해당하는 원소가 없는 경우 -1을 반환
 */
let arr = [7, 3, 5, 6, 6, 2, 1];

console.log(arr.indexOf(5)); // 2
console.log(arr.indexOf(6)); // 3
console.log(arr.indexOf(8)); // -1
