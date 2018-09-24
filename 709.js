/*
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    var num = Array(),s = "";

    for(var i = 0;i < str.length;i++){
        
        num[i]=str.charCodeAt(i);
        if(65<=num[i] && num[i]<=90){
            
            num[i] = num[i]+32;
            s = s+String.fromCharCode(num[i]);
        }
        else{s=s+str[i];}
    }
    
    return s;
};
/*
一开始的思路是 num 作为 ASCII 码，
然后 codetostr，将字符串 str[i]一个个替换掉，
结果发现无法替换。只能重新创立新的字符串 s，
不断将 str[i] 一个个小写给 字符串 s。
重点：字符串无法被替换，因为不是数组。
*/