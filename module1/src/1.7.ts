{
    const bros: string[] = ["ki", "Bi", "ci"];
    const bros1: string[] = ["ai", "xi", "zi"];
    bros.push(...bros1)

    const greetFriends=(...frieds:string[]) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        frieds.forEach((frnd:String)=>console.log(`Hi ${frnd}`)
        )
    }
    greetFriends("ki","vi","li","fr")




}
