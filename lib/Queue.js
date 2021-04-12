"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Queue = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);

    _defineProperty(this, "queue", []);
  }

  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(el) {
      this.queue.unshift(el);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this.queue.pop();
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.queue[this.size - 1];
    }
  }, {
    key: "size",
    get: function get() {
      return this.queue.length;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size === 0;
    }
  }]);

  return Queue;
}();

exports.Queue = Queue;