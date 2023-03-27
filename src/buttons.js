const menu = (ctx) => {
    ctx.deleteMessage()
    ctx.reply("Hola " + ctx.from.first_name + ' ' + '.Pincha los botones de abajo para ayudarte en lo que pueda.\n' + 'Para no spamear el chat, favor de hacer click en el boton SALIR cuando ya no me necesites mas.\n', {
        reply_markup: {
            inline_keyboard: [
                [ { text: "Horarios", callback_data: "btn-horarios" }, { text: "Eventos", callback_data: "btn-eventos" } ],
                [ { text: "Redes Sociales", callback_data: "btn-rrss" } ],
                [ { text: "Playlist Spotify", url:"https://open.spotify.com/playlist/4PQ5KrbS64CaRjFXdzeJDP?si=b3af847cfe5143d0" } ],
                [ { text: "Material de Lectura", callback_data: "btn-material" } ],
                [ { text: "Salir", callback_data: "btn-salir" } ],
            ]
        }
    })
};

const material = (ctx) => {
    ctx.deleteMessage() 
    ctx.reply('Elige el tipo de material que deseas leer.\nYa iremos agregando material de a poco 💪🏻🥋🤘🏻', {
        reply_markup: {
            inline_keyboard: [
                [ { text: "Reglamentos", callback_data: "btn-reglamentos" } ],
                [ { text: "Apuntes", callback_data: "btn-apuntes" } ],
                [ { text: "Atrás", callback_data: "btn-back-menu" } ],
                [ { text: "Salir", callback_data: "btn-salir" } ],
            ]
        }
    })
};

const apuntes = (ctx) => {
    ctx.deleteMessage() 
    ctx.reply('Elige el apunte que desees leer.', {
        reply_markup: {
            inline_keyboard: [
                [ { text: "Diccionario Japones-Español", url: "https://drive.google.com/file/d/1-D6b7pBpJu3TOHBks_t4bXhFI247h2E3/view?usp=sharings" } ],
                [ { text: "Atrás", callback_data: "btn-material" } ],
                [ { text: "Salir", callback_data: "btn-salir" } ],
            ]
        }
    })
};

const rrss = (ctx) => {
    ctx.deleteMessage() 
    ctx.reply('Acá tienes nuestras redes sociales 🤓', {
        reply_markup: {
            inline_keyboard: [
                [ { text: "Facebook", url: "https://www.facebook.com/muramasabjj" } ],
                [ { text: "Instagram", url: "https://www.instagram.com/muramasa_bjj" } ],
                [ { text: "Muramasa TV", url: "https://t.me/+6nCjXUlzsM1iZjg5" } ],
                [ { text: "Atrás", callback_data: "btn-back-menu" } ],
                [ { text: "Salir", callback_data: "btn-salir" } ],
            ]
        }
    })
};

const horarios = (ctx) => {
    ctx.deleteMessage() 
    ctx.reply('Lunes: 21:00-23:00 / Gi / Clase de Fundamentales del BJJ\n' + 'Martes: 20:00-22:00 / NoGi / Clase de BJJ y Grappling\n' + 'Jueves: 20:00-22:00 / Gi / Clase avanzada', {
        reply_markup: {
            inline_keyboard: [
                [ { text: "Atrás", callback_data: "btn-back-menu" } ],
                [ { text: "Salir", callback_data: "btn-salir" } ],
            ]
        }
    })
};

const eventos = (ctx) => {
    ctx.deleteMessage() 
    ctx.reply('pronto mas info...', {
        reply_markup: {
            inline_keyboard: [
                [ { text: "Atrás", callback_data: "btn-back-menu" } ],
                [ { text: "Salir", callback_data: "btn-salir" } ],
            ]
        }
    })
};

const reglamentos = (ctx) => {
    ctx.deleteMessage() 
    ctx.reply('Elige el reglamento que quieras revisar. El de ADCC está en español, pero el de IBJJF está en inglés. Pronto traduciré el reglamento 🤓', {
        reply_markup: {
            inline_keyboard: [
                [ { text: "ADCC", url: "https://drive.google.com/file/d/1j-eD7vhFPwUZZpBzfI2VEzdKKnfBDsgQ/view?usp=sharing" } ],
                [ { text: "IBJJF Libro de reglas", url: "https://drive.google.com/file/d/1sax9rYff5lj-KHo5c4iEK17O7c78ycQG/view?usp=sharing" } ],
                [ { text: "IBJJF Guia de actualización de reglas", url: "https://drive.google.com/file/d/1hoDZ2TwdUoMQ9ffP_nHzc_LFyXQ0aTib/view?usp=sharing" } ],
                [ { text: "IBJJF Poster de movimientos", url: "https://drive.google.com/file/d/1TflN5JqrukrAG1nFtsfQjX9wkfYcqJWJ/view?usp=sharing" } ],
                [ { text: "Atrás", callback_data: "btn-material" } ],
                [ { text: "Salir", callback_data: "btn-salir" } ],
            ]
        }
    })
};

const salir = async (ctx) => {
        ctx.deleteMessage();
};

module.exports = {
    menu,
    material,
    apuntes,
    rrss,
    horarios,
    eventos,
    reglamentos,
    salir
    
};