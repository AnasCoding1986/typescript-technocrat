{
    //
    // Inheritance in OOP


    class Parent {
        name:string;
        age:number;
        address:string;
        constructor(name:string,age:number,address:string){
            this.name=name,
            this.age=age,
            this.address=address
        }
        sleeoHour(hour:number):string{
            return `${this.name} sleep daily ${hour}`
        }
    }

    class Student extends Parent{
            constructor( name:string,age:number,address:string){
                super(name,age,address)
            }

    }

    const student1 = new Student("sara", 5, "Sylhet")

    class Teacher extends Parent {
        designation:string;
        constructor( name:string, age:number, address:string, designation:string){
            super(name,age,address)
            this.designation=designation
        }
        takeClass(hour:number):string{
            return `${this.name} take ${hour} hour class daily`
        }
    }

    const teacher1 = new Teacher("sara", 5, "Sylhet", "professor")
    const teacher2 = new Teacher("sara", 5, "Sylhet", "professor")
    const teacher3 = new Teacher("sara", 5, "Sylhet", "professor")
    const teacher4 = new Teacher("sara", 5, "Sylhet", "professor")








    //
}