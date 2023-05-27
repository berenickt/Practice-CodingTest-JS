/*** 백트래킹이란?
 * 일반적으로 그래프/트리의 모든 원소를 완전 탐색하기 위한 목적으로 사용할 수 있다.
 * 추후에 공부할 DFS와의 차이점은 다음과 같다.
 * 1) DFS는 일반적으로 완전 탐색 목적으로, 재귀 함수를 이용해 구현한다.
 * 2) 백트래킹도 재귀 함수를 이용해 구현하는 것이 일반적이지만, 단순히 완전 탐색하는 것이 아니라
 *    조건에 따라서 유망한 노드로 이동한다
 */

/***
 * 그래프를 표현하는 2가지 방식은 다음과 같다.
 * 1) 인접 행렬
 * 2) 인접 리스트
 */

// **** 백트래킹의 기본 형태
// function recursive() {
// 	if (종료 조건을 만족한다면) {
// 		처리;
// 	}
// 	for (자식 노드를 하나씩 확인하며) {
// 		if (임의의 조건을 만족한다면) {
// 			자식 노드 방문 처리;
// 			재귀 함수 recursive() 호출;
// 			자식 노드 방문 처리 해제;
// 		}
// 	}
// }
