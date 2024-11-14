{
    //
    // Type guard using instance of
    class Animal {
        name:string;
        species:string;
        constructor(name:string,species:string){
            this.name=name,
            this.species=species
        }
        makeSound(){
            console.log(`${this.name} make sound 11/11 demo comment`);
            console.log(`${this.name} make sound 12/11 demo comment`);
            console.log(`${this.name} make sound 13/11 demo comment`);
            console.log(`${this.name} make sound 13/11/2 demo comment`);
            console.log(`${this.name} make sound 13/11/2/11 demo comment`);
            console.log(`${this.name} make sound 14/11 demo comment`);
        }
    }

    const getSound = (dog:Animal) => {
        if (dog instanceof Dog) {
            dog.makeBurg
        }
    }

    class Dog extends Animal{
        constructor(name:string,species:string){
            super(name,species)
        }
        makeBurg(){
            return(`${this.name} sounds gheu`)
        }
    }

    class Cat extends Animal{
        constructor(name:string,species:string){
            super(name,species)
        }
        makeMeu(){
            return(`${this.name} sounds Meu`)
        }
    }









    //
}