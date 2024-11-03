{

    // union and intersection types
    
    // type FrontEndDeveloper = 'fakibazdev' | 'juniordev';
    // type FullStackDeveloper = 'frontendev' | 'expertdev';

    // type Develper = FrontEndDeveloper | FullStackDeveloper;

    // const newDev : FrontEndDeveloper = 'fakibazdev';

    // const dynamDev : Develper = 'expertdev';

    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: "male" | "female";
    //     bloodGroup: "O+" | "A+" | "AB+"
    // }

    // const user1 : User = {
    //     name: "ki",
    //     gender: "male",
    //     bloodGroup: "A+"
    // }

    type FrontDev = {
        skills: string[];
        designation1: "frontDev"
    };

    type BackDev = {
        skills: string[];
        designation2: "backDev"
    };

    type FullStackDeveloper = FrontDev & BackDev;

    const superDev : FullStackDeveloper = {
        skills: ["html", "css"],
        designation1: "frontDev",
        designation2: "backDev"
    }








}