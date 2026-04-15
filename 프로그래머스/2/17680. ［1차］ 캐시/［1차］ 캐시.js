function solution(cacheSize, cities) {
    if(cacheSize === 0){
        return cities.length * 5
    }
    //큐의 길이는 cacheSize
    let queue = [];
    //결과시간 세팅
    let answer = 0;
    //cities길이만큼
    for (let i=0; i<cities.length; i++){
        //소문자로 변환
        let city = cities[i].toLowerCase();
         //큐에 이미 이 도시가 있으면
        if(queue.includes(city)){
            //이 도시를 front로 끌어올리기
            queue.splice(queue.indexOf(city),1);
            queue.push(city);
            //실행시간 +1
            answer += 1;
        }      
        //없으면
        else{ 
            if(queue.length >= cacheSize){
                 //가장 최근에 사용되지 않은 도시(rear) 삭제
                queue.splice(0,1);
            }
            //큐에 이 도시 추가하기
            queue.push(city)
            // 실행시간 +5
            answer += 5;
        }      
    }
    return answer;
}