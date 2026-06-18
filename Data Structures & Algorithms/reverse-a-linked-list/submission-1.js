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
     * @return {ListNode}
     */
    reverseList(head) {
        let reverseHead = null;
        
        while(head != null){
            let temp = head;
            head = head.next;
            temp.next = reverseHead;
            reverseHead = temp;
        }
        return reverseHead
    }
}
