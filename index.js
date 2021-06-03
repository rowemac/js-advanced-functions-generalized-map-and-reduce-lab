// Add your functions here
function map(array, fn) {
    return array.map(fn);
}

function reduce(array, fn, startingValue) {
    if(startingValue) {
        return array.reduce(fn) + startingValue;
    } else {
       return array.reduce(fn)
    }
}