// Secure API service - calls YOUR backend, not Gemini directly
// This keeps your API key hidden from the browser

export const chatWithAgent = async (message: string): Promise<string> => {
  try {
    // Call YOUR backend API (not Gemini directly)
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      return "Sorry, I couldn't connect to the AI service. Please try again.";
    }

    const data = await response.json();
    return data.response || "I'm having trouble thinking right now.";

  } catch (error) {
    console.error("API Error:", error);
    return "Sorry, I couldn't connect to the AI service at the moment.";
  }
};