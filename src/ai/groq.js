import Groq from "groq-sdk"
import INFO from '../db/info.js'

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

let train = INFO.aiMuramasa // Prompt inicial para el modelo
let threadHistory = {} // Historial de conversación
let threadTimers = {} // Temporizadores para cada hilo
const ALLOWED_THREAD_ID = 2763 // ID del hilo permitido

async function groqai(ctx) {
  const threadId = ctx.message?.message_thread_id
  if (threadId !== ALLOWED_THREAD_ID) return

  // Inicializa el historial si es la primera vez
  if (!threadHistory[threadId]) {
    threadHistory[threadId] = [
      { role: "user", content: train }
    ]
  }

  // Reinicia el temporizador cada vez que llega un mensaje
  if (threadTimers[threadId]) {
    clearTimeout(threadTimers[threadId])
  }
  threadTimers[threadId] = setTimeout(() => {
    delete threadHistory[threadId]
    delete threadTimers[threadId]
  }, 10 * 60 * 1000) // 10 minutos

  // Añade el mensaje del usuario al historial
  threadHistory[threadId].push({
    role: "user",
    content: ctx.message.text
  })

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: threadHistory[threadId],
      model: "llama-3.3-70b-versatile"
    })
    
    const response = chatCompletion.choices[0]?.message?.content

    // Añade la respuesta del bot al historial
    threadHistory[threadId].push({
      role: "assistant",
      content: response
    })

    await ctx.reply(response, { message_thread_id: threadId })
  } catch (error) {
    console.log(error)
    await ctx.reply('Ocurrió un error al procesar tu mensaje.', { message_thread_id: threadId })
  }
}

export default groqai
