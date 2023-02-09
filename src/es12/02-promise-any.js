const promise1 = new Promise((resolve, reject)=> reject ("Reject"));
const promise2 = new Promise((resolve, reject)=> resolve("Resolve"));
const promise3 = new Promise((resolve, reject)=> resolve("Resolve 2"));
//any trae la primera promesa que se resuelva
Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));