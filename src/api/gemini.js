// This function will be used by our new AI commands to call the Gemini API.
export const callGemini = async (prompt) => {
const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ role: "user", parts: [{ text: prompt }] }]
            })
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorBody}`);
        }

        const result = await response.json();
        
        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            return result.candidates[0].content.parts[0].text;
        } else {
            console.error("Unexpected API response structure:", result);
            if (result.promptFeedback && result.promptFeedback.blockReason) {
                 return `Request blocked: ${result.promptFeedback.blockReason}. Please adjust your prompt.`;
            }
            return "Could not get a response. Please try again.";
        }
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return `An error occurred: ${error.message}`;
    }
};
