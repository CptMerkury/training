const createBitGetter = (array) => {
    return {
        get(elem, pos) {
            if ((array[elem] & (1 << pos)) !== 0) {
                return 1
            }
            return 0
        },
        set(elem, pos, value) {
            if ((array[elem] & (1 << pos)) !== value) {
                array[elem] = array[elem] ^ (1 << pos)
            }
            return 'Is Set';
        },
        show() {
            array.forEach(item => console.log(item.toString(2)))
            return 'Is Show'
        }
    }
}

const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101, 0b1010]));


// Второй параметр это порядок бита "справа-налево"
console.log(bitGetter.show());
console.log(bitGetter.get(0, 1)); // 1
console.log(bitGetter.get(1, 1)); // 0
console.log(bitGetter.get(2, 2)); // 0
console.log(bitGetter.set(0, 1, 0)); // 0
console.log(bitGetter.set(1, 1, 1)); // 0
console.log(bitGetter.set(2, 2, 1)); // 0
console.log(bitGetter.show());