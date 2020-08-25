const fibonacci = function(value) {
value = parseInt(value);
if (value < 0){
    return "OOPS"
}
if (value === 1 || value ===2){
    return 1;
}
let result;
let prev = 1; 
let secondPrev = 1;

for (let i = 2; i < value; i++){
    result = prev + secondPrev;
    secondPrev = prev;
    prev = result;
}
    return result;
}

module.exports = fibonacci
