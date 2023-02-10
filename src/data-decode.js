const mantissaTable = new Uint32Array(2048);
const exponentTable = new Uint32Array(64);
const offsetTable = new Uint32Array(64);

const buffer = new ArrayBuffer(4);
const floatView = new Float32Array(buffer);
const uint32View = new Uint32Array(buffer);

mantissaTable[0] = 0;

for(let i = 1; i < 1024; ++i) {
    convertMantissa(i)
}

for(let i = 1024; i < 2048; ++i) {
    mantissaTable[i] = 0x38000000 + ((i - 1024) << 13);
}

//Generate Exponent Table
exponentTable[0] = 0;
exponentTable[32] = 0x80000000;
for(let i = 1; i < 31; ++i) {
    exponentTable[i] = i << 23;
}
for(let i = 33; i < 63; ++i) {
    exponentTable[i] = 0x80000000 + ((i - 32) << 23);
}
exponentTable[31] = 0x47800000;
exponentTable[63] = 0xc7800000;

offsetTable[0] = 0;
for(let i = 1; i < 64; ++i) {
    if (i === 32) {
        offsetTable[i] = 0;
    } else {
        offsetTable[i] = 1024;
    }
}

function convertMantissa(short){
    let m = short << 13;
    let e = 0
    while(!(m&0x00800000)){
        // While not normalized
        e -= 0x00800000;
        // Decrement exponent (1<<23)
        m <<= 1;
        // Shift mantissa
    }
    m &=~ 0x00800000;
    // Clear leading 1 bit
    e += 0x38800000;
    // Adjust bias ((127-14)<<23)
    return m | e;
}

/**
 * convert a half float number bits to a number.
 * @param {number} float16bits - half float number bits
 * @returns {number} double float
 */
function fromHalfFloat(float16bits) {
    const m = float16bits >> 10;
    uint32View[0] = mantissaTable[offsetTable[m] + (float16bits & 0x3ff)] + exponentTable[m];
    return floatView[0];
}


module.exports = {
    fromHalfFloat
}
