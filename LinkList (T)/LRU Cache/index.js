function LRUCache(capacity) {
  class Node {
    constructor(key, value, next = null, prev = null) {
      this.key = key;
      this.value = value;
      this.next = next;
      this.prev = prev;
    }
  }

  const head = new Node(-1, -1);
  const tail = new Node(-1, -1);
  const map = new Map();
  head.next = tail;
  tail.prev = head;
  let size = 0;

  function addNodeAtTail(nn) {
    nn.next = tail;
    tail.prev.next = nn;
    nn.prev = tail.prev;
    tail.prev = nn;
  }

  function removeNode(n) {
    n.next.prev = n.prev;
    n.prev.next = n.next;
    n.next = null;
    n.prev = null;
  }

  return {
    // get function returns an integer
    get: function (key) {
      const node = map.get(key);
      if (node) {
        const value = node.value;
        removeNode(node);
        const nn = new Node(key, value);
        addNodeAtTail(nn);
        map.set(key, nn);
        return value;
      } else {
        return -1;
      }
    },
    // set returns nothing
    set: function (key, value) {
      const node = map.get(key);
      const nn = new Node(key, value);
      if (node) {
        removeNode(node);
        addNodeAtTail(nn);
      } else {
        if (size < capacity) {
          addNodeAtTail(nn);
          size++;
        } else {
          const nKey = head.next.key;
          map.delete(nKey);
          removeNode(head.next);
          addNodeAtTail(nn);
        }
      }
      map.set(key, nn);
    },
  };
}

const lru = new LRUCache(10);
lru.set(2, 1);
lru.set(2, 2);
lru.get(2);
