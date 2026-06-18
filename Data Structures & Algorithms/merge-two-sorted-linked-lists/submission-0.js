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
        if(list1 == null) return list2
        if(list2 == null) return list1
        let head = null;
        let temp = null;
        let p1 = list1;
        let p2 = list2;

        while(p1 != null && p2 != null){
            let listItem = null;
            if(p1.val <= p2.val){
                listItem = p1
                p1 = p1.next
            }else {
                listItem = p2;
                p2 = p2.next
            }
            if(head == null){
                head = listItem
                temp = listItem
            }else {
                temp.next = listItem
                temp = temp.next
            }
        }
        if(p1 == null){
            temp.next = p2
        }
        if(p2 == null){
            temp.next = p1
        }
        return head
    }
}
