/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
 /**
  * 逆向双指针
  * 每次取两者之中的较大者放进 nums1 的最后面。
  * 严格来说，在此遍历过程中的任意一个时刻，
  * nums1 数组中有 m - p_1 - 1 个元素被放入 nums1 的后半部，
  * nums2 数组中有 n - p_2 - 1 个元素被放入 nums1 的后半部，
  * 而在指针 p_1 的后面，nums1 数组有 m + n - p_1 - 1个位置
  * m + n - p_1 >= m - p_1 - 1 + n - p_2 - 1
  * 等价于 p_2 >= -1
  * 永远成立，因此 p_1 后面的位置永远足够容纳被插入的元素，不会产生 p_1 的元素被覆盖的情况。
  */
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let t = m + n - 1,
        i = m - 1,
        j = n - 1
    while(t>=0){
        if(i === -1){
            nums1[t--] = nums2[j--]
        }else if(j === -1){
            nums1[t--] = nums1[i--]
        }else if(nums1[i] > nums2[j]){
            nums1[t--] = nums1[i--]
        }else{
            nums1[t--] = nums2[j--]
        }
    }
};
// @lc code=end

