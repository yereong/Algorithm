function solution(phone_book) {
    let map = new Map();
    for(number of phone_book){
        map.set(number,true);
    }
    
    for(number of phone_book){
        for(i=1; i<number.length; i++){
            if(map.has(number.slice(0,i))){
                return false;
            }
        }
    }return true;
     
}