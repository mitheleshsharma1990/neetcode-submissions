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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    //preoder -> ] left right
    //inorder -> left data right
    buildTree(preorder, inorder) {
        let first = preorder[0];
        let indexFirst = inorder.indexOf(first)
        if(indexFirst === -1) return null
        
        let leftTreeIN = inorder.slice(0,indexFirst);
        let rightTreeIN = inorder.slice(indexFirst+1);

        let leftTreePr = preorder.slice(1,leftTreeIN.length + 1);
        let rightTreePr = preorder.slice(leftTreeIN.length + 1,
        leftTreeIN.length + rightTreeIN.length + 1);

        let root = new TreeNode(first)

        root.left = this.buildTree(leftTreePr, leftTreeIN) 
        root.right = this.buildTree(rightTreePr, rightTreeIN)

        return root
        // take the first element in preorder
        // find the index of the elememt in inorder,
        // the item from 0 to index-1 are left tree
        // the item from index+1 to the length-1 is right tree
        // do the same thing for left tree and right tree
    }
}
