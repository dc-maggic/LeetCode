/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res = [''], stack = [root], ary = []
    while(stack.length){
        var node = stack.shift()
        var link = res.shift() || ''
        const leftRight = node.left || node.right
        if(node.left && node.right) {
            res.push(link + node.val + '->')
            stack.push(node.left)
            res.push(link + node.val + '->')
            stack.push(node.right)
        } else if (leftRight) {
            res.push(link + node.val + '->')
            stack.push(leftRight)
        } else {
            ary.push(link + node.val)
        }
    }
    return ary
};
// @lc code=end

