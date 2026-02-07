function solution(left, right) {
    let sum = 0;
    for ( i = left; i < right+1; i++){
        let divisor = 0;
        for(j = 1; j < i+1; j++){
            if(i%j == 0) divisor +=1;
        }
        divisor % 2 ? sum -= i : sum += i
    }
    return sum;
}