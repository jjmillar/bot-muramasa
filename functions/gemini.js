import { GoogleGenerativeAI } from "@google/generative-ai"
import INFO from './info.js'
import 'dotenv/config'

const apiKey = process.env.GEMINI_API_KEY // Reemplaza con la clave de API que creaste
let train = INFO.aiMuramasa // Prompt inicial para el modelo
let threadHistory = {} // Historial de conversación
const ALLOWED_THREAD_ID = 2763 // ID del hilo permitido

// Initialize the GoogleGenerativeAI client instance
const genAI = new GoogleGenerativeAI(apiKey)

// Get the generative model (e.g., gemini-pro)
const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

async function geminiai(ctx) {
    // Solo responde si el mensaje está en el thread permitido
  const threadId = ctx.message?.message_thread_id
  if (threadId !== ALLOWED_THREAD_ID) return

  // Inicializa el historial si es la primera vez
  if (!threadHistory[threadId]) {
    threadHistory[threadId] = [train]
  }

  // Agrega el mensaje del usuario al historial
  threadHistory[threadId].push(`Usuario: ${ctx.message.text}`)

  // Prepara el prompt con el historial
  const prompt = threadHistory[threadId].join('\n')

  try {
    const result = await model.generateContent([ { role: "user", parts: [ { text: prompt } ] } ])
    const response = await result.response.text()

    // Agrega la respuesta del bot al historial
    threadHistory[threadId].push(`Bot: ${response}`)

    await ctx.reply(response, { message_thread_id: threadId })
  } catch (error) {
    console.log(error)
    await ctx.reply('Ocurrió un error al procesar tu mensaje.', { message_thread_id: threadId })
  }
  }
  
  export default geminiai