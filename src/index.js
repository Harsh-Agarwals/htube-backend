import dotenv from "dotenv";
import connectToDB from "./db/db.js";
import app from './app.js'

dotenv.config({
    path: "./env"
});

const PORT = process.env.PORT || 4000;

connectToDB()
.then(
    () => {
        app.listen(PORT, () => {
            console.log(`Server UP and RUNNING at PORT ${PORT}!`);
        })
    }
)
.catch((err) => {
    console.error(`Error: ${err}`);
})

// async function connectToDB() {
//     try {
//         await mongoose.connect(`${DB_URL}/${DB_NAME}`);
//         console.log("Successfully connected to DB");
//         app.on("error", (e) => {
//             console.error(`Error ${e}`);
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server UP and RUNNING at PORT ${process.env.PORT}`);    
//         })
//     } catch (error) {
//         console.log(`Error connecting to DB: ${error}`);    
//     }
// }

// connectToDB();