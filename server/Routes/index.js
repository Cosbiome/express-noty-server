const { Router } = require('express');
const webpush = require('../webpush.js');
const pdf = require('html-pdf');

const psfTemplate = require('../documents/pagare.js');
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
    pdf.create(psfTemplate({prodcutos: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]}), {}).toFile('result.pdf', (err) => {
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