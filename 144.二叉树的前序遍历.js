/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    const res = []
    function getNode(node,r){
        if(node){
            if(node.val) r.push(node.val)
            if(node.left) getNode(node.left,r)
            if(node.right) getNode(node.right,r)
        }
    }
    getNode(root,res)
    return res
};
// @lc code=end

