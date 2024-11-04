{
    //  Never, Unknown, Nullable
    // Nullable types

    const searchFunc= (value:string) => {
        if (value) {
            console.log("Searching");
        } else {
            console.log("nothing to search");
            
        }
    };

    searchFunc("");


    // Unknown type of
    const getSpeedInMeterPerSeceond = (value:unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = (value*1000)/3600;
            console.log(`Converted Speed ${convertedSpeed}`);
        } if (typeof value === "string") {
            const [res,unit] = value.split(" ");
            const convertedSpeed = (parseInt(res)*1000)/3600;
            console.log(`Converted Speed ${convertedSpeed}`);
        }
    }










}