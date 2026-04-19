function solution(numbers, target) {
  let count = 0;
  
  function dfs(index, current) {
    // 모든 숫자 다 사용했을 때
    if (index === numbers.length) {
      if (current === target) count++;
      return;
    }
    
    // + 로 사용
    dfs(index + 1, current + numbers[index]);
    // - 로 사용
    dfs(index + 1, current - numbers[index]);
  }
  
  dfs(0, 0);
  return count;
}