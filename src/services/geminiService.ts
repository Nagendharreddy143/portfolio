// Simplified Gemini API using REST endpoint
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

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
    // Use REST API directly with correct model name
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemma-3-1b-it:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: SYSTEM_INSTRUCTION + '\n\nUser: ' + message
            }]
          }]
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API Error:", errorData);
      return "Sorry, I couldn't connect to the AI service. Please try again.";
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    return text || "I'm having trouble thinking right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I couldn't connect to the AI service at the moment.";
  }
};