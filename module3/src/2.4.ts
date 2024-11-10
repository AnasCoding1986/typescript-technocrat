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
            console.log(`${this.name} make sound`);
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