
const ImageKit = require("imagekit");


const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY.trim(),  
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY.trim(),
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT.trim()
});

async function uploadFile(fileBuffer, filename) {
    try {
        const response = await imagekit.upload({
            file: fileBuffer,             fileName: filename,
            folder: "cohort-ai-social",
            useUniqueFileName: false
        });
        return response;
    } catch (error) {
        console.error("Image Upload Error Details:", error);
        throw error;
    }
}

module.exports = uploadFile;