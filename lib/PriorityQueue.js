"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PriorityQueue = void 0;

var _Queue = require("./Queue");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PriorityQueue = /*#__PURE__*/function () {
  function PriorityQueue() {
    _classCallCheck(this, PriorityQueue);

    _defineProperty(this, "HightPriorityQueue", new _Queue.Queue());

    _defineProperty(this, "LowPriorityQueue", new _Queue.Queue());
  }

  _createClass(PriorityQueue, [{
    key: "enqueue",
    value: function enqueue(el) {
      var isHightPriority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      isHightPriority ? this.HightPriorityQueue.enqueue(el) : this.LowPriorityQueue.enqueue(el);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this.HightPriorityQueue.isEmpty() ? this.LowPriorityQueue.dequeue() : this.HightPriorityQueue.dequeue();
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.HightPriorityQueue.isEmpty() ? this.LowPriorityQueue.peek() : this.HightPriorityQueue.peek();
    }
  }, {
    key: "size",
    get: function get() {
      return this.HightPriorityQueue.size + this.LowPriorityQueue.size;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.HightPriorityQueue.isEmpty() && this.LowPriorityQueue.isEmpty();
    }
  }]);

  return PriorityQueue;
}();

exports.PriorityQueue = PriorityQueue;