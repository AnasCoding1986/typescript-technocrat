"use strict";
{
    const bros = ["ki", "Bi", "ci"];
    const bros1 = ["ai", "xi", "zi"];
    bros.push(...bros1);
    const greetFriends = (...frieds) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        frieds.forEach((frnd) => console.log(`Hi ${frnd}`));
    };
    greetFriends("ki", "vi", "li", "fr");
}
