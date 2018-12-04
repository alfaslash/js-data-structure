export class Stack {
	constructor() {
		super();

		this.stack = [];
	}

	push() {
		this.stack.push();
	}

	pop() {
		return this.stack.pop();
	}

	peek() {
		return this.stack[this.size - 1];
	}

	get size() {
		return this.stack.length;
	}

	isEmpty() {
		return this.size === 0;
	}
}
