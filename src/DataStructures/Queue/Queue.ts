class Queue<T> {
  private queue: T[];
  constructor() {
    this.queue = [];
  }

  enqueue(item: T) {
    this.queue.push(item);
  }

  dequeue(): T {
    if (this.empty()) {
      throw new Error('Queue is Empty');
    }

    const result = this.queue[0];
    this.queue.splice(0, 1);

    return result;
  }

  peek(): T {
    if (this.empty()) {
      throw new Error('Queue is Empty');
    }

    return this.queue[0];
  }

  length() {
    return this.queue.length;
  }

  view(output: Function = (value: number) => console.log(value)) {
    this.queue.forEach(value => {
      output(value);
    });
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

export default Queue;
