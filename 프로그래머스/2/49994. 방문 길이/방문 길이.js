function solution(dirs) {
    //U:위 D: 아래 R: 오른쪽 L: 왼쪽
    //0,0f에서 시작 , 캐릭터가 처음 걸어본 길의 길이의 합 return
    //방문한 노드 배열, 
    
    let map = new Map();
    let x = 0;
    let y = 0;
    let direction = new Map([
        ['U', [0,1]],
        ['D', [0,-1]],
        ['R', [1,0]],
        ['L', [-1,0]],]
    )

    for(dir of dirs){    
        
        let xPrime = x+direction.get(dir)[0];
        let yPrime = y+direction.get(dir)[1];
        let range =  xPrime >= -5 && xPrime <= 5 && yPrime>= -5 && yPrime<= 5
        if(range === true ){
            if(!map.has(`${x},${y},${xPrime},${yPrime}`) ){
                map.set(`${x},${y},${xPrime},${yPrime}`,true);
                x = xPrime;
                y = yPrime;
            }else {
                x = xPrime;
                y = yPrime; 
            }
        }
        
        
    }
    for ([s,t] of map){
        let slist= s.split(',');
        
        if(map.has(`${slist[2]},${slist[3]},${slist[0]},${slist[1]}`)){
            map.delete(s);
            console.log(`${s} 지움`)
        }
    }   
    console.log(map)
    return map.size;
}