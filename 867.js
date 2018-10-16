var transpose = function(A) {
    const row = A.length;
    const col = A[0].length;
    var B = Array();
    for(var i=0; i<col; i++){
        B[i] = Array();
        for(var j=0;j<row; j++){
            B[i].push(A[j][i]);
        }
    }
    return B;
};