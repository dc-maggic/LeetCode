var singleNumber = function(nums) {
    let single
    nums.map(v => single ^= v)
    return single
};
//掌握 XOR 运算。a^0=a a^a=0 a^b^a=b
//reduce方法似乎比map快一点，我猜可能是因为每一次运行内存都减少一点?