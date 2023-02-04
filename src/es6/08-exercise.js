import { getData } from "./api.js";
//sin el default se debe agregar los { }
getData()
.then(response => console.log(response))
.catch(err => console.log(err));