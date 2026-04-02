function solution(k, tangerine) {
    let map = new Map();
    for(item of tangerine){ //크기:개수 저장
        if(map.has(item)){
            map.set(item,map.get(item)+1);
        }else{
            map.set(item,1)
        }
    }
    let list = [];
    for([key,value] of map){ //개수만 리스트로 뽑기
        list.push(value);
    }
    list.sort((a,b)=>b-a)//내림차순 정렬
    let sum =0;
    let answer = 1;
    for(i=0; i<list.length; i++){ //상자에담기
        if(sum + list[i] >= k) return answer;
        else {
            sum += list[i];
            answer ++;
        }
    }
}