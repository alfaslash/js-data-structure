// @flow
export class Queue<T> {
	queue: Array<T> = []

	enqueue(el: T): void {
		this.queue.unshift(el);
	}

	dequeue(): T {
		return this.queue.pop();
	}

	peek(): T {
		return this.queue[this.size - 1];
	}

	get size(): number {
		return this.queue.length;
	}

	isEmpty(): boolean {
		return this.size === 0;
	}
}
