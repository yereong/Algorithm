function solution(msg) {
    //사전 배열 : A:1 ~ Z:26까지 초기화
    let dict = []
    let answer = [];
    
    for(i=0; i<26; i++){
        dict.push(String.fromCharCode(65+i));
    }
    let idx = 0;
    
    while(idx < msg.length){
        let checkMsg = msg[idx];
        let n=1;
        
        while(dict.includes(checkMsg+ msg[idx+n]) && checkMsg.length <= msg.length-(idx+1)){
            checkMsg += msg[idx+n];
            n++;
        }
        
        dict.push(checkMsg+ msg[idx+n]);
        
        answer.push(dict.indexOf(checkMsg)+1);
        
        idx += checkMsg.length;
            
    }
    
    return answer;
       
}
