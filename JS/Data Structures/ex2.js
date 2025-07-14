class UniqueArray {
  constructor() {
    this.items = [];
  }

  // Deep equality check using JSON.stringify
  _isEqual(a, b) {
    // Handle primitives and functions (reference equality is OK)
    if (a === b) return true;

    // Handle NaN
    if (
      typeof a === "number" &&
      typeof b === "number" &&
      isNaN(a) &&
      isNaN(b)
    ) {
      return true;
    }

    return JSON.stringify(a) === JSON.stringify(b);
  }

  exists(item) {
    return this.items.some((existing) => this._isEqual(existing, item));
  }

  add(item) {
    if (!this.exists(item)) {
      this.items.push(item);
    }
  }

  get(index) {
    return index >= 0 && index < this.items.length ? this.items[index] : -1;
  }

  showAll() {
    console.log(this.items);
  }
}
const ua = new UniqueArray();


ua.add(42);
ua.add(42); // duplicate
ua.add("hello");
ua.add("hello"); // duplicate
ua.add(true);
ua.add(false);
ua.add(false); // duplicate

ua.showAll();
// Expected: [42, "hello", true, false]

console.log(ua.exists(42));      // true
console.log(ua.exists("hello")); // true
console.log(ua.exists("world")); // false

ua.add({ x: 1 });
ua.add({ x: 1 }); // deep duplicate
ua.add({ x: 2 });
ua.add([1, 2]);
ua.add([1, 2]);   // duplicate

ua.showAll();
// Expected: [..., { x: 1 }, { x: 2 }, [1, 2]]

console.log(ua.exists({ x: 1 }));   // true
console.log(ua.exists({ x: 3 }));   // false
console.log(ua.exists([1, 2]));     // true
console.log(ua.exists([2, 1]));     // false

console.log(ua.get(0));     // 42
console.log(ua.get(3));     // false
console.log(ua.get(100));   // -1 (out of bounds)
ua.add({ a: 1, b: 2 });
ua.add({ b: 2, a: 1 });  // will be added if using JSON.stringify() (order matters)

ua.showAll();
// Expected: [..., { a: 1, b: 2 }, { b: 2, a: 1 }]  → JSON.stringify sees them as different
