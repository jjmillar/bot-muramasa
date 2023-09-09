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
      "Lunes: 21:00-23:00 / Gi / Clase de Fundamentales del BJJ\n" +
        "Martes: 20:00-22:00 / NoGi / Clase de BJJ y Grappling\n" +
        "Jueves: 20:00-22:00 / Gi / Clase avanzada",
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
      "Elige el reglamento que quieras revisar. El de ADCC está en español, pero el de IBJJF está en inglés. Pronto traduciré el reglamento 🤓",
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
                text: "IBJJF Libro de reglas",
                url: "https://drive.google.com/file/d/18LO8oNYVrBkHRj1-jlL40uOwk3jli7KX/view?usp=drive_link",
              },
            ],
            [
              {
                text: "IBJJF Guia de actualización de reglas",
                url: "https://drive.google.com/file/d/1hoDZ2TwdUoMQ9ffP_nHzc_LFyXQ0aTib/view?usp=sharing",
              },
            ],
            [
              {
                text: "IBJJF Poster de movimientos",
                url: "https://drive.google.com/file/d/1TflN5JqrukrAG1nFtsfQjX9wkfYcqJWJ/view?usp=sharing",
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
