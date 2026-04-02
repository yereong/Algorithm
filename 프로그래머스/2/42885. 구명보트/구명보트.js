function solution(people, limit) {
    let list = people.sort((a,b)=>a-b);
    let answer = 0;
    let left = 0;
    let right = list.length-1;
    while(left<=right){
        if (list[left]+list[right] <= limit){
            left ++;
            right --;
            answer ++;
        }else{
            answer ++;
            right --;
        }
    }
    return answer;
}