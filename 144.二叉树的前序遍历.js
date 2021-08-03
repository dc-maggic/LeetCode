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
    if(!root) return[]
    const res = []
    let predecessor = null;
    while(root){
        if(root.left) {
            predecessor = root.left
            while(predecessor.right && predecessor.right!=root){
                predecessor = predecessor.right
            }
            if(!predecessor.right){
                predecessor.right = root
                res.push(root.val);
                root = root.left;
            }else if(predecessor.right == root){
                predecessor.right = null;
                root = root.right
            }
        }else {
            res.push(root.val)
            root = root.right
        }
    }
    return res
};
// @lc code=end

