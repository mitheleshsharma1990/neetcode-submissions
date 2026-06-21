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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        let queue = [];
        queue.push(root);
        let result = []
        while(queue.length > 0){
            let qLen = queue.length;
            let level = [];
            while(qLen > 0){
                let item = queue.shift()
                if(item){
                    level.push(item.val);
                    queue.push(item.left)
                    queue.push(item.right)
                }
                qLen--
            }
            if(level.length > 0){
                result.push(level);
            }
        }
        return result
    }
}
