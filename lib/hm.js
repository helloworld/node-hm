"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(key, value) {
  _classCallCheck(this, Node);

  this.key = key;
  this.value = value;
};

var HashMap = function () {
  function HashMap(size) {
    _classCallCheck(this, HashMap);

    this.size = size;
    this.memory = new Array(size);
    this.count = 0;
  }

  _createClass(HashMap, [{
    key: "index",
    value: function index(key) {
      return this.constructor.hash(key) % this.size;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var index = this.index(key);
      var head = this.memory[index];

      var curr = head;
      while (curr != null) {
        if (curr.key === key) {
          curr.value = value;
          return true;
        }

        curr = curr.next;
      }

      if (this.count === this.size) {
        return false;
      }

      this.count += 1;
      var newNode = new Node(key, value);
      newNode.next = head;
      this.memory[index] = newNode;

      return true;
    }
  }, {
    key: "get",
    value: function get(key) {
      var index = this.index(key);

      var curr = this.memory[index];
      while (curr != null) {
        if (curr.key === key) {
          return curr.value;
        }
        curr = curr.next;
      }

      return null;
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var index = this.index(key);
      var head = this.memory[index];

      if (head == null) {
        return null;
      }

      if (head.key === key) {
        var value = head.value;
        this.memory[index] = head.next;
        this.count -= 1;
        return value;
      }

      var prev = head;
      var curr = head.next;
      while (curr != null) {
        if (curr.key === key) {
          prev.next = curr.next;
          this.count -= 1;
          return curr.value;
        }
        prev = curr;
        curr = curr.next;
      }

      return null;
    }
  }, {
    key: "load",
    value: function load() {
      return this.count / this.size;
    }
  }], [{
    key: "hash",
    value: function hash(str) {
      var hash = 0;
      if (str.length === 0) return hash;

      for (var i = 0; i < str.length; i += 1) {
        var char = str.charCodeAt(i);
        /* eslint-disable */
        hash = (hash << 5) - hash + char;
        hash &= hash;
        /* eslint-enable */
      }
      return hash;
    }
  }]);

  return HashMap;
}();

