interface usersType{
    name:String,
    age:number,
    city:String,
    getName:()=>string
}
var user:usersType = {
    name: "Komal",
    age: 26,
    city: "Pune",
    getName:function() 
    {
        return "Komal Killedar"
    }
};

console.log(user);
console.log(user.getName());

