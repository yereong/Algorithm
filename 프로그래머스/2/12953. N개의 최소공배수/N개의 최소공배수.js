function LCM(a,b){
    let i =1;
    let num = a*i;
    while(num%b !== 0){
        num = a*i;
        i++
    }
    return num;
}
function solution(arr) {
    if(arr.length === 1) return arr[0];
    let num = arr[0];
   for(i=1; i<arr.length; i++){
       num = LCM(num,arr[i])
   }
    return num;
}