//App
import app from "./app.js";
import dotenv from 'dotenv';

async function mainRun(){
    try{
        app.listen(3000, () => {
            console.log("Server running on port 3000")
        })

    }catch(error){
        console.log('Server is not running!')
    }
}

mainRun()