import mergeTwoLists from './MergeTwoLists';
import ListNode from './ListNode';

describe('Merge Two Sorted Lists', () => {
  it('test 1', () => {
    const list1 = new ListNode(1);
    list1.next = new ListNode(2);
    list1.next.next = new ListNode(4);

    const list2 = new ListNode(1);
    list2.next = new ListNode(3);
    list2.next.next = new ListNode(4);

    mergeTwoLists(list1, list2);
  });
});