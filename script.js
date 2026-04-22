function LinkedList() {
  return {
    head: null,

    append(value) {
      if (this.head === null) {
        this.head = Node(value);
      } else {
        let current = this.head;

        while (current.nextNode !== null) {
          current = current.nextNode;
        }
        current.nextNode = Node(value);
      }
    },

    prepend(value) {
      this.head = Node(value, this.head);
    },
  };
}

function Node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

const list = LinkedList();

list.append(5);
list.append(10);
list.append(26);
console.log(list);
