var hammingDistance = function(x, y) {
    return((x^y).toString("2").replace(/0/g,"").length);
};
//题目问的是有多个位不一样
//可以用“按位异或”这个运算来计算，接着将这个十进制 number 的结果转换成二进制字符串 string,
//这时字符串 string 里只包含0、1，本来想采用 array.reduce()函数，但是这个是字符串，只能将0删掉再计算这个字符串的长度。