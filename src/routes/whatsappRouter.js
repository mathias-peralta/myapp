const express = require('express');
const router = express.Router();
const whatsappController = require('../controllers/whatsappController');

router.get('/',whatsappController.recivedMessage);

router.post('/',whatsappController.verifyToken);


module.exports = router;