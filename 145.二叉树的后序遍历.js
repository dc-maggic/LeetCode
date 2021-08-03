/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const res = []
    function getNode(node, r){
        if(node){
            if(node.left) getNode(node.left, r)
            if(node.right) getNode(node.right, r)
            r.push(node.val)
        }
    }
    getNode(root, res)
    return res
};
// @lc code=end

