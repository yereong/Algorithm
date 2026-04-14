function solution(progresses, speeds) {
    let stack = [];
    let speed = [];
    let answer = [];
    for(i=progresses.length-1; i>=0; i--){
        stack.push(progresses[i]);
        speed.push(speeds[i])
    }

    while (stack.length > 0){ 
        let top = stack[stack.length-1];
        let day = Math.ceil((100 - top)/speed[stack.length-1]);
        stack = stack.map((v,idx)=>v + speed[idx] * day);
        let count = 0;
        while(top >= 100){
            stack.pop();
            top = stack[stack.length-1];
            count++
        }
        if(count > 0){
            answer.push(count);
        }
    }
    return answer;
}