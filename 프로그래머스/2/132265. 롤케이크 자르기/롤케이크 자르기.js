function solution(topping) {
    let answer = 0;
    let leftSet = new Set();
    let rigthMap = new Map();
    
    for (t of topping){
        rigthMap.set(t,(rigthMap.get(t) || 0) +1);
    }
    
    for(t of topping){
        leftSet.add(t);
        rigthMap.set(t,rigthMap.get(t)-1);
        if(rigthMap.get(t) === 0) rigthMap.delete(t);
        if(leftSet.size === rigthMap.size){
            answer++;
        }
    }
    return answer;
}