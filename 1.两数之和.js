/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (47.91%)
 * Likes:    7888
 * Dislikes: 0
 * Total Accepted:    924.7K
 * Total Submissions: 1.9M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let nums2 = [];
//     let result = [];
//     nums.forEach((e,i)=>{
//         if(nums2[e]){
//             nums2[e].push(i);
//         }else{
//             nums2[e] = [i];
//         }
//     })
//     for(let i=0; i<nums.length; i++){
//         let current = nums[i];
//         let search = nums2[target-current];
//         if(search && current!=target-current){
//             result = [i,search[0]];
//             break;
//         }else if(search && search.length>1 ){
//             result = search;
//         }
//     }
//     return result;
// };
var twoSum = function(nums, target) {
    let map = new Map();
   for (let i = 0; i < nums.length; i++) {
     let current = target-nums[i]
     if (map.has(current)) {
       return [map.get(current), i]
     }
     map.set(nums[i], i);
   }
 };
// @lc code=end

