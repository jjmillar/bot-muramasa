export const deleteMessage = async (ctx) => {
  if (ctx) {
    try {
      await ctx.deleteMessage();
    } catch (e) {
      console.error("Error al eliminar el mensaje:", e.description);
    }
  }
};