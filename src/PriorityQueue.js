// @flow
import { Queue } from './Queue';

export class PriorityQueue<T> {
	HightPriorityQueue: Queue<T> = new Queue()
	LowPriorityQueue: Queue<T> = new Queue()

	enqueue(el: T, isHightPriority: ?boolean = false) {
		isHightPriority ? this.HightPriorityQueue.enqueue(el) : this.LowPriorityQueue.enqueue(el);
	}

	dequeue(): T {
		return this.HightPriorityQueue.isEmpty() ? this.LowPriorityQueue.dequeue() : this.HightPriorityQueue.dequeue();
	}

	peek(): T {
		return this.HightPriorityQueue.isEmpty() ? this.LowPriorityQueue.peek() : this.HightPriorityQueue.peek();
	}

	get size(): number {
		return this.HightPriorityQueue.size + this.LowPriorityQueue.size;
	}

	isEmpty(): boolean {
		return this.HightPriorityQueue.isEmpty() && this.LowPriorityQueue.isEmpty();
	}
}
