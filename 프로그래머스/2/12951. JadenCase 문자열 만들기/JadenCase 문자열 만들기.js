function solution(s) {
    let list = s.split(' ');
    let answer = [];
    for(i of list){
        char = i.split('');
        for(j=0; j<i.length; j++){
            let c = char[j];
            if(j===0){char[j] = c.toUpperCase();}
            else{
                char[j] = c.toLowerCase();
            }
        }
        answer.push(char.join(''));
        
        
    }
    return answer.join(' ')
}