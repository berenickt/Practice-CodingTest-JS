/** https://school.programmers.co.kr/learn/courses/30/lessons/42579
 * 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다.
 * 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.
 * 1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
 * 2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
 * 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
 *
 * @param {*} genres 노래의 장르를 나타내는 문자열 배열
 * @param {*} plays 노래별 재생 횟수를 나타내는 정수 배열
 * @returns 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return
 *
 * 풀이
 * 1. 같은 장르 별로 묶기
 * 2. 각 장르별로 묶인 노래들을 재생 순으로 정렬
 * 3. 노래를 장르별로 2개씩 자르기
 */
function solution(genres, plays) {
  let answer = [];
  let hash = new Map();
  // solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]);

  // **** 각 장르별로 노래 정보 [인덱스, 재생 횟수] 목록과 총 재생횟수 정보를 모으기
  for (let i = 0; i < genres.length; i++) {
    let obj = hash.get(genres[i]) || { musics: [], sum: 0 };

    obj.musics.push([i, plays[i]]);
    obj.sum += plays[i];
    hash.set(genres[i], obj);
  }

  // **** 각 장르별로 재생 횟수를 sort
  let chart = [];
  for (let [genre, info] of hash) {
    chart.push([genre, info.musics, info.sum]);
  }
  chart.sort((a, b) => b[2] - a[2]);

  // **** 각 장르 내에서 노래들을 순서대로 sort
  for (let genre of chart) {
    genre[1].sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return b[1] - a[1];
    });
    // sort한 노래를 각 두 개씩 answer에 모으자!
    let idx = 0;
    while (genre[1].length > idx && idx < 2) {
      answer.push(genre[1][idx][0]);
      idx++;
    }
  }

  return answer;
}

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500])); // [ 4, 1, 3, 0 ]
