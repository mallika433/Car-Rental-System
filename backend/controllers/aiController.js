import { generateAIResponse } from "../services/geminiAPI.js";

export const getCarRecommendation = async (req, res) => {
    try {
        const response = await generateAIResponse(req.body.prompt);
    
        return res.status(200).json({ data: response });
    } catch (error) {
        if (error.status === 429) {
            return res.status(429).json({ error: "Rate limit exceeded. Please try again later." });
        } else if (error.status === 500) {
            return res.status(500).json({ error: "Internal server error from AI service." });
        }else if (error.status === 400) {
            return res.status(400).json({ error: "Bad request. Please check your input." });
        }
    }
}