const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream('./logs.txt'))

const verifyToken = (req, res) => {
    try{
        const acccessToken = 'BASDLASDMLMA231LKJKN32';
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];
        if(challenge != null  && token != null && token == acccessToken){
            res.status(200).send(challenge);
        }else {
            res.status(400).send();
        }
    }catch(e){
        res.status(400).send(e);
    }    

}


const recivedMessage = (req, res) => {
    try{
        const value = req.body.value;
        const message = value.messages[0];
        myConsole.log(req.body)
        res.status(200).send("EVENT_RECIVED");
    }catch (e) {
        myConsole.log(e)
        res.status(500).send("EVENT_RECIVED");
    }

}


module.exports = {
    verifyToken,
    recivedMessage
}
