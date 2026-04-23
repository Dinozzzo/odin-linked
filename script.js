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

    size() {
      let count = 0;
      let current = this.head;
      while (current !== null) {
        current = current.nextNode;
        count++;
      }
      return count;
    },

    head() {
      if (this.head === null) {
        return undefined;
      } else {
        return this.head.value;
      }
    },

    tail() {
      let current = this.head;
      if (this.head !== null) {
        while (current.nextNode !== null) {
          current = current.nextNode;
        }
        return current.value;
      } else {
        return undefined;
      }
    },

    at(index) {
      let current = this.head;
      let currentIndex = 0;

      while (current !== null) {
        if (currentIndex === index) {
          return current.value;
        } else {
          current = current.nextNode;
          currentIndex++;
        }
      }

      return undefined;
    },

    pop() {
      if (this.head === null) {
        return undefined;
      } else {
        const popedHead = this.head;
        this.head = this.head.nextNode;
        return popedHead.value;
      }
    },

    contains(value) {
      let current = this.head;
      while (current !== null) {
        if (current.value === value) {
          return true;
        }
        current = current.nextNode;
      }
      return false;
    },

    findIndex(value) {
      let current = this.head;
      let currentIndex = 0;
      while (current !== null) {
        if (current.value === value) {
          return currentIndex;
        }
        currentIndex++;
        current = current.nextNode;
      }
      return -1;
    },

    toString() {
      if (this.head === null) {
        return "";
      }
      let current = this.head;
      let string = "";
      while (current !== null) {
        string += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
      string += "null";
      return string;
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
