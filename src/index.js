import { Telegraf } from "telegraf";
import * as Buttons from "./utils/buttons.js";
import groqai from "./ai/groq.js";
import { welcomeMessage } from "./utils/utils.js";

function buildBot(env) {
  // .trim() elimina los \n\n que tenía el token
  const token = env.BOT_TOKEN?.trim();
  if (!token) throw new Error("BOT_TOKEN no está configurado en las variables de entorno");
  const bot = new Telegraf(token);

  /**
   * BASIC COMMANDS
   */
  bot.start(Buttons.menu);
  bot.help(Buttons.help);
  bot.on("new_chat_members", welcomeMessage);

  /**
   * INLINE BUTTONS
   */
  bot.command(["helio", "bot", "Helio"], Buttons.menu);
  bot.action("btn-back-menu", Buttons.menu);
  bot.action("btn-material", Buttons.material);
  bot.action("btn-apuntes", Buttons.apuntes);
  bot.action("btn-rrss", Buttons.rrss);
  bot.action("btn-reglamentos", Buttons.reglamentos);
  bot.action("btn-tienda", Buttons.tienda);
  bot.action("btn-salir", Buttons.salir);
  bot.action("btn-convenios", Buttons.convenios);

  /**
   * AI CALL
   */
  bot.on("text", groqai); //test 

  return bot;
}

/**
 * ES MODULE EXPORT — requerido para Cloudflare Workers
 */
export default {
  async fetch(request, env, ctx) {
    // Solo acepta POST antes de construir el bot (más eficiente)
    if (request.method !== "POST") {
      return new Response("OK", { status: 200 });
    }

    try {
      const update = await request.json();
      const bot = buildBot(env);
      await bot.handleUpdate(update);
      return new Response("OK", { status: 200 });
    } catch (err) {
      // ✅ Siempre retorna 200 — si retornas 500 Telegram reintenta
      // el mismo update indefinidamente y acumula la cola
      console.error("Error handling update:", err.message);
      return new Response("OK", { status: 200 });
    }
  },
};