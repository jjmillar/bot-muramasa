import OpenAI from "openai"
import INFO from "./info.js"
import 'dotenv/config'

/**
 * INITIALIZE SERVICES
 */
const openai = new OpenAI({ apiKey: process.env.API_KEY }) // Create OpenAI service

/**
 * FUNCTION FOR AI THREAD
 * @param {object} ctx - context from the message on telegram
 */
async function ai(ctx) {
  if (
    ctx.update.message.text.includes("oye helio") ||
    ctx.update.message.text.includes("Oye helio") === true
  ) {
    try {
      const res = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
        { role: "system", content: `${INFO.aiMuramasa}`},
        { role: "user", content: `${ctx.update.message.text}`}
      ],
      });
      await ctx.reply(`${res.choices[0].message.content}`);
    } catch (error) {
      console.log(error);
    }
  }
};

export default ai;