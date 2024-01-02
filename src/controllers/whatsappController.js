const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream('./logs.txt'))

const verifyToken = (req, res) => {
    try{
        const acccessToken = 'asd233k2312sdasdasdasdas';
        const token = req.query("hub.verify_token");
        const challenge = req.query("hub.challenge");
        if(challenge != null  && token == acccessToken){
            res.status(200).send(challenge);

        }else {
            res.send({status: 400, message:'invalid token'});
        }
    }catch{
        res.send({status: 500, message:'internal server error'});
    }    

}


const recivedMessage = (req, res) => {
    try{
        const entry = req.body["entry"][0];
        const changes = entry["changes"][0];
        const value = changes["value"];
        const message = value["messages"];
        myConsole.log(message)
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
