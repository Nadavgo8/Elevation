class UniqueArray {
  constructor() {
    this.uniqueStuff = []; // stores items in order
    this._set = new Set(); // used for fast O(1) lookup
  }

  add(item) {
    if (!this._set.has(item)) {
      this._set.add(item);
      this.uniqueStuff.push(item);
    }
  }

  showAll() {
    console.log(this.uniqueStuff);
  }

  exists(item) {
    return this._set.has(item); // O(1) lookup
  }

  get(index) {
    return this.uniqueStuff[index] ?? -1;
  }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
uniqueStuff.showAll() //prints ["toy"]

