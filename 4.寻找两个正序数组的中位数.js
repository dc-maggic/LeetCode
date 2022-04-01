/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length,
        len2 = nums2.length,
        middle = Math.ceil((len1+len2)/2)
    if(len1===0) {
        if(middle=== len2/2) {
            return (nums2[middle] + nums2[middle-1])/2
        }else{
            return nums2[middle-1]
        }
    } else if(len2===0){
        if(middle=== len1/2) {
            return (nums1[middle] + nums1[middle-1])/2
        }else{
            return nums1[middle-1]
        }
    }
    let i1 = 0,
        i2= 0,
        ary = [],
        last = 0
    while(last<=middle){
        const num1 = nums1[i1], num2 = nums2[i2]
        if(num1<=num2 && i1<len1 || num2===undefined) {
            ary.push(num1)
            ++i1
        }else{
            ary.push(num2)
            ++i2
        }
        ++last
    }
    if(middle===(len1+len2)/2) {
        return (ary[middle-1]+ary[middle])/2
    } else {
        return ary[middle-1]
    }
};
// @lc code=end

