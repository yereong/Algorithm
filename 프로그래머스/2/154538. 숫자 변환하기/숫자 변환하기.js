function solution(x, y, n) {
    let queue = [x];
    let count = Array(y+1).fill(-1);
    
    let index = 0;
    count[x] = 0;
    
    while ( index < count.length ) {
        let cur = queue[index ++];
        
        if (cur === y) {
            return count[cur]
        }
        
        for (next of [cur + n , cur * 2, cur *3]){
            if ( next <= y && count[next] === -1 ){
                count[next] = count[cur] + 1;
                queue.push(next);
            }
        }
    }
    return -1;
    
}
