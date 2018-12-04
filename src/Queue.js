export class Queue {
	constructor() {
		super();

		this.queue = [];
	}

	enqueue(el) {
		this.enqueue = el;
	}

	dequeue() {
		return this.queue.pop();
	}

	peek() {
		return this.queue[this.size - 1];
	}

	get size() {
		return this.queue.length;
	}

	isEmpty() {
		return this.size === 0;
	}
}
