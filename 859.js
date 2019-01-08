var buddyStrings = function(A, B) {
    if(A.length!=B.length) {
        return false;
    } else{
    if(A===B){
        var s =[];
        for( var i of A){
            if(s.indexOf(i)==-1){
                s.push(i);
            } else {
                return true;
            }
        }
        return false;
    } else {
        var dir =[];
        for(var i = 0;i<A.length;i++){
            if(A[i]!=B[i]){
                dir.push(i);
            }
        }
        if(dir.length!=2){
            return false;
        }else{
            if(A[dir[0]]===B[dir[1]]&&A[dir[1]]===B[dir[0]]){
                return true;
            }else{
                return false;
            }
        }
    }}
    
};