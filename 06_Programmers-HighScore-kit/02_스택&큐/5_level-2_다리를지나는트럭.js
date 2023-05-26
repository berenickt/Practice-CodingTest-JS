/** https://school.programmers.co.kr/learn/courses/30/lessons/42583
 * 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다.
 * 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다.
 * 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며,
 * 다리는 weight 이하까지의 무게를 견딜 수 있습니다.
 * 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
 *
 * e.g. 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다.
 * 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
 * cf. 문제 링크 표 참조
 *
 * 따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.
 *
 * @param {*} bridgeLength 다리에 올라갈 수 있는 트럭 수
 * @param {*} weight 다리가 견딜 수 있는 무게
 * @param {*} truckWeights 트럭 별 무게
 * @returns 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지
 */
function solution(bridgeLength, weight, truckWeights) {
  let time = 0;

  // **** 다리 위에 올라갈 수 있는 트럭 수
  let NumOfTruckOnBridge = Array.from({ length: bridgeLength }, () => 0);
  // **** 다리가 최대로 견딜 수 있는 무게 === 다리 위 무게 합
  let sumOnBridge = 0;

  // **** 1초를 증가시키고, 맨 처음 트럭을 다리에 올린다.
  time++;
  NumOfTruckOnBridge.shift();
  sumOnBridge += truckWeights[0];
  NumOfTruckOnBridge.push(truckWeights.shift());

  // **** 대기 트럭 배열이 남아있거나, 다리 위에 올라간 트럭 배열이 남아있는 동안,
  while (sumOnBridge > 0) {
    // 시간이 1초 지났을 때,
    time++;

    // 다리 위에 올라갈 수 있는 트럭 수(큐)의 맨 앞을 꺼내고,
    sumOnBridge -= NumOfTruckOnBridge.shift();

    // ** 만약 다음 트럭의 무게를 더해도 다리가 버틸 수 있다면,
    if (truckWeights.length > 0 && sumOnBridge + truckWeights[0] <= weight) {
      // 다음 트럭을 다리 배열에 넣는다.
      sumOnBridge += truckWeights[0];
      NumOfTruckOnBridge.push(truckWeights.shift());
    }
    // ** 다음 트럭의 무게를 다리가 못버틴다면, 해당 트럭을 뺀다.
    else NumOfTruckOnBridge.push(0);
  }

  return time;
}

function solution2(bridgeLength, weight, truckWeights) {
  let time = 0;
  let NumOfTruckOnBridge = new Array(bridgeLength).fill(0);

  while (NumOfTruckOnBridge.length) {
    // 맨 처음 트럭을 다리에 올린다.
    NumOfTruckOnBridge.shift();

    if (truckWeights.length) {
      const sumOnBridge = NumOfTruckOnBridge.reduce((acc, cur) => acc + cur, 0);

      // ** 만약 다음 트럭의 무게를 더해도 다리가 버틸 수 있다면, 다음 트럭을 다리 배열에 넣는다.
      if (sumOnBridge + truckWeights[0] <= weight) NumOfTruckOnBridge.push(truckWeights.shift());
      // ** 다음 트럭의 무게를 다리가 못버틴다면, 해당 트럭을 뺀다.
      else NumOfTruckOnBridge.push(0);
    }

    time++;
  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
