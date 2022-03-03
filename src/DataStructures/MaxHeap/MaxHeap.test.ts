import MaxHeap from './MaxHeap';

describe('heap test', () => {
  let maxHeap:MaxHeap;

  beforeEach(()=>{
    maxHeap = new MaxHeap();
  })

  it('test #1', () => {
    maxHeap.insert(5);
    maxHeap.insert(3);
    maxHeap.insert(8);
    maxHeap.insert(1);
    maxHeap.insert(2);
    const testArr: number[] = [];
    while (!maxHeap.empty()) {
      testArr.push(maxHeap.extractMax());
    }
    expect(testArr).toStrictEqual([8,5,3,2,1]);
  });
});
