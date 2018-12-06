/* global test, expect */
import { PriorityQueue } from '../PriorityQueue';

describe('Base tests for PriorityQueue', () => {
	test('Test cases for create PriorityQueue', () => {
		const priorityQueue = new PriorityQueue();
		expect(priorityQueue.isEmpty()).toEqual(true);
		expect(priorityQueue.size).toEqual(0);
	});

	test('Test cases for enqueue', () => {
		const priorityQueue = new PriorityQueue();
		priorityQueue.enqueue('Bob');
		priorityQueue.enqueue('Jack', true);
		priorityQueue.enqueue('Mary', true);

		expect(priorityQueue.isEmpty()).toBeFalsy();
		expect(priorityQueue.size).toEqual(3);
		expect(priorityQueue.peek()).toEqual('Jack');
	});

	test('Test cases for dequeue', () => {
		const priorityQueue = new PriorityQueue();
		priorityQueue.enqueue('Bob');
		priorityQueue.enqueue('Jessy');
		priorityQueue.enqueue('Jack', true);

		expect(priorityQueue.dequeue()).toEqual('Jack');
		expect(priorityQueue.dequeue()).toEqual('Bob');
	});

	test('Test cases for peek', () => {
		const priorityQueue = new PriorityQueue();
		priorityQueue.enqueue('Bob', true);
		priorityQueue.enqueue('Jack');
		priorityQueue.enqueue('Mary', true);

		expect(priorityQueue.peek()).toEqual('Bob');

		priorityQueue.dequeue();
		expect(priorityQueue.peek()).toEqual('Mary');

		priorityQueue.dequeue();
		expect(priorityQueue.peek()).toEqual('Jack');
	});

	test('Test cases for size', () => {
		const priorityQueue = new PriorityQueue();

		expect(priorityQueue.size).toEqual(0);

		priorityQueue.enqueue('Bob', true);

		expect(priorityQueue.size).toEqual(1);

		priorityQueue.enqueue('Mary');
		priorityQueue.enqueue('Jack', true);

		expect(priorityQueue.size).toEqual(3);

		priorityQueue.dequeue();

		expect(priorityQueue.size).toEqual(2);
	});

	test('Test cases for isEmpty', () => {
		const priorityQueue = new PriorityQueue();

		expect(priorityQueue.isEmpty()).toBeTruthy();

		priorityQueue.enqueue('Jack', true);

		expect(priorityQueue.isEmpty()).toBeFalsy();

		priorityQueue.dequeue();

		expect(priorityQueue.isEmpty()).toBeTruthy();
	});
});
