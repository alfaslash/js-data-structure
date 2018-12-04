import { Queue } from './Queue';

export class PriorityQueue {
	constructor() {
		super();

		this.HightPriorityQueue = new Queue();
		this.LowPriorityQueue = new Queue();
	}

	enqueue(el, isHightPriority = false) {
		isHightPriority ? this.HightPriorityQueue.enqueue(el) : this.LowPriorityQueue.enqueue(el);
	}

	dequeue(el) {
		return this.HightPriorityQueue.isEmpty() ? this.LowPriorityQueue.dequeue() : this.HightPriorityQueue.dequeue();
	}

	peek() {
		return this.HightPriorityQueue.isEmpty() ? this.LowPriorityQueue.peek() : this.HightPriorityQueue.peek();
	}

	get size() {
		return this.HightPriorityQueue.size + this.LowPriorityQueue.size;
	}

	isEmpty() {
		return this.HightPriorityQueue.isEmpty() && this.LowPriorityQueue.isEmpty();
	}
}
