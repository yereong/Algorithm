function solution(s) {
    let stack = ['{'];
    let list = [];
    let i = 1;

    let sList = [];
    let num = '';
    while(stack.length > 0){
        
        if(s[i] === '{'){//{ -> 새로운 배열 생성, stack에 추가
            stack.push(s[i]);
            sList = [];
        } 
        else if(s[i] === '}' && stack[stack.length-1] === '{' ){//} -> 짝지어지면 리스트를 push, stack.pop();
            if(s[i-1] !== '}'){
                sList.push(num);
                num='';
            }
            list.push(sList);
            stack.pop();
        }else if(!isNaN(s[i])){ //숫자면
            num+=s[i]
        }else if(s[i] ===',' && s[i-1] !== '}'){ // ,마다 배열에 추가
            sList.push(num);
            num = '';
        }
        i++
    }

    //배열 짧은 순으로 정렬    
    list = list.sort((a,b)=> a.length - b.length);
    console.log(list)
    
    let map = new Map();
    for(i of list){
        for(num of i){
            if( !map.has(num)){
                map.set(num,true);
            }
        }
    }
    
    let answer =[];
    for( [key,val] of map){
        answer.push(Number(key));
    }
    
    return answer;
}