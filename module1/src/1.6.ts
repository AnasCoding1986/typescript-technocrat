// Learning function
// 1. Normal function
// 1. Array function

function add(num1:number,num2:number): number {
    return num1 + num2
}
add(1,2);

const addArrow = (num1: number, num2: number) : number => num1 + num2;

// object --> function --> method

const poorUser = {
    name: "Anas",
    balance: 0,
    addBalance(balance:number): string{
        return (`My new balance is: ${this.balance + balance}`) ;
    }
}

const arr: number[] = [2,4,10];
const newArr:number[] = arr.map((elm:number):number=>elm*elm)