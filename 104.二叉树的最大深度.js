/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    if(!root) return 0
    const stack = [root]
    let deep = 0
    while(stack.length){
        let len = stack.length
        while(len>0){
            const node = stack.shift()
            if(!!node.left) stack.push(node.left)
            if(!!node.right) stack.push(node.right)
            len--
        }
        deep++
    }
    return deep
};
// @lc code=end

