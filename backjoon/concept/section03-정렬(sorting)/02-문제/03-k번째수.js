/*** https://www.acmicpc.net/problem/11004
 * 수 N개 A1, A2, ..., AN이 주어진다. A를 오름차순 정렬했을 때,
 * 앞에서부터 K번째 있는 수를 구하는 프로그램
 *
 * A를 정렬했을 때, 앞에서부터 K번째 있는 수를 출력
 *
 * [cf.]
 * 첫째 줄에 N(1 ≤ N ≤ 5,000,000)과 K (1 ≤ K ≤ N)이 주어진다.
 * 둘째에는 A1, A2, ..., AN 이 주어짐
 *
 * sort() 메서드를 이용해 해결할 수 있다.
 * JS의 경우 원하는 기준에 따라서 객체에 대한 정렬을 수행하는 기능을 제공한다.
 * JS에서 제공하는 sort()는 시간 복잡도 𝑂(𝑁𝑙𝑜𝑔𝑁)을 보장한다.
 * 따라서, 본 문제에서는 𝑁의 최대 크기가 500만이라는 점에서 sort()로 문제를 해결할 수 있다.
 * 본문제는 시간복잡도 𝑂(𝑁^2)의 정렬 알고리즘으로는 시간초과를 받는다.
 */
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [n, k] = input[0].split(' ').map(Number)
let arr = input[1].split(' ').map(Number)

// 오름차순 정렬 수행
arr.sort((a, b) => a - b)

// 앞에서부터 K번째 수를 출력
console.log(arr[k - 1])
