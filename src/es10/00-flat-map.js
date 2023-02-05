//flat
const array = [ 1,2,3,5,
                [6,5,4,3,
                    [8,9,0,1]
                ]
              ];

console.log(array.flat(3));
console.table(array.flat(3))

//flatmap 

const array2 = [1,2,3,4,5];

console.log(array2.flatMap(n => [n, n*2]));
console.table(array2.flatMap(n => [n, n*2]));

