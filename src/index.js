import { Telegraf } from "telegraf";
import { config } from "dotenv";
import * as Buttons from "./buttons.js";
import { Configuration, OpenAIApi } from "openai";
import ai from "./ai.js";

/**
 *  INICIALIZACION DE SERVICIOS
 */
config(); // Llama a dotenv para usar process.env.CONST
const bot = new Telegraf(process.env.BOT_TOKEN); // Crea nuevo servicio de bot
const openai = new OpenAIApi( new Configuration({ apiKey: process.env.API_KEY })); // crea servicio de openai

/**
 *  COMANDOS BASICOS
 */
bot.start(Buttons.menu); // telegram chat: "/start"
bot.help(Buttons.help); // telegram chat: "/help"

/**
 * BOTONES
 */
bot.command(["helio", "bot", "Helio", "Oie Helio"], Buttons.menu);
bot.action("btn-back-menu", Buttons.menu);
bot.action("btn-material", Buttons.material);
bot.action("btn-apuntes", Buttons.apuntes);
bot.action("btn-rrss", Buttons.rrss);
bot.action("btn-reglamentos", Buttons.reglamentos);
bot.action("btn-horarios", Buttons.horarios);
bot.action("btn-eventos", Buttons.eventos);
bot.action("btn-salir", Buttons.salir);

/**
 * COMANDO AI
 */
bot.on('text', ai);

/**
 * RUNNING app
 */
bot.launch();
