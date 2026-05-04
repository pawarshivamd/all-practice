require('dotenv').config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

const generateCaption = async (base64Image) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",

      systemInstruction: {
        role: "system",
        parts: [
          {
            text: "Generate a short, catchy Instagram caption with emojis."
          }
        ]
      },

      contents: [
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: base64Image,
          },
        },
        {
          text: "Generate caption for this image"
        }
      ],
    });

    return response.text;

  } catch (error) {
    console.error("AI Error:", error.message);
    throw error;
  }
};

module.exports = generateCaption; 