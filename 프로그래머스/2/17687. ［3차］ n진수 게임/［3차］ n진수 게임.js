function solution(n, t, m, p) {
    //진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p
    
    let list = [0];
    // 일단 미리 구할 숫자를 차례대로 n진법대로 나열
    let i = 1;
    while(list.length < t*m){
        let nList = calc(i,n)
       list.push(...nList)
        i++;
        
    }
    
    
    
    // 나열한 배열을 튜브의 순서 idx만 골라 리턴하기
    let answer = list.filter((_,idx)=>  idx%m === p-1 );
    if (answer.length > t){answer.pop()}
    
    return answer.join('');
}

//n의 s진법구하는법
function calc(n,s){
    let r = n;
    let list = [];
    while(r !== 0){
        let rNum = r%s;
        if(rNum > 9 && rNum < 16){
            list.push(String.fromCharCode(65 + (rNum-10)));
        }else{
            list.push(rNum)
        }
        r = Math.floor(r/s);
    }

    return list.reverse()
}

