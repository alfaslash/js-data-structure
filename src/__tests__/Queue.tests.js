/* global test, expect */
import { Queue } from '../Queue';

describe('Base tests for Queue', () => {
	test('Create Queue', () => {
		const queue = new Queue();
		expect(queue.isEmpty()).toEqual(true);
		expect(queue.size).toEqual(0);
	});

	test('Add item to Queue', () => {
		const queue = new Queue();
		queue.enqueue('Bob');
		expect(queue.isEmpty()).toEqual(false);
		expect(queue.size).toEqual(1);
		expect(queue.peek()).toEqual('Bob');
	});

	test('Add items to Queue', () => {
		const queue = new Queue();
		queue.enqueue('Bob');
		queue.enqueue('Jack');
		queue.enqueue('Mary');

		expect(queue.isEmpty()).toEqual(false);
		expect(queue.size).toEqual(3);
		expect(queue.peek()).toEqual('Bob');;
	});
});
