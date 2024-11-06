{
//

let anything : any ;
anything = "hi";
anything = 222;
(anything as number)

const kgToGm = (value: string | number) : string | number | undefined => {
    if (typeof value === "string") {
        const res1 = parseInt(value) * 1000;
        return (`resul is ${res1}`)
    } else if (typeof value === "number") {
        const res2 = (value * 1000);
        return res2
    } 
}

const val1 = kgToGm(20);
const val2 = kgToGm("20");










//
}