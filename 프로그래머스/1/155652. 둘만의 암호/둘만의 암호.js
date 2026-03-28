function solution(s, skip, index) {
    let skipList = skip.split('').map((v)=>v.charCodeAt(0));
    let list = []
    for(i=0; i<s.length; i++){
        let char = s.charCodeAt(i)
        for(j=0; j<index; j++){
            char += 1;
            if(char > 'z'.charCodeAt(0)){
                    char = 'a'.charCodeAt(0);
                }   
            while(skipList.includes(char)){ char+=1;
                if(char > 'z'.charCodeAt(0)){
                    char = 'a'.charCodeAt(0);
                }            
            }
            
        }
        
        list.push(String.fromCharCode(char))
    }
    return list.join('')
}