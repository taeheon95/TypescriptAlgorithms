import MinHeap from './MinHeap';

describe('minHeap test', function() {
  let minHeap:MinHeap;

  beforeEach(()=>{
    minHeap = new MinHeap();
  })

  it("test case #1", ()=>{
    minHeap.insert(5);
    minHeap.insert(3);
    minHeap.insert(8);
    minHeap.insert(1);
    minHeap.insert(2);
    const testArr: number[] = [];
    while (!minHeap.empty()) {
      testArr.push(minHeap.extractMin());
    }
    expect(testArr).toStrictEqual([1,2,3,5,8]);
  })
});