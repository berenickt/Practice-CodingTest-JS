/** https://school.programmers.co.kr/learn/courses/30/lessons/42748
 * @param {*} array 숫자형 배열
 * @param {*} commands 배열 array, [i, j, k]를 원소로 가진 2차원 배열
 * @returns 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수
 *
 * e.g. array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
 * array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
 * 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
 * 2에서 나온 배열의 3번째 숫자는 5입니다.
 */
function solution(array, commands) {
  return commands.map(element => {
    array.slice(element[0] - 1, element[1]).sort((a, b) => a - b)[element[2] - 1];
  });
}

// prettier-ignore
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])); // [ 5, 6, 3 ]
// [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬, [2, 3, 5, 6]의 세 번째 숫자는 5
// [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬, [6]의 첫 번째 숫자는 6
// [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3
