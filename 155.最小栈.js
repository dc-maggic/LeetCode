/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.value = []
    this.len = 0
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.value[this.len] = val
    ++this.len
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    --this.len
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.len===0 ? undefined : this.value[this.len-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.len ===0) return undefined
    let min = this.value[0]
    for(let i=1; i<this.len; i++){
        if(this.value[i]<min) min = this.value[i]
    }
    return min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

