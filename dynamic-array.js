// SPEC FOR DYNAMIC ARRAY
// https://www.interviewcake.com/concept/java/dynamic-array#:~:text=A%20dynamic%20array%20is%20an,the%20size%20ahead%20of%20time.

class DynamicArray {
    constructor(capacity=3) {
        this.length = 0;
        this.capacity = capacity;
        this.data = new Array(this.capacity);
    }

    add(value) {
        if (this.length + 1 <= this.capacity) {
            for (let i = this.length - 1; i >= 0; i --) {
                this.data[i + 1] = this.data[i];
            }
            this.data[0] = value;
            
        } else {
            // double capacity
            const doubleSize = new Array(2 * this.capacity);
            doubleSize[0] = value;
            for (let i = 0; i < this.length; i ++) {
                doubleSize[i + 1] = this.data[i];
            }
            this.data = doubleSize;
            this.capacity = this.capacity * 2;
        }
        this.length += 1;
    }

    getLength() {
        return this.length;
    }

    getValue(index) {
        return this.data[index];
    }
}


module.exports = DynamicArray;
