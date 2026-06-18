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
     * @return {void}
     */
    reorderList(head) {
        if(!head) return null
        if(!head.next) return head
        let slow = head;
        let fast = head;

        while(fast != null && fast.next != null){
            slow = slow.next
            fast = fast.next.next
        }
        let current = slow.next;
        slow.next = null;

        let currentRef = current;
        let headRef = head;

        let reverseH = null
        while(currentRef != null){
            let temp = currentRef;
            currentRef = currentRef.next;
            temp.next = reverseH;
            reverseH = temp
        }

        let finalHead = null;
        let temp = null;
        let count = 0;
        let reverseHead = reverseH
        while(headRef != null && reverseHead != null){
            let tempItem = null
            if(count%2 === 0) {
                tempItem = headRef;
                headRef = headRef.next
            }else {
                 tempItem = reverseHead;
                reverseHead = reverseHead.next
            }
            tempItem.next = null;

            if(finalHead === null){
                finalHead = tempItem
                temp = tempItem
            }else {
                temp.next = tempItem
                temp = temp.next
            }
            count++
        }
        if(headRef === null){
            temp.next = reverseHead
        }
        if(reverseHead === null){
            temp.next = headRef
        }

        return finalHead
    }
}
