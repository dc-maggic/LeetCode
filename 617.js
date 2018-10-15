var mergeTrees = function(t1, t2) {
    if(!t1&&!t2){return [];}
    else{return mergeTrees2(t1,t2);}
    
};
var mergeTrees2 = function(t1,t2){
    if(t1==null){return t2;}
    else if(!t2){return t1;}
    else{
        t1.val = t1.val+t2.val;
        t1.left = mergeTrees2(t1.left,t2.left);
        t1.right = mergeTrees2(t1.right,t2.right);
        return t1;
    }
}
//本来可以直接在函数 mergeTrees() 里直接操作
//但是它报错 input:[],[]，output:null,expect:[]
//emm没有办法，只能改一下