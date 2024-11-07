{
    //
    // Mapped types
    const matArray:number []= [1,2,3,4];
    
    const staringArray : string[]= matArray.map(num=>num.toString());
    console.log(staringArray);

    type arrayNumber = {
        height: number;
        width: number
    }

    // type arrayString = {
    //     height: string;
    //     width: string
    // }

    type arrayString = {
        [key in keyof arrayNumber] : string
    }
    
    

// Mapped types not finished




    //
}