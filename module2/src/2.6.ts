{
    //
    // Constraints in typescript
    const addCourseToStudent = <T extends { id:number, name:string,email:string}>(student:T) => {
        const course = "Next level web development course";
        return {
            ...student,
            course,
        }
    }

    const sudent1 = addCourseToStudent({
        id:222,
        name:"dfdf",
        email:"a@d.com",
        devTypes:"oled"
    })

    const sudent2 = addCourseToStudent({
        id:222,
        name:"dfdf",
        email:"a@d.com",
        devTypes:"oled"
    })















    //
}