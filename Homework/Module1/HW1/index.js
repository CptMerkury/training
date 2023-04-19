function createBitAccessor(array) {
    var validator = function (elemIdx, bitIndex) {
        if (elemIdx >= array.length || elemIdx < 0) {
            throw new Error("Array index out of range!");
        }
        if (bitIndex > 7) {
            throw new Error("The bit index must be less than or equal to 7");
        }
        if (bitIndex < 0) {
            throw new Error("The bit index must be more than or equal to 0");
        }
    };
    return {
        get: function (elemIdx, bitIndex) {
            validator(elemIdx, bitIndex);
            return (array[elemIdx] & (1 << bitIndex)) >> bitIndex;
        },
        set: function (elemIdx, bitIndex, bitValue) {
            validator(elemIdx, bitIndex);
            if (bitValue === 0) {
                array[elemIdx] = array[elemIdx] & ~(1 << bitIndex);
            }
            else {
                array[elemIdx] = array[elemIdx] | (1 << bitIndex);
            }
        }
    };
}
var bitAccessor = createBitAccessor(new Uint8Array([14, 13]));
// Второй параметр это порядок бита "справа-налево"
console.log(bitAccessor.get(0, 1)); // 1
console.log(bitAccessor.get(1, 1)); // 0
bitAccessor.set(0, 1, 0);
console.log(bitAccessor.get(0, 1)); // 0
