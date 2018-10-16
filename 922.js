var sortArrayByParityII = function(A) {
    var e=0,o=1;
    var len=A.length;
    var B = Array();
    for(var i=0;i<len;i++){
        if(A[i]%2==0){B[e]=A[i];e+=2;}
        else{B[o]=A[i];o+=2;}
    }
    return B;
};