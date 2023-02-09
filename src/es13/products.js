import fetch from "node-fetch";
//con el top level await ya no es necesario usar el async
const response = await fetch(' https://api.escuelajs.co/api/v1/products');

const products = await response.json();
//console.log(products);
export { products };
