/* global test, expect */
import { LinkedList } from '../LinkedList';

describe('Base tests for LinkedList', () => {
	test('Test cases for create LinkedList', () => {
		const linkedList = new LinkedList();

		expect(linkedList.isEmpty()).toBeTruthy();
		expect(linkedList.tail).toEqual(null);
		expect(linkedList.head).toEqual(null);
	});

	test('Test cases for push', () => {
		const linkedList = new LinkedList();

		linkedList.push('Bob');
		expect(linkedList.head.value).toEqual('Bob');
		expect(linkedList.tail.value).toEqual('Bob');

		linkedList.push('John');
		expect(linkedList.head.value).toEqual('Bob');
		expect(linkedList.tail.value).toEqual('John');
	});

	test('Test cases for pop', () => {
		const linkedList = new LinkedList();

		linkedList.push('Bob');
		linkedList.push('Marry');
		linkedList.push('John');

		expect(linkedList.head.value).toEqual('Bob');

		expect(linkedList.pop().value).toEqual('John');
		expect(linkedList.head.value).toEqual('Bob');
		expect(linkedList.tail.value).toEqual('Marry');

		expect(linkedList.pop().value).toEqual('Marry');
		expect(linkedList.head.value).toEqual('Bob');
		expect(linkedList.tail.value).toEqual('Bob');

		expect(linkedList.pop().value).toEqual('Bob');
		expect(linkedList.head).toEqual(null);
		expect(linkedList.tail).toEqual(null);
	});

	test('Test cases for get', () => {
		const linkedList = new LinkedList();

		linkedList.push('Bob');
		linkedList.push('Marry');
		linkedList.push('John');

		expect(linkedList.get(0).value).toEqual('Bob');
		expect(linkedList.get(0).next.value).toEqual('Marry');
		expect(linkedList.get(1).value).toEqual('Marry');
		expect(linkedList.get(1).next.value).toEqual('John');
		expect(linkedList.get(2).value).toEqual('John');
		expect(linkedList.get(2).next).toEqual(null);
	});

	test('Test cases for delete', () => {
		const linkedList = new LinkedList();

		linkedList.push('Bob');
		linkedList.push('Marry');
		linkedList.push('John');

		expect(linkedList.delete(1).value).toEqual('Marry');
		expect(linkedList.head.value).toEqual('Bob');
		expect(linkedList.tail.value).toEqual('John');
	});
});
