function receber(a, b, c) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    console.log(`[${a},${c}]`);
    } else if (typeof a === 'number' && typeof b === 'number') {
    console.log(`[${a},${b}]`);
    }
}

receber(1, 3);
