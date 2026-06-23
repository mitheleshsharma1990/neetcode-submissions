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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    //data left right

    preorder(root, out = []) {
        if (!root) {
            out.push("N"); // Explicitly records the missing node
            return out;
        }
        
        out.push(root.val.toString());          // Record the root
        this.preorder(root.left, out);   // Record the left subtree
        this.preorder(root.right, out);  // Record the right subtree
        return out;
    }
    serialize(root) {
        // create a preorder array
        const data = this.preorder(root,[]);
        return data.join(",")
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserializePreorder(data,indexObj){
        if(data[indexObj.index] === "N"){
            indexObj.index++
            return null
        }
        let node = new TreeNode(data[indexObj.index]);
        indexObj.index++
        node.left = this.deserializePreorder(data,indexObj)
        node.right = this.deserializePreorder(data,indexObj)
        return node
    }
    deserialize(data) {
        if(!data && data.length === 0) return null 
        const array = data.split(",");
        let indexObj = {index:0}
        const node = this.deserializePreorder(array,indexObj)
        return node
    }
}
