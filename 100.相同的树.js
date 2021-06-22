/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q) return true
    if(!p || !q) return false
    let pAry = [], qAry = []
    pAry.push(p)
    qAry.push(q)
    while(pAry.length!=0 && qAry.length!=0){
        let pNode = pAry.pop(), qNode = qAry.pop()
        if(pNode.val!==qNode.val){
            return false
        }
        let pLeft = pNode.left,
            pRight = pNode.right,
            qLeft = qNode.left,
            qRight = qNode.right;
        if(!!pLeft ^ !!qLeft){
            return false
        }
        if(!!pRight ^ !!qRight){
            return false
        }
        if(!!pLeft && !!qLeft){
            pAry.push(pLeft)
            qAry.push(qLeft)
        }
        if(!!pRight && !!qRight){
            pAry.push(pRight)
            qAry.push(qRight)
        }
    }
    return true
};
// @lc code=end

