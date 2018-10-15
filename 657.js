var judgeCircle = function(moves) {
    var l = moves.length;
    var x=0,y=0;
    for(var i =0;i<l;i++){
        if (moves[i]=="U") {x++;}
        if(moves[i]=="D") {x--;}
        if(moves[i]=="R") {y++;}
        if(moves[i]=="L") {y--;}
    }
    return(x==0&&y==0);
}