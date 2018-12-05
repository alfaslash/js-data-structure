// @flow
export class Stack<T> {
	stack: Array<T> = []

	push(el: T) {
		this.stack.push(el);
	}

	pop(): T {
		return this.stack.pop();
	}

	peek(): T {
		return this.stack[this.size - 1];
	}

	get size(): number {
		return this.stack.length;
	}

	isEmpty(): boolean {
		return this.size === 0;
	}
}
