{
    //
    // Constraint using key of
    type Vehicle = {
        bike: string,
        car: string,
        ship: string
    }

    type res1 = "bike" | "car" | "ship";

    type res2 = keyof Vehicle;

    const user = {
        name: "tretret",
        id: "312321",
        place: "Sylhet"
    }

    const getValue = <x,y extends keyof x>(obj:x,key:y) => {
        return obj[key]
    }

    getValue(user,"name")








    //
}