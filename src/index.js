import dotenv from "dotenv";
import connectToDB from "./db/db.js";

dotenv.config();

connectToDB();


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