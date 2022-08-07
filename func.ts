function cal(a:number, b?:number):number {
    return b?a + b:a
}

console.log(cal(10,20));

function hello():string {
    return "Hello"
}
console.log(hello());

