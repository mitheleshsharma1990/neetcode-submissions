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
     * @param {number} k
     * @return {number}
     */
    traverse_inorder(root,array){
        if(!root) return 
        this.traverse_inorder(root.left,array)
        array.push(root.val)
        this.traverse_inorder(root.right,array)
    }
    kthSmallest(root, k) {
        let min = Infinity;
        let array = []
        this.traverse_inorder(root,array)
        return array[k-1]
    }
}
