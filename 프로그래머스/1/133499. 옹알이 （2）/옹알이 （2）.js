function solution(babbling) {
    let answer = 0;
    for(i=0; i<babbling.length; i++){
        let spell = babbling[i].split('');
        let j =0;
        let s ='';
        let temp = '';
        while(true){
            
            if (j > spell.length-1){answer +=1; console.log(answer); break;}
            else if(spell[j] === 'a' || spell[j] === 'w'){
                s = [spell[j],spell[j+1],spell[j+2]].join('')
                console.log(s);
                if((s === 'aya' || s === 'woo') && temp !== s){
                    temp = s;
                    j+=3;
                }else break;
            }
            else if(spell[j] === 'y' || spell[j] === 'm'){
                s = [spell[j],spell[j+1]].join('')
                console.log('s:',s,'temp:', temp);
                if((s === 'ye' || s === 'ma') &&  temp !== s){
                    temp = s;
                    j+=2;
                }else break;
            }
            else break;
        }
        
    }return answer;
}