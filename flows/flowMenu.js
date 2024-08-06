const { addKeyword } = require('@bot-whatsapp/bot');

const flowMenu = addKeyword(['menú', 'menu'])
    .addAnswer(
        [
            '🍲 Nuestro menú incluye:',
            '👉 Entrantes: Ensaladas, Sopa del día.',
            '👉 Platos principales: Pasta, Pizza, Carnes a la parrilla.',
            '👉 Postres: Tiramisú, Cheesecake, Brownie.',
            '👉 Bebidas: Vinos, Cervezas, Refrescos.',
            '¡Visítanos y descubre más!',
        ]
    );

module.exports = flowMenu;
