var flipAndInvertImage = function(A) {
    var i = A.length;
    var j = A[0].length;
    for(var row=0; row<i; row++){
        for(var col=0; col<j; col++){
            if (A[row][col] == 0){A[row][col] = 1;}
            else{A[row][col] = 0;}
        }
        A[row].reverse();
    }
    return A;
};
//没有更好的办法了。