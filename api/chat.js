// Vercel Serverless Function - Secure API endpoint
// This keeps your API key hidden from the browser

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Get the API key from environment variable (server-side only)
    const apiKey = process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    // Get the message from the request body
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    const SYSTEM_INSTRUCTION = `
You are Nani AI, an AI assistant for Nagendhar's portfolio website. 
Nagendhar is a Full-Stack Developer with 10+ months of experience specializing in React Native, Java Spring Boot, and AI automation.
He has worked at Firstbench.ai (Aspirant.ai) and Klyrodrift Technologies (Xploar.ai), building AI-powered learning platforms for UPSC aspirants.
He's currently freelancing with his team at Tripple Factor, building websites for local businesses.
Answer questions about his skills, projects, and experience concisely and professionally.
Keep answers under 50 words unless asked for more detail.
If asked about contact info, direct them to the contact form or email reddynagendhar942@gmail.com.
`;

    try {
        // Call Gemini API from the server (API key is hidden)
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
            console.error('Gemini API Error:', errorData);
            return res.status(response.status).json({
                error: 'Failed to get response from AI service'
            });
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) {
            return res.status(500).json({
                error: 'No response from AI service'
            });
        }

        // Return the AI response
        return res.status(200).json({ response: text });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            error: 'Internal server error'
        });
    }
}
