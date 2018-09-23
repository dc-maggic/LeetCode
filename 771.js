/*
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) { 
    var number=0;
    for(var i=0;i<S.length;i++){
        for(var j=0;j<J.length;j++){
            if(S[i]===J[j]){number++;}
        }
    }
    return number;
};