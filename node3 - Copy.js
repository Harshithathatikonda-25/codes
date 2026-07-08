
exports.add=(a,b)=>a+b;
exports.subtract=(a,b)=>a-b;
exports.multiply=(a,b)=>a*b;
exports.divide=(a,b)=>(b!==0?a/b:"Cannot divide by zero");

console.log("addition",math.add(5,3));
console.log("subtraction",math.subtract(8,2));
console.log("multiplication",math.multiply(3,2));
console.log("divide",math.divide(4,2));
