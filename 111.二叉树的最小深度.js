/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0
    const stack = [root]
    let depth = 0, flag = true
    while(flag){
        let len = stack.length
        while(len>0){
            const node = stack.shift()
            if(!node.left && !node.right){
                flag = false
                break
            }
            if(!!node.left) stack.push(node.left)
            if(!!node.right) stack.push(node.right)
            len--
        }
        depth++
    }
    return depth
};
// @lc code=end

