/**
 * 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면
 * 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.
 *
 * @param {*} s '(' 또는 ')' 로만 이루어진 문자열
 * @returns 문자열 s가 올바른 괄호이면 true, 아니면 false
 */
function solution(s) {
  const stack = [];

  // for of : 배열 순회
  for (const bracket of s) {
    // 여는 괄호일 경우
    if (bracket === '(') stack.push(bracket);
    // 닫는 괄호일 경우
    else {
      // 스택이 비어있는 경우
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  // 빈 배열이라면 true, 아니라면 false
  return stack.length === 0;
}

console.log(solution('()()')); // true
console.log(solution('(())()')); // true
console.log(solution(')()(')); // false
console.log(solution('(()(')); // false
