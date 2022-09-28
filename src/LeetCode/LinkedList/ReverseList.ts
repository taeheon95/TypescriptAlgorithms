import ListNode from './ListNode';

function reverseList(head: ListNode | null): ListNode | null {
  if(head === null) return head;
  if(head.next === null) return head;

  let ans : ListNode | null = null;
  let prev : ListNode | null = head;

  while(head) {
    prev = head;
    head = head.next;
    prev.next = ans;
    ans = prev;
  }

  return ans;
}

export default reverseList;