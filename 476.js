var findComplement = function(num) {
    var i = num.toString("2").length;
    return (2**i-1-num);
};
//假设该数字num位长i，求其补码为2^i-1-num