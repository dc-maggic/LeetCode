/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true
    let left, right
    let stack = [root.left, root.right]
    while(stack.length!==0){
        left = stack.shift()
        right = stack.shift()
        if(!left && !right) continue
        if((left===null ^ right===null) || (left.val!==right.val)) return false
        stack.push(left.left)
        stack.push(right.right)
        stack.push(left.right)
        stack.push(right.left)
    }
    return true
};
// @lc code=end

