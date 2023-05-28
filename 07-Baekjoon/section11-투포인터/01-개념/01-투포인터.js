/*** 투 포인터 알고리즘
 * 투 포인터 알고리즘은 다음과 같다.
 * 리스트에 순차적으로 접근해야 할 때 두 개의 점의 위치를 기록하면서 처리하는 알고리즘을 의미
 * 흔히 2, 3, 4, 5, 6, 7번 학생을 지목해야 할 때 간단히 '2번부터 7번까지의 학생'이라고 부르곤 한다.
 * 리스트에 담긴 데이터에 순차적으로 접근해야 할 때는
 * 시작점과 끝점 2개의 점으로 접근할 데이터의 범위를 표현할 수 있다
 */

/*** 특정한 합을 가지는 부분 연속 수열 찾기
 * 𝑁 = 8개의 자연수로 구성된 수열이 있다.
 * 합이 𝑀 = 5인 부분 연속 수열의 개수를 구하여라.
 * 수행 시간 제한은 𝑂(𝑁)이다.
 */

/*** 특정한 합을 가지는 부분 연속 수열 찾기
 * 투 포인터를 활용하여 다음과 같은 알고리즘으로 문제를 해결할 수 있다.
 * 1.시작점(𝑠𝑡𝑎𝑟𝑡)과 끝점(𝑒𝑛𝑑)이 첫 번째 원소의 인덱스(0)를 가리키도록 한다.
 * 2.현재 부분 합이 𝑀과 같다면, 카운트한다.
 * 3.현재 부분 합이 𝑀보다 작거나 같다면, 𝑒𝑛𝑑를 1 증가시킨다.
 * 4.현재 부분 합이 𝑀보다 크다면, 𝑠𝑡𝑎𝑟𝑡를 1 증가시킨다.
 * 5.모든 경우를 확인할 때까지 2번부터 4번까지의 과정을 반복한다
 */
