var selfDividingNumbers = function(left, right) {
    var A= [];
    for(var i = left; i<= right; i++){
        if(isDividing(i)) {A.push(i);}
    };
    return A;
};
var isDividing=function(x){
    let num = x;
    while(x>0){
        if(num%(x%10)!==0){return false;break;}
        x = Math.floor(x/10);
        alert(x);
    }
    return true;
}