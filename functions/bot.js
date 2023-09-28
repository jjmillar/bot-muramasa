import { Telegraf } from "telegraf";
import { message } from "telegraf/filters"; 
import { config } from "dotenv";
import * as Buttons from "./buttons.js";
import ai from "./ai.js";

/**
 *  INITIALIZE SERVICES
 */
config(); // Calls dotenv to enable use of process.env.CONST
const bot = new Telegraf(process.env.BOT_TOKEN); // Create a new service to use bot.functions

/**
 *  BASIC COMMANDS
 */
bot.start(Buttons.menu); // telegram chat: "/start"
bot.help(Buttons.help); // telegram chat: "/help"
bot.on(message("new_chat_members"), `Bienvenid@ ${ctx.from.first_name} al grupo de Muramasa. Yo soy Helio, un bot (asistente virtual) del grupo y me puedes llamar en cualuier momento escribiendo el comanto /start o /bot. Este chat funciona como un foro donde hay diferentes "temas" dentro de los cuales se puede conversar lo que uno quiera. Respeto ante todo y sigamos haciendo crecer el Jiu-Jitsu en Los Ángeles. `)

/**
 * INLINE BUTTONS
 */
bot.command(["helio", "bot", "Helio", "Oie Helio"], Buttons.menu); // Main commando to call the inline menu. Use "/helio" for example.
bot.action("btn-back-menu", Buttons.menu);
bot.action("btn-material", Buttons.material);
bot.action("btn-apuntes", Buttons.apuntes);
bot.action("btn-rrss", Buttons.rrss);
bot.action("btn-reglamentos", Buttons.reglamentos);
bot.action("btn-horarios", Buttons.horarios);
bot.action("btn-eventos", Buttons.eventos);
bot.action("btn-tienda", Buttons.tienda);
bot.action("btn-salir", Buttons.salir);

/**
 * AI CALL COMMAND
 */
bot.on('text', ai); //Calls ai function on telegram app by typing "Oye helio <text>"

/**
 * RUNNING APP
 */
bot.launch(); // Run bot
