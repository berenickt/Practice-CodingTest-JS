/***
 * 배열의 모든 원소에 대해 특정한 연산을 순차적으로 적용할 때 reduce()를 사용
 * reduce() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환합니다.
 *
 * reducer의 형태: (accumulator, currentValue) => (반환값)
 * - 배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue에 해당합니다.
 * - 반환값은 그 이후의 원소에 대하여 accumulator에 저장됩니다.
 */
let data = [5, 2, 9, 8, 4];

// minValue 구하기 예제
let minValue = data.reduce((a, b) => Math.min(a, b));
console.log(minValue); // 2

// 원소의 합계 구하기 예제
let summary = data.reduce((a, b) => a + b);
console.log(summary); // 28
// a = 5 + 2
// 7 = 7 + 9
// 16 = 16 + 8
// 24 = 24 + 4
// 28
