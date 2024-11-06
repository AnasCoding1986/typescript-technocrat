{
    //

    // Interface generic
    interface Developer<T> {
        name: string,
        computer: {
            brand: string,
            model: string,releaseYear: number
        },
        smartWatch: T
    };

    type emilab = {
        brand: string,
        model: string,
        display: string,
    }

    interface apple {
        brand: string,
        model: string,
        heartTrack: boolean,
        sleepTrack: boolean
    }

    const poorDeveloper : Developer<emilab> = {
        name: "hdy",
        computer: {
            brand: "csdjcbs",
            model: "scnsb",
            releaseYear: 4234
        },
        smartWatch: {
            brand: "csdjcbs",
            model: "scnsb",
            display: "eruh"
        }
    };

    const richDeveloper : Developer<apple> = {
        name: "hdy",
        computer: {
            brand: "csdjcbs",
            model: "scnsb",
            releaseYear: 4234
        },
        smartWatch: {
            brand: "csdjcbs",
            model: "scnsb",
            heartTrack: true,
            sleepTrack: true
        }
    }








    //
}