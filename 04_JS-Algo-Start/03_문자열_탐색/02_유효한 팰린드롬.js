/**
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 '팰린드롬'이라고 함
 * 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램
 *
 * cf. 회문문자열을 영어로 '펠린드롬'이라고 부름
 * cf. 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않음
 * cf. 알파벳 이외의 문자들의 무시
 * @param {*} s 정수 길이 100을 넘지 않는 공백이 없는 문자열
 * @returns
 */
function solution(s) {
  let answer = 'YES';

  //  **** 알파벳만 놔두기
  s = s.toLowerCase().replace(/[^a-z]/g, ''); // 소문자가 아닌것들은 빈문자로

  if (s.split('').reverse().join('') !== s) return 'NO';
  return answer;
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));
console.log(solution('found7, time: study; Yduts; emiUUUU, 7Dnuof'));
