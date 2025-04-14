import { GoogleGenerativeAI } from "@google/generative-ai"
import INFO from './info.js'
import 'dotenv/config'

const project = process.env.GEMINI_PROJECT_ID // Reemplaza con tu ID de proyecto
const location = 'us-central1'
const apiKey = process.env.GEMINI_API_KEY // Reemplaza con la clave de API que creaste
let train = INFO.aiMuramasa // Prompt inicial para el modelo

// Initialize the GoogleGenerativeAI client instance
const genAI = new GoogleGenerativeAI(apiKey)

// Get the generative model (e.g., gemini-pro)
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function geminiai(ctx) {
    if (
      ctx.update.message.text.includes("oye helio") ||
      ctx.update.message.text.includes("Oye helio") === true
    ) {
      try {
        const result = await model.generateContent(train + ctx.update.message.text)
        const response = result.response
        await ctx.reply(response.text())
      } catch (error) {
        console.log(error)
      }
    }
  }
  
  export default geminiai