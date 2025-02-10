class Stack<Type> {
  items: Type[];

  constructor() {
    this.items = [];
  }

  push(value: Type): void {
    this.items.push(value);
  }

  pop(): Type {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow: Cannot pop, stack is empty");
    }

    const removedValue = this.items.pop() as Type;
    return removedValue;
  }

  peek(): Type {
    if (this.isEmpty()) {
      throw new Error("Stack is empty, cannot peek");
    }

    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items = [];
  }

  size(): number {
    return this.items.length;
  }
}

function isValid(s: string): boolean {
  let matchingBrackets = new Map<string, string>();
  matchingBrackets.set(")", "(");
  matchingBrackets.set("]", "[");
  matchingBrackets.set("}", "{");

  let stack = new Stack();

  for (const char of s) {
    if (matchingBrackets.has(char)) {
      if (stack.size() > 0 && stack.peek() === matchingBrackets.get(char)) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.isEmpty();
};

const arr = [1, 2, 3];