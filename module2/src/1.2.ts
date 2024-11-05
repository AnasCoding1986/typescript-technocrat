{
//
// Interface , type vs interface

type user1 = {
    name: string,
    id: number
} 
interface user2 {
    name: string,
    id: number
}

const person : user2 = {
    name: "li",
    id: 12
}

// intesection

type userWithRole1 = user1 & {role:string};
interface userWithRole2 extends user2 {role:string};


// interface in array
type rool1 = number[];

interface rool2 {
    [index: number] : number
}

const one : rool1 = [1,2,3]









//
}