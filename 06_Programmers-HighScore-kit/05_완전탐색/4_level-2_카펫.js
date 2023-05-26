/** https://school.programmers.co.kr/learn/courses/30/lessons/42842
 * Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고,
 * 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
 *
 * Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만,
 * 전체 카펫의 크기는 기억하지 못했습니다.
 *
 * @param {*} brown Leo가 본 카펫에서 갈색 격자의 수
 * @param {*} yellow Leo가 본 카펫에서 노란색 격자의 수
 * @returns 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return
 * cf. 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
 *
 * [풀이]
 * brown 블록과 yellow 블록의 규칙을 찾는게 우선
 * 1. 전체 블록은 “가로 >= 세로”
 * 2. yellow 블록은 내키는대로 존재하고, brown은 그것을 1겹으로 둘러싸고 있음.
 * -- for문, while문, 재귀 중 아무거나 사용하여 완전탐색
 */
function solution(brown, yellow) {
  const sum = brown + yellow; // 12

  // 카펫의 최소높이는 3부터 (위아래 갈색, 가운데가 노란색이라서)
  for (let height = 3; height <= brown; height++) {
    // 임의의 높이로 나눌때 나머지가 없을경우 (e.g. sum : 12면 -> height : 3, 4, 6 -> weight : 4, 3, 2 )
    if (sum % height === 0) {
      let weight = sum / height;

      // 테두리를 제외한 길이를 구해야하기 때문에 각각 -2(위아래, 좌우) 해준 뒤, 곱셈한 결과가 yellow와 같다면,
      // 해당 높이와 길이 리턴
      if ((height - 2) * (weight - 2) === yellow) {
        return [weight, height];
      }
    }
  }
}

console.log(solution(10, 2)); // [ 4, 3 ]
console.log(solution(8, 1)); // [ 3, 3 ]
console.log(solution(24, 24)); // [ 8, 6 ]
