function users<T>(data:T):T {
    return data
}
console.log(users({name:"Komal", age:25}));
console.log(users({name:"Komal", age:25}).age);
console.log("Komal");
console.log(26);
