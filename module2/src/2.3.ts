{
//
type ArrayBool = Array<boolean>;
// declare generic array
type genericArray<T> = Array<T>;

const rollNum : genericArray<number> = [1,2,3];
const rollStr : genericArray<string> = ["cd","ht","lo"];
const rollBool : ArrayBool = [true,false,false];

// geenric object

const user : genericArray<{name:string,id:number}> = [
    {name:"lf",id:23},
    {name:"hf",id:29},
]

// geenric tuple

type genericTuple<x,y> = [x,y];

const user3 : genericTuple<string,number>= [
    'ns', 78
]


const user4 : genericTuple<string,{name:string,pohne:number}>= [
    'ns', {
        name: "kdjd",
        pohne: 876768
    }
]





//
}