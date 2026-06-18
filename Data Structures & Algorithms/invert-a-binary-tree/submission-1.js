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
     * @return {TreeNode}
     */
    
    invertTree(root) {
        //think of base case
        if (root === null) return null
        // divide the problem into sub-problems
        let left =  this.invertTree(root.left);
        let right = this.invertTree(root.right);
        root.left = right
        root.right = left
        return root
    }
}
