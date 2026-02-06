function solution(s) {
    let arr = s.split('');
    let length = s.length;
    return length%2 ? arr[Math.floor(length/2)] : arr[length/2 -1 ]+arr[length/2]
}