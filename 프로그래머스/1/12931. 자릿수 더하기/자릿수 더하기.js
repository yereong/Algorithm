function solution(n){
   let sum = 0;
   let i = 10;
   while (n > 0){
       sum += ((n % i)/(i/10));
       n -= n%i;
       i *= 10;
   }
    return sum ;
}