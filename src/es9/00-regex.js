const regex = /(\d{4})-(\d{2})-(\d{2})/; // expresión regular para representar una fecha año - mes - día

const matchers = regex.exec('2022-01-01');

console.log(matchers);
console.table(matchers);