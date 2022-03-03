class MinHeap {
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

  heapify() {
    let index = this.size() - 1;

    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent < element) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMin() {
    const min = this.heap[0];
    const tmp = this.heap.pop();
    if (!this.empty()) {
      this.heap[0] = tmp ?? this.heap[0];
      this.sinkDown(0);
    }
    return min;
  }

  sinkDown(index: number) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;
    const length = this.size();

    if (left < length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if(right < length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if(smallest !== index) {
      const tmp = this.heap[smallest];
      this.heap[smallest] = this.heap[index];
      this.heap[index] = tmp;
      this.sinkDown(smallest);
    }
  }
}

export default MinHeap;