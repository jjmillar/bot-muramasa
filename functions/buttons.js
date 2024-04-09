import INFO from "./info.js";

/**
 * MAIN MENU FOR INLINE MENU
 * @param {object} ctx - context from the message on telegram
 */
export const menu = async (ctx) => {
  try {
    ctx.deleteMessage();
    await ctx.reply(
      `Hola ${ctx.from.first_name}. Pincha los botones de abajo para ayudarte en lo que pueda. Para no spamear el chat, favor de hacer click en el botón SALIR cuando ya no me necesites mas.`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Horarios", callback_data: "btn-horarios" },
              { text: "Eventos", callback_data: "btn-eventos" },
            ],
            [
              { text: "Redes Sociales", callback_data: "btn-rrss" },
              {
                text: "Playlist Spotify",
                url: "https://open.spotify.com/playlist/4PQ5KrbS64CaRjFXdzeJDP?si=b3af847cfe5143d0",
              },
            ],
            [
              { text: "Material de Lectura", callback_data: "btn-material" },
              { text: "Tiendita", callback_data: "btn-tienda" },
            ],
            [{ text: "Salir", callback_data: "btn-salir" }],
          ],
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * MATERIAL BUTTON
 * @param {object} ctx - context from the message on telegram
 */
export const material = async (ctx) => {
  try {
    ctx.deleteMessage();
    await ctx.reply(
      "Elige el tipo de material que deseas leer.\nYa iremos agregando material de a poco 💪🏻🥋🤘🏻",
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Reglamentos", callback_data: "btn-reglamentos" }],
            [{ text: "Apuntes", callback_data: "btn-apuntes" }],
            [{ text: "Atrás", callback_data: "btn-back-menu" }],
            [{ text: "Salir", callback_data: "btn-salir" }],
          ],
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * APUNTES BUTTON
 * @param {object} ctx - context from the message on telegram
 */
export const apuntes = async (ctx) => {
  try {
    ctx.deleteMessage();
    await ctx.reply("Elige el apunte que desees leer.", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Diccionario Japones-Español",
              url: "https://drive.google.com/file/d/1-D6b7pBpJu3TOHBks_t4bXhFI247h2E3/view?usp=sharings",
            },
          ],
          [{ text: "Atrás", callback_data: "btn-material" }],
          [{ text: "Salir", callback_data: "btn-salir" }],
        ],
      },
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * RRSS BUTTON
 * @param {object} ctx - context from the message on telegram
 */
export const rrss = async (ctx) => {
  try {
    ctx.deleteMessage();
    await ctx.reply("Acá tienes nuestras redes sociales 🤓", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Facebook", url: "https://www.facebook.com/muramasabjj" }],
          [
            {
              text: "Instagram",
              url: "https://www.instagram.com/muramasa_bjj",
            },
          ],
          [{ text: "Muramasa TV", url: "https://t.me/+6nCjXUlzsM1iZjg5" }],
          [{ text: "Atrás", callback_data: "btn-back-menu" }],
          [{ text: "Salir", callback_data: "btn-salir" }],
        ],
      },
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * HORARIOS BUTTON
 * @param {object} ctx - context from the message on telegram
 */
export const horarios = async (ctx) => {
  try {
    ctx.deleteMessage();
    await ctx.reply(
      "Lunes: 20:00-22:00 / Gi / Clase de Fundamentales\n" +
        "Miércoles: 20:00-22:00 / NoGi / Clase de BJJ y Grappling\n" +
        "Viernes: 20:00-22:00 / NoGi / Clase de BJJ y Grappling" +
        "Dirección: José Manso de Velasco #474, Los Ángeles.",
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Atrás", callback_data: "btn-back-menu" }],
            [{ text: "Salir", callback_data: "btn-salir" }],
          ],
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * EVENTOS BUTTON
 * @param {object} ctx - context from the message on telegram
 */
export const eventos = async (ctx) => {
  try {
    ctx.deleteMessage();
    await ctx.reply(INFO.torneos, {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Atrás", callback_data: "btn-back-menu" }],
          [{ text: "Salir", callback_data: "btn-salir" }],
        ],
      },
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * REGLAMENTOS BUTTON
 * @param {object} ctx - context from the message on telegram
 */
export const reglamentos = async (ctx) => {
  try {
    ctx.deleteMessage();
    await ctx.reply(
      "Elige el reglamento que quieras revisar. El de ADCC está en español, pero el de IBJJF está en inglés.",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "ADCC",
                url: "https://drive.google.com/file/d/1j-eD7vhFPwUZZpBzfI2VEzdKKnfBDsgQ/view?usp=sharing",
              },
            ],
            [
              {
                text: "IBJJF Libro de reglas Ingles",
                url: "https://drive.google.com/file/d/11ZsWFhBQdiE5WxXmLDJ8vOIA5oSA1lRW/view?usp=sharing",
              },
            ],
            [
              {
                text: "IBJJF Libro de reglas Español DESACTUALIZADO",
                url: "https://drive.google.com/file/d/18LO8oNYVrBkHRj1-jlL40uOwk3jli7KX/view?usp=sharing",
              },
            ],
            [
              {
                text: "IBJJF Guia de actualización de reglas",
                url: "https://drive.google.com/file/d/1rF8QUnXf-cW5h0VppGcsGrgEyUZzOjUH/view?usp=sharing",
              },
            ],
            [
              {
                text: "IBJJF Poster de movimientos prohibidos",
                url: "https://drive.google.com/file/d/1UcjwKbq4HxWK3WTyb67CLgW8quAEY-S8/view?usp=sharing",
              },
            ],
            [
              {
                text: "Regamento Chilegrappling",
                url: "https://drive.google.com/file/d/13eKvLYyMw0HoDxskwQqXFGgSF1LddbVg/view?usp=sharing",
              },
            ],
            [{ text: "Atrás", callback_data: "btn-material" }],
            [{ text: "Salir", callback_data: "btn-salir" }],
          ],
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * HELP BUTTON
 * @param {object} ctx - context from the message on telegram
 */
export const help = async (ctx) => {
  try {
    await ctx.reply("Clickea aquí 👉🏻 /helio");
  } catch (error) {
    console.log(error);
  }
};

/**
 * TIENDA BUTTON
 * @param {object} ctx - context from the message on telegram
 */
export const tienda = async (ctx) => {
  try {
    ctx.deleteMessage();
    await ctx.reply(INFO.tienda,
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Atrás", callback_data: "btn-back-menu" }],
            [{ text: "Salir", callback_data: "btn-salir" }],
          ],
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * SALIR BUTTON
 * @param {object} ctx - context from the message on telegram
 */
export const salir = async (ctx) => {
  try {
    await ctx.deleteMessage();
  } catch (error) {
    console.log(error);
  }
};
