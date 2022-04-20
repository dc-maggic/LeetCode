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
    let m = nums1.length, n = nums2.length
    if(m>n) {
        return findMedianSortedArrays(nums2, nums1)
    }
    let left = 0, right = m,
        m1 = 0, m2 = 0
    while(left<=right) {
        let i = Math.ceil((left + right) / 2),
            j = Math.floor((m + n + 1) / 2) - i,
            num1_im1 = i === 0 ? -Infinity : nums1[i - 1],
            num1_i = i === m ? Infinity : nums1[i],
            num2_jm1 =  j === 0 ? -Infinity : nums2[j - 1],
            num2_j = j === n ? Infinity : nums2[j]
        if(num1_im1 <= num2_j) {
            m1 = Math.max(num1_im1, num2_jm1)
            m2 = Math.min(num1_i, num2_j)
            left = i + 1
        } else {
            right = i - 1
        }
    }
    return (m+n)%2===0 ? (m1+m2)/2 : m1
};
// @lc code=end

