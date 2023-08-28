/**
 * 정렬된 배열에서 값이 특정 범위에 속하는 원소의 개수를 계산
 * 앞서 정의한 𝑙𝑜𝑤𝑒𝑟𝐵𝑜𝑢𝑛𝑑() 함수와 𝑢𝑝𝑝𝑒𝑟𝐵𝑜𝑢𝑛𝑑() 함수를 이용해 구현
 * @param {*} arr
 * @param {*} leftValue
 * @param {*} rightValue
 * @returns
 *
 * 값이 [leftValue, rightValue]인 데이터의 개수를 반환하는 함수
 */
function countByRange(arr, leftValue, rightValue) {
  // 유의: lowerBound와 upperBound는 end 변수의 값을 배열의 길이로 설정
  let rightIndex = upperBound(arr, rightValue, 0, arr.length)
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length)
  return rightIndex - leftIndex
}

// 배열 선언
let arr = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9]
// 값이 4인 데이터 개수 출력
console.log(countByRange(arr, 4, 4))
// 값이 [-1, 3] 범위에 있는 데이터 개수 출력
console.log(countByRange(arr, -1, 3))
