function solution(n)
{
    let answer = 0; // 총 배터리 사용량
    let count = 1; // 이동한 거리
   // +k 칸 (k만큼 건전지 사용)/ 지금까지온거리 * 2 (건전지 ㄴㄴ)
   // n만큼 떨어진거리로 갈때 건전지 사용량의 최솟값
   while(n!=0){
       if(n%2 === 0){
           n = n/2;
       }
       else{
           n -= 1;
           answer ++; 
       }
   }
    return answer;
}