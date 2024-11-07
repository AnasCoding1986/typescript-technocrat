{
    //
    // Conditional types
    type Sheikh = {
        car: string,
        bike: string,
        ship: string
    };

    type CheckVehicale <T> = T extends keyof Sheikh ?true:false;
    type Checktructor = CheckVehicale<"tructor">












    //
}