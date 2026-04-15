function solution(priorities, location) {
    const item = priorities[location];
    let list = [];
    let i = 0;
    while(!list.includes(location)){ //해당 location이 실행될때까지
        if(priorities[i] === Math.max(...priorities)){ // 더 큰 값이 없으면
            list.push(i); //실행
            priorities[i] = 0; //대기 큐에서 삭제
            i++;
        }else{ //더 큰값이 있으면
            i++ //넘어가기
        }
        if(i === priorities.length){
            i = 0;
        }
    }
    return list.length;
    
}