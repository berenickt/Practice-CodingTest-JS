/***
 * 대소문자를 구분하지 않도록 toUpperCase() 메서드를 사용
 */
let arr = ['fineapple', 'Banana', 'durian', 'Apple', 'carrot']
function compare(a, b) {
  let upperCaseA = a.toUpperCase()
  let upperCaseB = b.toUpperCase()
  if (upperCaseA < upperCaseB) return -1
  else if (upperCaseA > upperCaseB) return 1
  else return 0
}
arr.sort(compare)
console.log(arr) // [ 'Apple', 'Banana', 'carrot', 'durian', 'fineapple' ]
