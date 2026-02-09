export const deleteMessage = async (ctx) => {
  if (ctx) {
    try {
      await ctx.deleteMessage();
    } catch (e) {
      console.error("Error al eliminar el mensaje:", e.description);
    }
  }
};

export const welcomeMessage = async (ctx) => {
  if (ctx) {
    try {
      await ctx.reply(
        `Bienvenido ${ctx.from.first_name} al grupo de telegram de Muramasa BJJ. Respeto ante todo y usemos el grupo para hacer crecer nuestro Jiujitsu\nSi necesitas mas información, solo escribe /helio y te ayudaré en lo que pueda.`
      );
    } catch (e) {
      console.error("Error al enviar el mensaje de bienvenida:", e.description);
    }
}
}