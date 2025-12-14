import { GoogleGenAI } from "@google/genai";

// Initialize the client.
// Note: In a production environment, API calls should be proxied through a backend 
// to protect the API key. For this demo, we assume the environment variable is available.
const apiKey = 'AIzaSyCe5xve0ot6-NvMAmmyDwGMjqDlld_sbZQ';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are Nani AI, an AI assistant for Nagendhar's portfolio website. 
Nagendhar is a Full-Stack Developer with 10+ months of experience specializing in React Native, Java Spring Boot, and AI automation.
He has worked at Firstbench.ai (Aspirant.ai) and Klyrodrift Technologies (Xploar.ai), building AI-powered learning platforms for UPSC aspirants.
He's currently freelancing with his team at Tripple Factor, building websites for local businesses.
Answer questions about his skills, projects, and experience concisely and professionally.
Keep answers under 50 words unless asked for more detail.
If asked about contact info, direct them to the contact form or email reddynagendhar942@gmail.com.
`;

export const chatWithAgent = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm having trouble thinking right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I couldn't connect to the AI service at the moment.";
  }
};