// enahced object literals
// anteriormente
function newUser(user, age, country){

    return {
        user : user,
        age, age,
        country: country
    }
}
//Si tienen el mismo nombre se deja sin problema o combinar con la forma anterior
function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("jhon", 36, "CO", 1));