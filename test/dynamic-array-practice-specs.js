
const { expect } = require('chai');

const DynamicArray = require('../dynamic-array.js');


describe('Dynamic array', () => {
    let dynamicArray;
    beforeEach(function () {
        dynamicArray = new DynamicArray();
    });

    it('can instantiate a dynamic array object with lenght is 0, capacity as default', () => {
        expect(dynamicArray.length).to.equal(0);
        expect(dynamicArray.capacity).to.equal(3);
        expect(dynamicArray.data instanceof Array).to.eq(true);
        expect(dynamicArray.data.length).to.deep.equal(3);
    });

    it('can instantiate array with different capacity', () => {
        dynamicArray = new DynamicArray(8);
        expect(dynamicArray.length).to.equal(0);
        expect(dynamicArray.capacity).to.equal(8);
        expect(dynamicArray.data instanceof Array).to.eq(true);
        expect(dynamicArray.data.length).to.deep.equal(8);
    });

    it('can read value by index in the array', () => {
        expect(dynamicArray.getValue(0)).to.be.eq(undefined);
        dynamicArray.add(1);
        expect(dynamicArray.getValue(0)).to.be.eq(1);
        expect(dynamicArray.getValue(1)).to.be.eq(undefined);
        dynamicArray.add(2);
        expect(dynamicArray.getValue(0)).to.be.eq(2);
        expect(dynamicArray.getValue(1)).to.be.eq(1);
        expect(dynamicArray.getValue(2)).to.be.eq(undefined);
    });

    it('add value when the lengh is within the capacity', () => {
        dynamicArray.add(1);
        expect(dynamicArray.getValue(0)).to.be.eq(1);
        expect(dynamicArray.getLength()).to.be.eq(1);

        dynamicArray.add(2);
        expect(dynamicArray.getValue(0)).to.be.eq(2);
        expect(dynamicArray.getLength()).to.be.eq(2);

        dynamicArray.add(3);
        expect(dynamicArray.getValue(0)).to.be.eq(3);
        expect(dynamicArray.getLength()).to.be.eq(3);

    });

    it('add value when the length exceeded the capacity', () => {
        expect(dynamicArray.getValue(0)).to.be.eq(undefined);
        expect(dynamicArray.getLength()).to.be.eq(0);
        expect(dynamicArray.capacity).to.equal(3);
        
        dynamicArray.add(1);
        expect(dynamicArray.getValue(0)).to.be.eq(1);
        expect(dynamicArray.getLength()).to.be.eq(1);
        expect(dynamicArray.capacity).to.equal(3);
        
        dynamicArray.add(2);
        expect(dynamicArray.getValue(0)).to.be.eq(2);
        expect(dynamicArray.getLength()).to.be.eq(2);
        expect(dynamicArray.capacity).to.equal(3);
        
        dynamicArray.add(3);
        expect(dynamicArray.getValue(0)).to.be.eq(3);
        expect(dynamicArray.getLength()).to.be.eq(3);
        expect(dynamicArray.capacity).to.equal(3);
        
        dynamicArray.add(4);
        expect(dynamicArray.getValue(0)).to.be.eq(4);
        expect(dynamicArray.getLength()).to.be.eq(4);
        expect(dynamicArray.capacity).to.equal(6);
    });
});

