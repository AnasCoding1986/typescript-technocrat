"use strict";
{
    // Create the user object
    const user = {
        id: 345,
        name: {
            firstName: "abul",
            middleName: "kaul",
            lastName: "ubul",
        },
        contactNo: "014848844",
        address: "uganda",
    };
    const { contactNo, name: { firstName, middleName } } = user;
    const myFriends = ["ki", "ai", "ci", "mi", "ri"];
    const [, , c, , ...rest] = myFriends;
    console.log(c);
    console.log(rest);
}
