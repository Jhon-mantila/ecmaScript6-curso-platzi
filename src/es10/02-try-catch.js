try {
    hello();
} catch (error) {
    console.log('ERRORRRRRRR');
    console.log(error);
}

try {
    anotherFn();
} catch {
    console.log('Error si necesidad de parar el parametro (error)');
}