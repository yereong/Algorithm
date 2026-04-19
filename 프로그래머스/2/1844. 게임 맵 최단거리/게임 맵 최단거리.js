function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    //방문했는지 체크하는 배열을 만들기
    let dist = Array.from({length:n},()=>Array(m).fill(-1));
    //큐를 만들기
    let queue = new Array(n*m*2);
    //상하좌우 좌표를 만들기
    let move = [[-1,0],[1,0],[0,-1],[0,1]];
    let head = 0;
    let tail = 0;
    
    queue[tail++] = 0;
    queue[tail++] = 0;
    dist[0][0] =1;
    
    while(head <= tail){
        let r = queue[head++];
        let c = queue[head++];
        //로봇의 위치가 n-1 m-1이면 방문배열의 해당좌표값 리턴
        if(r === n-1 && c === m-1) return dist[r][c];
        
        for([a,b] of move){
            let ra = r+a;
            let cb = c+b;
            //각 방향으로 갈수있고, 방문을 안했으면 움직이기 전 이동거리에+1 저장
            if(ra >=0 && ra < n && cb >=0 && cb < m && dist[ra][cb] === -1 && maps[ra][cb] === 1){
                dist[ra][cb] = dist[r][c] +1;
                queue[tail++] = ra;
                queue[tail++] = cb;
            }
        }
        
    }
    return -1;
}