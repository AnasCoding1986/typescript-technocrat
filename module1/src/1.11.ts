{
    // Ternari, Optional Chaining & Nullish Coalescing
    const age:number = 15;
    const isAdult = age>=18 ? "adult" : "not adult";
    console.log({isAdult});

    // Optional Chaining
    type User = {
        name: string,
        address: {
            city: string,
            road: string,
            presentAdd: string,
            permanentAdd?: string
        }
    }

    const user: User = {
        name: "ki",
        address: {
            road: "Sylhet",
            city: "Sodor",
            presentAdd: "loi"
        }
    }

    const permanentAdd = user?.address?.permanentAdd ?? "No permanent addd";
    console.log({permanentAdd});
    

}