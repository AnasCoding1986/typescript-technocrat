{
    // Destructuring
    type Name = {
        firstName: string;
        middleName: string;
        lastName: string;
    };

    type User = {
        id: number;
        name: Name;
        contactNo: string;
        address: string;
    };

    // Create the user object
    const user: User = {
        id: 345,
        name: {
            firstName: "abul",
            middleName: "kaul",
            lastName: "ubul",
        },
        contactNo: "014848844",
        address: "uganda",
    };

    const {contactNo, name:{firstName,middleName}} = user;

    const myFriends = ["ki","ai","ci","mi","ri"];
    const [ , ,c, ,...rest] = myFriends;

    console.log(c);
    console.log(rest);
    


}      