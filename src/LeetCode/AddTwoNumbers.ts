export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null && l2 === null) {
    return null;
  } else if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  }
  return addTwoNums(l1, l2);

}

function addTwoNums(l1: ListNode, l2: ListNode): ListNode | null {
  let firstList: ListNode | null = l1;
  let secondList: ListNode | null = l2;
  const returnList: ListNode = new ListNode();
  const returnArray: number[] = [];

  for (; firstList instanceof ListNode; firstList = firstList.next) {
    firstList && returnArray.push(firstList.val);
  }
  for (let i = 0; secondList instanceof ListNode; secondList = secondList.next, i++) {
    if (i < returnArray.length) {
      returnArray[i] += secondList.val;
    } else {
      returnArray.push(secondList.val);
    }
  }
  let carry: number = 0;
  for (let i = 0; i < returnArray.length; i++) {
    returnArray[i] += carry;
    if (returnArray[i] >= 10) {
      returnArray[i] -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
  }
  if (carry === 1) {
    returnArray.push(1);
  }

  let curNode = returnList;
  returnArray.forEach((value) => {
    const newNode = new ListNode(value, null);
    curNode.next = newNode;
    curNode = curNode.next;
  });

  return returnList.next;
}

export default addTwoNumbers;