import Queue from './Queue';

describe('Queue 테스트', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue();
  });

  it('queue enqueue 테스트', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });
});
