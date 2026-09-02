// dp 사용 문제
// dp [i][j] = i행 j열을 밟았을때의 최댓값

function solution(land) {
    let dp = Array.from({length: land.length},()=> Array(4).fill(0));
    
    for (i=0; i < land.length; i++){
        for (j=0; j < 4; j++){
            if(i===0){
                dp[i][j] = land[i][j];
            }else{
                //이전 계산 값에서 본인 열 제외
                const newArr = dp[i-1].filter((_,idx) => idx !== j);
                // 본인 열 제외 가장 큰 수와 더한 값을 저장
                dp[i][j] = land[i][j] + Math.max(...newArr);
            }
        }
    }
    console.log(dp)
    
    return Math.max(...dp.at(-1));
}