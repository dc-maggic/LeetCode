/*
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const B = A.filter(x => x%2==0 ).concat(A.filter(x => x%2==1));
    return B;
    };
/*
主要是对 JavaScript 的函数不熟悉。
前面写的代码被人说不够 JavaScript ，
然后网站的人讨论的差不多也是这样子的答案，
这次我在建议之下翻阅了 MDN 的文档，收获颇多。
我居然能忘记过滤器 filter？
*/