class MaxHeap {
  private readonly heap: number[];
  constructor() {
    this.heap = [];
  }
  insert(value: number): void {
    this.heap.push(value);
    this.heapify();
  }
  size(): number {
    return this.heap.length;
  }
  empty(): boolean {
    return this.size() === 0;
  }

  // 삽입 후 정렬
  heapify() {
    let index = this.size() - 1;

    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent >= element) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  // Extracting the maximum element from the Heap
  extractMax() {
    const max = this.heap[0];
    const tmp = this.heap.pop();
    if (!this.empty()) {
      this.heap[0] = tmp ?? this.heap[0];
      this.sinkDown(0);
    }
    return max;
  }

  // To restore the balance of the heap after extraction.
  sinkDown(index: number) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;
    const length = this.size();

    if (left < length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      const tmp = this.heap[largest];
      this.heap[largest] = this.heap[index];
      this.heap[index] = tmp;
      this.sinkDown(largest);
    }
  }
}

export default MaxHeap;
