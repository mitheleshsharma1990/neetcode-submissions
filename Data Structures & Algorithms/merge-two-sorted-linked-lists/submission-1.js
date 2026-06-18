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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
if(list1 === null) return list2
        if(list2 === null) return list1
        let head = null;
        let temp = null;
        let h1 = list1;
        let h2 = list2;

        while(h1 != null && h2 != null){
            let tempItem = null
            if(h1.val <= h2.val){
                tempItem = h1
                h1 = h1.next
            }else {
                 tempItem = h2
                 h2= h2.next
            }
             tempItem.next = null
             if(head === null){
                head = tempItem
                temp = tempItem
             }else {
                temp.next = tempItem
                temp = temp.next
             }
        }
        if(h1 === null){
            temp.next = h2
        }
        if(h2 === null){
            temp.next = h1
        }
        return head
    }
}
