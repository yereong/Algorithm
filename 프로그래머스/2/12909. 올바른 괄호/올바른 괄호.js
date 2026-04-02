function solution(s){
    let stack = [];
    let list = s.split('');
    for (i of list){ 
        if(i===")" && stack[stack.length-1] === "("){
            stack.pop();
        }else{
            stack.push(i);
        }
    }
    return stack.length === 0? true : false
}