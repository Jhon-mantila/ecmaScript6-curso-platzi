//pasar un array a objecto. con fromEntries
const entries = new Map([["name", "jhon"], ["age", 36]]);
console.log(entries);
console.log(Object.fromEntries(entries));
