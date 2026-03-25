function solution(k, m, score) {
    let answer = 0;
    let sortedList = score.sort((a,b)=>b-a)
    for (i=m-1; i<score.length; i+=m){
        answer += sortedList[i] * m;
    }
    return answer;
}