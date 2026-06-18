/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        
        let size = 0;
        let h1 = head;

        while(h1 != null){
            h1 = h1.next;
            size++
        }
        if(size === n){
            return head.next
        }
        let prevPos = size - n - 1;
        let prevNode = head;

        while(prevPos > 0){
            prevNode = prevNode.next
            prevPos--
        }
        
        let nextNode = prevNode.next.next;
        prevNode.next.next = null;
        prevNode.next = null
        prevNode.next = nextNode
        return head
    }
}
