"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stack = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Stack = /*#__PURE__*/function () {
  function Stack() {
    _classCallCheck(this, Stack);

    _defineProperty(this, "stack", []);
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(el) {
      this.stack.push(el);
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.stack.pop();
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.stack[this.size - 1];
    }
  }, {
    key: "size",
    get: function get() {
      return this.stack.length;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size === 0;
    }
  }]);

  return Stack;
}();

exports.Stack = Stack;