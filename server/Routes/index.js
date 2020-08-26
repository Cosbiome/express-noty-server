const { Router } = require('express');
const webpush = require('../webpush.js');
const pdf = require('html-pdf');

const psfTemplate = require('../documents/pagare.js');
const { numeroALetras } = require('../utils/numerosAletras.js');
const path = require('path');

const router = Router();
let pushSubscription;

router.get('/', (req, res) => {
    res.status(200).json({ok: true, message: 'Server para web notis'});
});

router.post('/subscription', async(req, res) => {
    pushSubscription = req.body;
    
    console.log(req.body);

    res.status(200).json();
});

router.post('/loginReg', async(req, res) => {
    const payload = JSON.stringify({
        title: 'Entreada de sistema',
        message: req.body.message
    });

    try {
        await webpush.sendNotification(pushSubscription, payload);
    } catch (error) {
       console.log(error);
    }

});

router.post('/almacenNoti', async(req, res) => {
    const payload = JSON.stringify({
        title: req.body.title,
        message: req.body.message
    });

    try {
        await webpush.sendNotification(pushSubscription, payload);
        res.status(200).json();
    } catch (error) {
       console.log(error);
    }

});

router.post('/create-pdf', (req, res) => {

    let body = req.body

    let textoTotal = numeroALetras(body.total, {
        plural: "PESOS",
        singular: "PESO",
        centPlural: "CENTAVOS",
        centSingular: "CENTAVO"
    });

    pdf.create(psfTemplate({prodcutos: body.pedidos, total: body.total, nombreRepartidor: body.nombreRepartidor, textoTotal: textoTotal, nombreAlmacen: body.almacenNombre }), {}).toFile('result.pdf', (err) => {
        if(err)
        {
            return res.send(Promise.reject());
        }

        return res.send(Promise.resolve());
    });
});

router.get('/fetchpdf', (req, res) => {
    res.sendFile(path.resolve('result.pdf'));
});

module.exports = router;