"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkedList = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LinkedList = /*#__PURE__*/function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    _defineProperty(this, "head", null);

    _defineProperty(this, "tail", null);

    _defineProperty(this, "length", 0);
  }

  _createClass(LinkedList, [{
    key: "_createNode",
    value: function _createNode(value) {
      return {
        value: value,
        next: null
      };
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.length === 0;
    }
  }, {
    key: "push",
    value: function push(value) {
      var node = this._createNode(value);

      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
      }

      this.tail.next = node;
      this.tail = node;
      this.length++;
      return node;
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.isEmpty()) {
        return null;
      }

      var node = this.tail;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }

      var current = this.head;
      var penultimate;

      while (current) {
        if (current.next === this.tail) {
          penultimate = current;
          break;
        }

        current = current.next;
      }

      penultimate.next = null;
      this.tail = penultimate;
      this.length--;
      return node;
    }
  }, {
    key: "get",
    value: function get(index) {
      if (index < 0 || index > this.length) {
        return null;
      }

      if (index === 0) {
        return this.head;
      }

      var current = this.head;
      var i = 0;

      while (i < index) {
        i++;
        current = current.next;
      }

      return current;
    }
  }, {
    key: "delete",
    value: function _delete(index) {
      if (index < 0 || index > this.length) {
        return null;
      }

      if (index === 0) {
        var _deleted = this.head;
        this.head = this.head.next;
        this.length--;
        return _deleted;
      }

      var current = this.head;
      var previous;
      var i = 0;

      while (i < index) {
        i++;
        previous = current;
        current = current.next;
      }

      var deleted = current;
      previous.next = current.next;
      this.length--;
      return deleted;
    }
  }]);

  return LinkedList;
}();

exports.LinkedList = LinkedList;