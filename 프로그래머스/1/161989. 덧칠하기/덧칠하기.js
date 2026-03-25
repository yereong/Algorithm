function solution(n, m, section) {
    let painted = section[0]-1;
    let answer = 0;
    for (i=0; i<section.length; i++){
        if(painted >= section[-1]) break;
        if (painted < section[i]){
            painted = section[i]+m-1;
            answer ++;
        }
        
    }
    return answer;
}