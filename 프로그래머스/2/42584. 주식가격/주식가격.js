function solution(prices) {
    //prices를 돌면서
    let answer = [];
    for (i=0; i<prices.length; i++){
        let curPrice = prices[i];
        let period = 0;
        for(j=i+1; j<prices.length; j++){
            if (curPrice <= prices[j]){
                period++;
            }else {
                period++;
                break;
            };
        }
        answer.push(period);
    }
    return answer;
}