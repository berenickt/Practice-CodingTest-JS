/**
 * 지도 정보가 N*N 격자판에 주어집니다.
 * 각 격자에는 그 지역의 높이가 쓰여있습니다.
 * 각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다.
 * 봉우리 지역이 몇 개 있는지 알아내는 프로그램
 *
 * cf. 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
 * cf. 만약 N=5 이고, 격자판의 숫자가 다음(그림 참고)과 같다면 봉우리의 개수는 10개
 * [5, 3, 7, 2, 3],
 * [3, 7, 1, 6, 1],
 * [7, 2, 5, 3, 4],
 * [4, 3, 6, 4, 1],
 * [8, 7, 3, 5, 2],
 *
 * @param {*} arr // 지도 정보가 들어있는 2차원 배열
 * @returns // 봉우리 갯수
 */
function solution(arr) {
  let answer = 0; // 봉우리 갯수
  let n = arr.length;

  // x, y 좌표를 기준으로 이동할 행, 열의 움직임(상, 우, 하, 좌)
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  // 2차원 배열을 순회
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1; // 봉우리인지 체크(1은 true)

      // 각각의 행열 기준으로 상, 우, 하, 좌를 순회
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        // **** 봉우리가 아닌 경우
        // 상, 우, 하, 좌로 이동한 방향(arr[nx][ny])이
        // 기준인 arr[i][j] 보다 크다면 봉우리가 아님
        if (
          // 이동하는 각각의 행, 열의 위치 이동이 2차원 배열을 벗어나지 않는동안
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      // flag(봉우리)가 true면
      if (flag) answer++;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
