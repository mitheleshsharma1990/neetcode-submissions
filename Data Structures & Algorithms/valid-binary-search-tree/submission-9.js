/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */

    // check_right(val,limit){
    //     return val > limit
    // }

    // check_left(val,limit){
    //     return val < limit
    // }

    // isValid(root,limit,check){
    //     if(!root){
    //         return true
    //     }
    //     if(!check.call(this,root.val,limit)){
    //         return false
    //     }
    //     return this.isValid(root.left,limit,check) && this.isValid(root.right,limit,check)
    // }

    // isValidBST(root) {
    //     if(!root) return true

    //     if(
    //         !this.isValid(root.left,root.val,this.check_left) 
    //         || !this.isValid(root.right,root.val,this.check_right) 
    //     ){
    //         return false
    //     }
    //     return this.isValidBST(root.left) && this.isValidBST(root.right)
    // }

    //inorder -> left data right

    //[5,4,6,null,null,3,7]
    isValid(root,left,right){
        if(!root) return true;
        if(!(root.val > left && root.val < right)){
            return false
        }
        return this.isValid(root.left,left,root.val) && this.isValid(root.right,root.val,right)
    }
    isValidBST(root){
        // return this.isValid(root,-Infinity,Infinity)
        if(!root) return true;
        let queue = [];
        queue.push([root,-Infinity,Infinity])
        while(queue.length>0){
            let item = queue.shift();
            if(!(item[0].val > item[1] && item[0].val < item[2])){
                return false
            }
            if(item[0].left){
                queue.push([item[0].left,item[1],item[0].val])
            }
            if(item[0].right){
                queue.push([item[0].right,item[0].val,item[2]])
            }
        }
        return true
    }
}
