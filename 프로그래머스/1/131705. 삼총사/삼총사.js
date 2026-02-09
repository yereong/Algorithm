function solution(number) {
    let answer = 0;
    for ( i = 0; i < number.length; i++){
        for( j= i+1; j < number.length; j++ ){
            for ( k = j+1; k < number.length; k++ ){
                if(number[k] == - (number[i] + number[j]) ) answer +=1;
            }
        }
    }
    return answer;
}