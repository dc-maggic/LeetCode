var flipAndInvertImage = function(A) {
    return A.map(x => x.reverse().map(x => x === 1? 0 : 1))
};
//更简单的，没有想到可以先 map 里面的元素进行反转再 map