import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_KEY_NAME,
    api_key: process.env.CLOUDINARY_API_key,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const fileUploader = async (localFilePath) => {
    try {
        if (!fileUploader) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log(`File uploaded successfully ${response}`);
        return response;
    } catch (error) {
        fs.unlinkSync(fileUploader);
        return null;
    }
}

export {fileUploader};