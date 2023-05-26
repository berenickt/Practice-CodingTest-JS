/** https://school.programmers.co.kr/learn/courses/30/lessons/12906
 * @param {*} arr 0부터 9까지로 이루어진 배열
 * @returns arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거
 * cf. 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지
 */
function solution(arr) {
  const answer = []

  for (let i = 0; i < arr.length; i++) {
    // 앞 뒤 숫자가 다르면, 정답배열.push
    if (arr[i] !== arr[i + 1]) answer.push(arr[i])
  }
  return answer
}

function solution2(arr) {
  return arr.filter((element, index) => element !== arr[index + 1])
}

console.log(solution2([1, 1, 3, 3, 0, 1, 1])) // [ 1, 3, 0, 1 ]
console.log(solution([4, 4, 4, 3, 3])) // [ 4, 3 ]
