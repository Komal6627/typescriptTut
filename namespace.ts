// <refrence path="./utils.ts" />
namespace UserUtils{
    export class Users extends Parents{
        getName(){
            return "Komal Killedar"
        }
    }
}

let u1 = new UserUtils.Users();
u1.setName("Komal");
console.log(u1.getName());
