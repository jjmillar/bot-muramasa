import Groq from "groq-sdk"
import INFO from '../db/info.js'

// ✅ Ya NO instancias groq aquí arriba (eso causaba el error en build time)

let train = INFO.aiMuramasa
let threadHistory = {}
let threadTimers = {}
const ALLOWED_THREAD_ID = 2763

async function groqai(ctx) {
  const threadId = ctx.message?.message_thread_id
  if (threadId !== ALLOWED_THREAD_ID) return

  // ✅ Se instancia aquí dentro, en runtime, cuando ya existe process.env
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

  if (!threadHistory[threadId]) {
    threadHistory[threadId] = [
      { role: "user", content: train }
    ]
  }

  if (threadTimers[threadId]) {
    clearTimeout(threadTimers[threadId])
  }
  threadTimers[threadId] = setTimeout(() => {
    delete threadHistory[threadId]
    delete threadTimers[threadId]
  }, 10 * 60 * 1000)

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