/***
 * 성적점수가 높은 순으로 학생 데이터를 정렬
 */
let arr = [
  { name: '홍길동', score: 90 },
  { name: '김철수', score: 85 },
  { name: '박영희', score: 97 },
]
function compare(a, b) {
  return b.score - a.score
}
arr.sort(compare)
console.log(arr)
// [
//   { name: '박영희', score: 97 },
//   { name: '홍길동', score: 90 },
//   { name: '김철수', score: 85 }
// ]
