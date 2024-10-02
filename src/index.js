//App
import app from "./app.js";
//DataBase
import sequelize from "./db.js";

async function mainRun(){
    try{
        await sequelize.sync({force : false});

        app.listen(3000, () => {
            console.log("Server running on port 3000")
        })

    }catch(error){
        console.log('Server is not running!')
    }
}

mainRun()