import ListNode from './ListNode';
import reverseList from './ReverseList';

describe('Reverse Linked List', () => {
  it('test 1', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    const node5 = new ListNode(5);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    let ans = reverseList(node1);
    while(ans) {
      console.log(ans.val);
      ans = ans.next;
    }
  });
});