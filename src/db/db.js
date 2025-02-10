import mongoose from "mongoose";
import DB_NAME from "../constants.js";
import dotenv from "dotenv";
dotenv.config();

const DB_URL = process.env.MONGODB_URL;

const connectToDB = async () => {
    try {
        const connection = await mongoose.connect(`${DB_URL}/${DB_NAME}`);
        console.log("Successfully connected to the Database");
        console.log(`HOST: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to DB: ${error}`);
        process.exit(1);
    }
}

export default connectToDB;