import addTwoNumbers, { ListNode } from './AddTwoNumbers';

describe('add two numbers 테스트', () => {
  it('case #1', () => {
    const l1_0 = new ListNode(2);
    const l1_1 = new ListNode(4);
    const l1_2 = new ListNode(3);
    l1_0.next = l1_1;
    l1_1.next = l1_2;

    const l2_0 = new ListNode(5);
    const l2_1 = new ListNode(6);
    const l2_2 = new ListNode(4);
    l2_0.next = l2_1;
    l2_1.next = l2_2;

    const checkList = addTwoNumbers(l1_0, l2_0);
    let rList = checkList;
    const rArray: number[] = [];
    while (rList) {
      rArray.push(rList.val);
      rList = rList.next;
    }
    
    console.log(checkList);
    expect(checkList?.val).toBe(7);
    expect(rArray).toStrictEqual([7, 0, 8]);
  });
  it('case #2', () => {
    const l1_0 = new ListNode(0);
    const l2_0 = new ListNode(0);
    const checkList = addTwoNumbers(l1_0, l2_0);
    let rList = checkList;
    const rArray: number[] = [];
    while (rList) {
      rArray.push(rList.val);
      rList = rList.next;
    }

    console.log(checkList);
    expect(checkList?.val).toBe(0);
    expect(rArray).toStrictEqual([0]);
  });
  it('case #3', () => {
    const l1_0 = new ListNode(9);
    const l1_1 = new ListNode(9);
    const l1_2 = new ListNode(9);
    const l1_3 = new ListNode(9);
    const l1_4 = new ListNode(9);
    const l1_5 = new ListNode(9);
    const l1_6 = new ListNode(9);
    l1_0.next = l1_1;
    l1_1.next = l1_2;
    l1_2.next = l1_3;
    l1_3.next = l1_4;
    l1_4.next = l1_5;
    l1_5.next = l1_6;

    const l2_0 = new ListNode(9);
    const l2_1 = new ListNode(9);
    const l2_2 = new ListNode(9);
    const l2_3 = new ListNode(9);
    l2_0.next = l2_1;
    l2_1.next = l2_2;
    l2_2.next = l2_3;

    const checkList = addTwoNumbers(l1_0, l2_0);
    let rList = checkList;
    const rArray: number[] = [];
    while (rList) {
      rArray.push(rList.val);
      rList = rList.next;
    }

    console.log(checkList);
    expect(checkList?.val).toBe(8);
    expect(rArray).toStrictEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
