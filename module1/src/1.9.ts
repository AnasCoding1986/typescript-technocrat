type Student = {
    name: string;
    age: number;
    contactNo?: number;
    gender: string;
    address: string 
};
 
const student1: Student = {
    name: "ki",
    age: 20,
    contactNo: 101928736,
    gender: "male",
    address: "Sylhet"
};

type User = string;
type isAdmin = boolean;

const member: User = "ki";
const isExists: isAdmin = true;

type Add = (num1:number, num2:number) => number;
const sum: Add = (num1 , num2) =>  num1 + num2;