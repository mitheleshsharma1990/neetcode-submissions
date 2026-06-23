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
    getMax(root){
        if(!root) return 0
        let left = this.getMax(root.left);
        let right = this.getMax(root.right);
        let path = root.val + Math.max(left,right);
        return Math.max(0,path)
    }
    
    maxPathSum(root) {
    let result = -Infinity;

    const  dfs = (root) => {
        if(!root) return;
        let left = this.getMax(root.left);
        let right = this.getMax(root.right);
        result = Math.max(result, root.val + left + right);
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root);
    return result
    }
}
