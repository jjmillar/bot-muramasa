//const { Telegraf } = require("telegraf");
import { Telegraf } from "telegraf";
import { config } from "dotenv";
import * as Buttons from "./buttons.js";

//const Buttons = require("./buttons");

//require("dotenv").config();
config();
const bot = new Telegraf(process.env.BOT_TOKEN);



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
 * RUNNING app
 */
bot.launch();
