class LRU {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
    }
  
    getItem(key) {
      const item = this.cache.get(key);
  
      // Map keeps track of insertion order, this will refresh the item
      if (item) {
        this.cache.delete(key);
        this.cache.set(key, item);
      }
      return item;
    }
  
    putItem(key, val) {
      // delete to refresh the insertion order
      if (this.cache.has(key)) {
        this.cache.delete(key);
      }
      // evict the oldest item in the cache
      else if (this.cache.size == this.capacity) {
        this.cache.delete(this.oldestItem);
      }
  
      this.cache.set(key, val);
    }
  
    // this will provide the feature to call object as attribute and not function
    get oldestItem() {
      return this.cache.keys().next().value;
    }
}

const cache = new LRU(5);
cache.putItem('a', 1);
cache.putItem('b', 2);
cache.putItem('c', 3);
cache.putItem('d', 4);
cache.putItem('e', 5);
cache.getItem('a');
console.log()