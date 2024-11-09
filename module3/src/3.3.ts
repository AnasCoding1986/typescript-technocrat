{
    //

    // Type guard using typeof & in

    const add = (param1:string|number,param2:string|number):string|number => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1+param2
        } else {
            return param1.toString() + param2.toString()
        }
    }

    // in guard
    type NormalUser = {
        name:string
    }

    type AdminUser= {
        name:string;
        role:'admin'
    }

    const getUser = (user:NormalUser|AdminUser) => {
        if ("role" in user) {
            return `${user.name} my duty ${user.role}`
        }else{
            `${user.name} my role normal user`
        }
    }









    //
}