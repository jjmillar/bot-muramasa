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
bot.start(Buttons.menu);

bot.help(async (ctx) => {
  try {
    await ctx.reply("Escribe /helio o /bot");
  } catch (error) {
    console.log(error);
  }
});

bot.hears(["❤️"], async (ctx) => {
  try {
    await ctx.reply("❤️");
  } catch (error) {
    console.log(error);
  }
});

bot.hears(["Estas helio?"], async (ctx) => {
  try {
    await ctx.reply("Sí, ahora vivo en Cyclic.sh Ojalá me dure aquí lol");
  } catch (error) {
    console.log(error);
  }
});

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
