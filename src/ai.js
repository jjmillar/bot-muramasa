import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";
import { aiMuramasa } from "./trainAi.js";

/**
 * INITIALIZE SERVICES
 */
config(); // Calls dotenv to enable use of process.env.CONST
const openai = new OpenAIApi(new Configuration({ apiKey: process.env.API_KEY })); // Create OpenAI service

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
      const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
        { role: "system", content: `${aiMuramasa.data}`},
        { role: "user", content: `${ctx.update.message.text}`}
      ],
      });
      await ctx.reply(`${res.data.choices[0].message.content}`);
    } catch (error) {
      console.log(error);
    }
  }
};

export default ai;
