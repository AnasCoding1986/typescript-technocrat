{
    //
    // Asynchronous typescript
    const craetePromise = () :Promise<string> => {
        return new Promise<string>((res, rej) => {
            const data: string = "strkj";
            if (data) {
                res(data)
            } else {
                rej("Null data")
            }
        })
    }


    const showData = async () :Promise<string> => {
        const data :string = await craetePromise();
        console.log(data);
        return data
        
    }

    // showData()

    // type Todo = {

    // }

    type Todo = {
        userId: number, 
        id: number, 
        title: string, 
        completed: boolean
    }

    const nFetch = async():Promise<Todo> => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const res:Todo = await data.json();
        console.log(res);
        
        return res
    }


    nFetch()


    //
}