exports.default = HashMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9obS5qcyJdLCJuYW1lcyI6WyJOb2RlIiwia2V5IiwidmFsdWUiLCJIYXNoTWFwIiwic2l6ZSIsIm1lbW9yeSIsIkFycmF5IiwiY291bnQiLCJjb25zdHJ1Y3RvciIsImhhc2giLCJpbmRleCIsImhlYWQiLCJjdXJyIiwibmV4dCIsIm5ld05vZGUiLCJwcmV2Iiwic3RyIiwibGVuZ3RoIiwiaSIsImNoYXIiLCJjaGFyQ29kZUF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBRU1BLEksR0FLSixjQUFZQyxHQUFaLEVBQXlCQyxLQUF6QixFQUFxQztBQUFBOztBQUNuQyxPQUFLRCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxPQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDRCxDOztJQUdrQkMsTztBQU1uQixtQkFBWUMsSUFBWixFQUFnQztBQUFBOztBQUM5QixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUMsS0FBSixDQUFVRixJQUFWLENBQWQ7QUFDQSxTQUFLRyxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7OzBCQWdCS04sRyxFQUFxQjtBQUN6QixhQUFPLEtBQUtPLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCUixHQUF0QixJQUE2QixLQUFLRyxJQUF6QztBQUNEOzs7d0JBRUdILEcsRUFBYUMsSyxFQUFxQjtBQUNwQyxVQUFNUSxRQUFRLEtBQUtBLEtBQUwsQ0FBV1QsR0FBWCxDQUFkO0FBQ0EsVUFBTVUsT0FBYyxLQUFLTixNQUFMLENBQVlLLEtBQVosQ0FBcEI7O0FBRUEsVUFBSUUsT0FBY0QsSUFBbEI7QUFDQSxhQUFPQyxRQUFRLElBQWYsRUFBcUI7QUFDbkIsWUFBSUEsS0FBS1gsR0FBTCxLQUFhQSxHQUFqQixFQUFzQjtBQUNwQlcsZUFBS1YsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsaUJBQU8sSUFBUDtBQUNEOztBQUVEVSxlQUFPQSxLQUFLQyxJQUFaO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLTixLQUFMLEtBQWUsS0FBS0gsSUFBeEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsV0FBS0csS0FBTCxJQUFjLENBQWQ7QUFDQSxVQUFNTyxVQUFnQixJQUFJZCxJQUFKLENBQVNDLEdBQVQsRUFBY0MsS0FBZCxDQUF0QjtBQUNBWSxjQUFRRCxJQUFSLEdBQWVGLElBQWY7QUFDQSxXQUFLTixNQUFMLENBQVlLLEtBQVosSUFBcUJJLE9BQXJCOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7d0JBRUdiLEcsRUFBbUI7QUFDckIsVUFBTVMsUUFBUSxLQUFLQSxLQUFMLENBQVdULEdBQVgsQ0FBZDs7QUFFQSxVQUFJVyxPQUFPLEtBQUtQLE1BQUwsQ0FBWUssS0FBWixDQUFYO0FBQ0EsYUFBT0UsUUFBUSxJQUFmLEVBQXFCO0FBQ25CLFlBQUlBLEtBQUtYLEdBQUwsS0FBYUEsR0FBakIsRUFBc0I7QUFDcEIsaUJBQU9XLEtBQUtWLEtBQVo7QUFDRDtBQUNEVSxlQUFPQSxLQUFLQyxJQUFaO0FBQ0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7Ozs0QkFFTVosRyxFQUFhO0FBQ2xCLFVBQU1TLFFBQVEsS0FBS0EsS0FBTCxDQUFXVCxHQUFYLENBQWQ7QUFDQSxVQUFNVSxPQUFPLEtBQUtOLE1BQUwsQ0FBWUssS0FBWixDQUFiOztBQUVBLFVBQUlDLFFBQVEsSUFBWixFQUFrQjtBQUNoQixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJQSxLQUFLVixHQUFMLEtBQWFBLEdBQWpCLEVBQXNCO0FBQ3BCLFlBQU1DLFFBQVFTLEtBQUtULEtBQW5CO0FBQ0EsYUFBS0csTUFBTCxDQUFZSyxLQUFaLElBQXFCQyxLQUFLRSxJQUExQjtBQUNBLGFBQUtOLEtBQUwsSUFBYyxDQUFkO0FBQ0EsZUFBT0wsS0FBUDtBQUNEOztBQUVELFVBQUlhLE9BQU9KLElBQVg7QUFDQSxVQUFJQyxPQUFPRCxLQUFLRSxJQUFoQjtBQUNBLGFBQU9ELFFBQVEsSUFBZixFQUFxQjtBQUNuQixZQUFJQSxLQUFLWCxHQUFMLEtBQWFBLEdBQWpCLEVBQXNCO0FBQ3BCYyxlQUFLRixJQUFMLEdBQVlELEtBQUtDLElBQWpCO0FBQ0EsZUFBS04sS0FBTCxJQUFjLENBQWQ7QUFDQSxpQkFBT0ssS0FBS1YsS0FBWjtBQUNEO0FBQ0RhLGVBQU9ILElBQVA7QUFDQUEsZUFBT0EsS0FBS0MsSUFBWjtBQUNEOztBQUVELGFBQU8sSUFBUDtBQUNEOzs7MkJBRWM7QUFDYixhQUFPLEtBQUtOLEtBQUwsR0FBYSxLQUFLSCxJQUF6QjtBQUNEOzs7eUJBMUZXWSxHLEVBQXFCO0FBQy9CLFVBQUlQLE9BQU8sQ0FBWDtBQUNBLFVBQUlPLElBQUlDLE1BQUosS0FBZSxDQUFuQixFQUFzQixPQUFPUixJQUFQOztBQUV0QixXQUFLLElBQUlTLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsSUFBSUMsTUFBeEIsRUFBZ0NDLEtBQUssQ0FBckMsRUFBd0M7QUFDdEMsWUFBTUMsT0FBT0gsSUFBSUksVUFBSixDQUFlRixDQUFmLENBQWI7QUFDQTtBQUNBVCxlQUFPLENBQUNBLFFBQVEsQ0FBVCxJQUFjQSxJQUFkLEdBQXFCVSxJQUE1QjtBQUNBVixnQkFBUUEsSUFBUjtBQUNBO0FBQ0Q7QUFDRCxhQUFPQSxJQUFQO0FBQ0Q7Ozs7OztrQkF4QmtCTixPIiwiZmlsZSI6ImhtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuY2xhc3MgTm9kZSB7XG4gIGtleTogc3RyaW5nXG4gIHZhbHVlOiBhbnlcbiAgbmV4dDogP05vZGVcblxuICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIHRoaXMua2V5ID0ga2V5XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFzaE1hcCB7XG4gIHNpemU6IG51bWJlclxuICBtZW1vcnk6IEFycmF5PD9Ob2RlPlxuICBjb3VudDogbnVtYmVyXG4gIGhhc2g6IEZ1bmN0aW9uXG5cbiAgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICAgIHRoaXMubWVtb3J5ID0gbmV3IEFycmF5KHNpemUpXG4gICAgdGhpcy5jb3VudCA9IDBcbiAgfVxuXG4gIHN0YXRpYyBoYXNoKHN0cjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgaGFzaCA9IDBcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGhhc2hcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjaGFyID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgY2hhclxuICAgICAgaGFzaCAmPSBoYXNoXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgfVxuICAgIHJldHVybiBoYXNoXG4gIH1cblxuICBpbmRleChrZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuaGFzaChrZXkpICUgdGhpcy5zaXplXG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5kZXgoa2V5KVxuICAgIGNvbnN0IGhlYWQ6ID9Ob2RlID0gdGhpcy5tZW1vcnlbaW5kZXhdXG5cbiAgICBsZXQgY3VycjogP05vZGUgPSBoZWFkXG4gICAgd2hpbGUgKGN1cnIgIT0gbnVsbCkge1xuICAgICAgaWYgKGN1cnIua2V5ID09PSBrZXkpIHtcbiAgICAgICAgY3Vyci52YWx1ZSA9IHZhbHVlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGN1cnIgPSBjdXJyLm5leHRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb3VudCA9PT0gdGhpcy5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmNvdW50ICs9IDFcbiAgICBjb25zdCBuZXdOb2RlOiBOb2RlID0gbmV3IE5vZGUoa2V5LCB2YWx1ZSlcbiAgICBuZXdOb2RlLm5leHQgPSBoZWFkXG4gICAgdGhpcy5tZW1vcnlbaW5kZXhdID0gbmV3Tm9kZVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGdldChrZXk6IHN0cmluZyk6ID9hbnkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleChrZXkpXG5cbiAgICBsZXQgY3VyciA9IHRoaXMubWVtb3J5W2luZGV4XVxuICAgIHdoaWxlIChjdXJyICE9IG51bGwpIHtcbiAgICAgIGlmIChjdXJyLmtleSA9PT0ga2V5KSB7XG4gICAgICAgIHJldHVybiBjdXJyLnZhbHVlXG4gICAgICB9XG4gICAgICBjdXJyID0gY3Vyci5uZXh0XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGRlbGV0ZShrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleChrZXkpXG4gICAgY29uc3QgaGVhZCA9IHRoaXMubWVtb3J5W2luZGV4XVxuXG4gICAgaWYgKGhlYWQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAoaGVhZC5rZXkgPT09IGtleSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBoZWFkLnZhbHVlXG4gICAgICB0aGlzLm1lbW9yeVtpbmRleF0gPSBoZWFkLm5leHRcbiAgICAgIHRoaXMuY291bnQgLT0gMVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSBoZWFkXG4gICAgbGV0IGN1cnIgPSBoZWFkLm5leHRcbiAgICB3aGlsZSAoY3VyciAhPSBudWxsKSB7XG4gICAgICBpZiAoY3Vyci5rZXkgPT09IGtleSkge1xuICAgICAgICBwcmV2Lm5leHQgPSBjdXJyLm5leHRcbiAgICAgICAgdGhpcy5jb3VudCAtPSAxXG4gICAgICAgIHJldHVybiBjdXJyLnZhbHVlXG4gICAgICB9XG4gICAgICBwcmV2ID0gY3VyclxuICAgICAgY3VyciA9IGN1cnIubmV4dFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBsb2FkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY291bnQgLyB0aGlzLnNpemVcbiAgfVxufVxuIl19