// Function with generic

const createArray = (param : string) : string[] => {
    return [param]
}

const createArrayWithGeneric = <T>(param:T):T[]=>{
    return [param]
}
type UCser = {
    id:number;
    name:string
}
const user1 = createArrayWithGeneric<UCser>({id:1,name:"kofke"})

createArrayWithGeneric<string>("Bangladesh")
createArrayWithGeneric<boolean>(true)

// const createArrayWithTuple = <T,Q>(num1:T, num2:Q):[T:Q] => {
//     return [num1,num2]
// }

const createArrayWithTuple = <T, Q>(num1: T, num2: Q): [T, Q] => {
    return [num1, num2];
}

