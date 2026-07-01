/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null;
        let visited = new Map();
        const queue = new Queue();
        visited.set(node, new Node(node.val));

        queue.enqueue(node);
        // return queue.size
        while(!queue.isEmpty()){
            let currentNode = queue.dequeue();
            for(let neighbor of currentNode.neighbors){
                if(!visited.has(neighbor)){
                    visited.set(neighbor, new Node(neighbor.val));
                    queue.enqueue(neighbor);
                }
                visited.get(currentNode).neighbors.push(visited.get(neighbor))
            }
            
        }
        return visited.get(node)
    }
}


