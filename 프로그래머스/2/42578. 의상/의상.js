function solution(clothes) {
    let map = new Map();
    for(clothe of clothes){ //map 세팅
        let categori = clothe[1];
        let name = clothe[0];
        if(!map.has(categori)){ // 없으면
            map.set(categori, [name])
        }else{
            map.set(categori, [...map.get(categori),name]);
        }
    }
    
    //경우의 수 구하기
    let answer =1;
    for ([key, value] of map){
        answer *= value.length+1; // 안입는 경우도 포함
    }
    return answer-1; // 모두 안입는 경우는 빼기
}