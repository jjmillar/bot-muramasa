const { Telegraf } = require("telegraf");
require("dotenv").config();
const Buttons = require("./buttons");

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

bot.on("new_chat_members", async (ctx) => {
  try {
    await ctx.reply(
      "Bienvenido " +
        ctx.from.first_name +
        " al grupo de telegram de Muramasa BJJ. Respeto ante todo y usemos el grupo para hacer crecer nuestro Jiujitsu.\n" +
        "Si necesitas mas información, solo escribe /helio y te ayudaré en lo que pueda."
    );
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

bot.on("left_chat_member", async (ctx) => {
  try {
    await ctx.reply("Farewell " + ctx.from.first_name);
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
