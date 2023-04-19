interface BitAccessor {
    get(elemIdx: number, bitIndex: number): number,
    set(elemIdx: number, bitIndex: number, bitValue: number): void,
}

function createBitAccessor(array: Uint8Array): BitAccessor {

    const validator = (elemIdx: number, bitIndex: number) => {
        if (elemIdx >= array.length || elemIdx < 0) {
            throw new Error("Array index out of range!");
        }
        if (bitIndex > 0b111) {
            throw new Error("The bit index must be less than or equal to 7");
        }
        if (bitIndex < 0b0) {
            throw new Error("The bit index must be more than or equal to 0");
        }
    }

    return {
        get(elemIdx, bitIndex):  number {
            validator(elemIdx, bitIndex)
            return (array[elemIdx] & (0b1 << bitIndex)) >> bitIndex;
        },
        set(elemIdx, bitIndex, bitValue): void {
            validator(elemIdx, bitIndex)
            if (bitValue === 0) {
                array[elemIdx] = array[elemIdx] & ~(0b1 << bitIndex);
            } else {
                array[elemIdx] = array[elemIdx] | (0b1 << bitIndex);
            }
        }
    }

}

const bitAccessor = createBitAccessor(new Uint8Array([0b1110, 0b1101]));

// Второй параметр это порядок бита "справа-налево"
console.log(bitAccessor.get(0, 1)); // 1
console.log(bitAccessor.get(1, 1)); // 0
bitAccessor.set(0, 1, 0);
console.log(bitAccessor.get(0, 1)); // 0