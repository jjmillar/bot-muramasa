const { Telegraf } = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);
const { Buttons } = require('./buttons');
/**
 *  COMANDOS BASICOS
 */

bot.start(Buttons.menu);
bot.help((ctx) => {ctx.reply('Escribe /helio o /bot');});
bot.on('new_chat_members', (ctx) => {ctx.reply('Bienvenido ' + ctx.from.first_name + ' al grupo de telegram de Muramasa BJJ. Respeto ante todo y usemos el grupo para hacer crecer nuestro Jiujitsu.\n' + 'Si necesitas mas información, solo escribe /helio y te ayudaré en lo que pueda.');});
bot.hears(['❤️'], ctx => {ctx.reply('❤️');});
bot.hears(['estas helio?'], ctx => {ctx.reply('Si, aquí estoy ' + ctx.from.first_name + '. Ahora vivo el fly.io. Ojalá me dure...');});
bot.hears(['Wena helio','Wena Helio', 'wena helio'], ctx => {ctx.reply('Wena wena' + ctx.from.first_name);});
bot.on('left_chat_member', (ctx) => {ctx.reply('Farewell ' + ctx.from.first_name);});

/**
 * BOTONES
 */
bot.command(["helio","bot","Helio", "Oie Helio"], Buttons.menu);
bot.action("btn-back-menu", Buttons.menu);
bot.action('btn-material', Buttons.material);
bot.action('btn-apuntes', Buttons.apuntes);
bot.action('btn-rrss', Buttons.rrss);
bot.action('btn-reglamentos', Buttons.reglamentos);
bot.action('btn-horarios', Buttons.horarios);
bot.action('btn-eventos', Buttons.eventos);
bot.action('btn-salir', Buttons.salir);

/**
 * RUNNING APP
 */
bot.launch();