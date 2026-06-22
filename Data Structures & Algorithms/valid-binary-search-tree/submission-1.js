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

    check_right(val,limit){
        return val > limit
    }

    check_left(val,limit){
        return val < limit
    }

    isValid(root,limit,check){
        if(!root){
            return true
        }
        if(!check.call(this,root.val,limit)){
            return false
        }
        return this.isValid(root.left,limit,check) && this.isValid(root.right,limit,check)
    }
    isValidBST(root) {
        if(!root) return true

        if(
            !this.isValid(root.left,root.val,this.check_left) 
            || !this.isValid(root.right,root.val,this.check_right) 
        ){
            return false
        }
        return this.isValidBST(root.left) && this.isValidBST(root.right)
    }
}
