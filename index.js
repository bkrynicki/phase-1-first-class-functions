function receivesAFunction(callback){
    return callback();
}
const hello = () => 'hello, world'
function returnsANamedFunction(){
    return hello;
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log("Hello, World")
    }
}