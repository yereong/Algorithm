function solution(fees, records) {

    let inoutList = [];
    for (record of records){
        inoutList.push(record.split(' '));
    }
    
    let returnMap = new Map();
    let inoutMap = new Map();
    
    for (item of inoutList){
        if(!inoutMap.has(item[1])){
            inoutMap.set(item[1],item[0]);
        }else{
            let time = timeCalc(item[0], inoutMap.get(item[1]));
            if (returnMap.has(item[1])){
                returnMap.set(item[1], returnMap.get(item[1])+time);
            }else{
                returnMap.set(item[1],time);
            }
            inoutMap.delete(item[1]);
        }
    }
    
    if(inoutMap.size > 0) {
        for (item of inoutMap){
            let time = timeCalc('23:59',item[1]);
            if (returnMap.has(item[0])){
                returnMap.set(item[0], returnMap.get(item[0])+time);
            }else{
                returnMap.set(item[0],time);
            }
        }
    }
    let mapToArr = [...returnMap];
    console.log(mapToArr)
    mapToArr.sort((a,b)=>Number(a[0]) -Number( b[0]))
    let answer = [];
    for (item of mapToArr){
        answer.push(feeCalc(fees,item[1]));
    }
    return answer;
}
//시간 계산
function timeCalc(a,b){
    let aTime = a.split(':');
    let bTime = b.split(':');
    
    return (aTime[0] - bTime[0])*60 + (aTime[1] - bTime[1])
}

// 요금 계산
function feeCalc(fees,time){
    const regMin = fees[0];
    const regFee = fees[1];
    const cntMin = fees[2];
    const cntFee = fees[3];
    
    if (time < regMin) {
        return regFee;
    }else{
        return Math.ceil((time-regMin)/cntMin) * cntFee + regFee
    }
}