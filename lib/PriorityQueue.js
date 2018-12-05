'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PriorityQueue = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Queue = require('./Queue');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PriorityQueue = exports.PriorityQueue = function () {
	function PriorityQueue() {
		_classCallCheck(this, PriorityQueue);

		this.HightPriorityQueue = new _Queue.Queue();
		this.LowPriorityQueue = new _Queue.Queue();
	}

	_createClass(PriorityQueue, [{
		key: 'enqueue',
		value: function enqueue(el) {
			var isHightPriority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			isHightPriority ? this.HightPriorityQueue.enqueue(el) : this.LowPriorityQueue.enqueue(el);
		}
	}, {
		key: 'dequeue',
		value: function dequeue() {
			return this.HightPriorityQueue.isEmpty() ? this.LowPriorityQueue.dequeue() : this.HightPriorityQueue.dequeue();
		}
	}, {
		key: 'peek',
		value: function peek() {
			return this.HightPriorityQueue.isEmpty() ? this.LowPriorityQueue.peek() : this.HightPriorityQueue.peek();
		}
	}, {
		key: 'isEmpty',
		value: function isEmpty() {
			return this.HightPriorityQueue.isEmpty() && this.LowPriorityQueue.isEmpty();
		}
	}, {
		key: 'size',
		get: function get() {
			return this.HightPriorityQueue.size + this.LowPriorityQueue.size;
		}
	}]);

	return PriorityQueue;
}();