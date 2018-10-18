var searchBST = function(root, val) {
    if(!root){
        return [];
    }else if(root.val === val){
        return root;
    }else{
        if(root.val> val){
            return searchBST(root.left, val);
        }else{
            return searchBST(root.right, val);}
    }
    
};
//刚开始我漏了后面的两个 return，结果一直显示undefined。看来对 return 语句还不够把握。