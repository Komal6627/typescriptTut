class Parents{
    name:string;
    setName(name):void{
        this.name = name
    }
}

class Child extends Parents{
    // name:"Komal Killedar";
    getName(){
        return this.name
    }
}

let c1 =new Child();
c1.setName("Komal");
console.log(c1.getName());
