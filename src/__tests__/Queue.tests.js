/* global test, expect */
import { Queue } from '../Queue';

describe('Base tests for Queue', () => {
	test('Test cases for create Queue', () => {
		const queue = new Queue();
		expect(queue.isEmpty()).toEqual(true);
		expect(queue.size).toEqual(0);
	});

	test('Test cases for enqueue', () => {
		const queue = new Queue();
		queue.enqueue('Bob');
		queue.enqueue('Jack');
		queue.enqueue('Mary');

		expect(queue.isEmpty()).toBeFalsy();
		expect(queue.size).toEqual(3);
		expect(queue.peek()).toEqual('Bob');
	});

	test('Test cases for dequeue', () => {
		const queue = new Queue();
		queue.enqueue('Bob');
		queue.enqueue('Jack');

		expect(queue.dequeue()).toEqual('Bob');
		expect(queue.dequeue()).toEqual('Jack');
	});

	test('Test cases for peek', () => {
		const queue = new Queue();
		queue.enqueue('Bob');
		queue.enqueue('Jack');

		expect(queue.peek()).toEqual('Bob');

		queue.dequeue();
		expect(queue.peek()).toEqual('Jack');
	});

	test('Test cases for size', () => {
		const queue = new Queue();

		expect(queue.size).toEqual(0);

		queue.enqueue('Bob');

		expect(queue.size).toEqual(1);

		queue.enqueue('Mary');
		queue.enqueue('Jack');

		expect(queue.size).toEqual(3);

		queue.dequeue();

		expect(queue.size).toEqual(2);
	});

	test('Test cases for isEmpty', () => {
		const queue = new Queue();

		expect(queue.isEmpty()).toBeTruthy();

		queue.enqueue('Jack');

		expect(queue.isEmpty()).toBeFalsy();

		queue.dequeue();

		expect(queue.isEmpty()).toBeTruthy();
	});
});
