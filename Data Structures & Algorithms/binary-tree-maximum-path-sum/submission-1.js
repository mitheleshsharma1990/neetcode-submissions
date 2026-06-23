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
     * @return {number}
     */
    // getMax(root){
    //     if(!root) return 0
    //     let left = this.getMax(root.left);
    //     let right = this.getMax(root.right);
    //     let path = root.val + Math.max(left,right);
    //     return Math.max(0,path)
    // }
    
    maxPathSum(root) {
        if(!root) return 0
    // let result = -Infinity;

    // const  dfs = (root) => {
    //     if(!root) return;
    //     let left = this.getMax(root.left);
    //     let right = this.getMax(root.right);
    //     result = Math.max(result, root.val + left + right);
    //     dfs(root.left)
    //     dfs(root.right)
    // }
    // dfs(root);
    // return result
    let res = root.val
    function  dfs(root){
            if(root === null) return 0;

            let left = dfs(root.left);
            let right = dfs(root.right);

            let leftMax = Math.max(left,0);
            let rightMax = Math.max(right,0);
            
            let maxPath = root.val + leftMax + rightMax
            res = Math.max(res,maxPath)
            return root.val + Math.max(leftMax,rightMax)
    }
        dfs(root);
        return res
    }

    
}
