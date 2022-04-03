import { ListNode } from './AddTwoNumbers';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, prev=0): ListNode | null {
  const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + prev;
  const carry = sum > 9;
  const result = new ListNode(carry ? sum - 10: sum);
  if (l1?.next || l2?.next || carry) {
    // @ts-ignore
    result.next = addTwoNumbers(l1?.next, l2?.next, +carry);
  }

  return result;
}

export default addTwoNumbers;