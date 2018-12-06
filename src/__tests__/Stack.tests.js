/* global test, expect */
import { Stack } from '../Stack';
import { statSync } from 'fs';

describe('Base tests for Stack', () => {
	test('Test cases for create Stack', () => {
		const stack = new Stack();
		expect(stack.isEmpty()).toEqual(true);
		expect(stack.size).toEqual(0);
	});

	test('Test Cases for push', () => {
		const stack = new Stack();

		stack.push('Bob');

		expect(stack.size).toEqual(1);

		stack.push('Jessy');

		expect(stack.size).toEqual(2);
		expect(stack.peek()).toEqual('Jessy');
	});

	test('Test cases for pop', () => {
		const stack = new Stack();

		stack.push('Bob');
		stack.push('Jessy');
		stack.push('Jack');

		expect(stack.pop()).toEqual('Jack');
		expect(stack.pop()).toEqual('Jessy');
		expect(stack.pop()).toEqual('Bob');
	});

	test('Test case for peek', () => {
		const stack = new Stack();

		expect(stack.peek()).toBeUndefined();

		stack.push('Jessy');
		expect(stack.peek()).toEqual('Jessy');

		stack.push('Bob');
		stack.push('Jack');

		expect(stack.peek()).toEqual('Jack');
	});

	test('Test cases for size', () => {
		const stack = new Stack();

		stack.push('Bob');
		stack.push('Jack');

		expect(stack.size).toEqual(2);

		stack.push('Mary');

		expect(stack.size).toEqual(3);

		stack.pop();
		stack.pop();

		expect(stack.size).toEqual(1);
	});

	test('Test cases for isEmpty', () => {
		const stack = new Stack();

		stack.push('Bob');

		expect(stack.isEmpty()).toBeFalsy();

		stack.pop();

		expect(stack.isEmpty()).toBeTruthy();
	});
});
