/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    var num,flag;
    flag=0;
    if(3 <= A.length && A.length <= 10000){
        var l = A.length -1;
        for (var i = 0; i < l; i++) {
            if(A[i] < A[i+1]){
                num = i+1;}
            else if(A[i] > A[i+1]){
                flag++;}
            else{return "this is not the moutain."}
        }
        if(l == num+flag && 0 <= A[num] && A[num] <= 1e6){return num; }
        else{return "default!"}
    }
    else{ return "it is too short or too big."}
};
//注意审题，题目是已给山峰 A 去寻找它的 index，而不是判断 A 是不是山峰再寻找了啦。