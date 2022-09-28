import ListNode from './ListNode';

function detectCycle(head: ListNode | null): ListNode | null {
  if(head === null) return null;

  const listSet = new Set<ListNode>();
  let cur:ListNode|null = head;

  while(cur) {
    if(listSet.has(cur)) return cur;
    listSet.add(cur);
    cur = cur.next;
  }

  return null;
}