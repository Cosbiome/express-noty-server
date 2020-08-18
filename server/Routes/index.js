const { Router } = require('express');
const webpush = require('../webpush.js');

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

module.exports = router;