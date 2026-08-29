const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function invokeGeminiAi() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: "Hello Gemini, explain what an interview is.",
    });

    console.log(response.text);
    return response.text;

  } catch (error) {
    console.error("Error invoking Gemini AI:", error);
    throw error;
  }
}

module.exports = invokeGeminiAi;