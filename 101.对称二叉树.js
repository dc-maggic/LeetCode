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
    const checkNode = function(node1, node2){
        if(node1===null ^ node2===null) return false
        if(!node1 && !node2) return true
        return node1.val===node2.val&&checkNode(node1.left,node2.right)&&checkNode(node1.right,node2.left)
    }
    return checkNode(root.left, root.right)
};
// @lc code=end

