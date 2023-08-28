/** https://school.programmers.co.kr/learn/courses/30/lessons/42839
 * 한자리 숫자가 적힌 종이 조각이 흩어져있습니다.
 * 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
 *
 * @param {*} numbers 각 종이 조각에 적힌 숫자가 적힌 문자열
 * @returns 종이 조각으로 만들 수 있는 소수가 몇 개인지
 */
function solution(numbers) {
  // 1. 숫자 리스트(numbers)를 모두 쪼개어 종이 조각으로 만든다.
  const numberList = numbers.split('').reduce((prev, cur) => {
    prev.push(['', cur])
    return prev
  }, [])

  // 2. 종이 조각들로 만들 수 있는 모든 숫자를 만든다.
  const primeNumbers = makeNumbers(numberList)

  // 4. 소수인 숫자들의 개수를 반환한다.
  return primeNumbers.size
}

function makeNumbers(list, checkedIndices = [], numbers = [], primeNumbers = new Set()) {
  if (list.length === checkedIndices.length) {
    const number = parseInt(numbers.join(''))
    // 3. 만들어진 숫자 중 소수인 경우만 따로 정리한다.
    if (checkPrimeNumber(number)) {
      primeNumbers.add(number)
    }
    return primeNumbers
  }

  for (let i = 0; i < list.length; i++) {
    if (!checkedIndices.includes(i)) {
      checkedIndices.push(i)
      for (let j = 0; j < 2; j++) {
        numbers.push(list[i][j])
        primeNumbers = makeNumbers(list, checkedIndices, numbers, primeNumbers)
        numbers.pop()
      }
      checkedIndices.pop()
    }
  }

  return primeNumbers
}

function checkPrimeNumber(number) {
  if (number === 0 || number === 1 || isNaN(number)) {
    return false
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

console.log(solution('17')) // 3,   [1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.
console.log(solution('011')) // 2,  [0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.
