const axios = require('axios');
const AppConfig = require('../config/appConfig')
const sendMessage = async (number, message) => {
    try{
        const response = await axios.post(AppConfig.baseUrl + `/v17.0/210293835494196/messages`, {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": message
            }
        },
        {
            Headers: {
                'Content-Type': 'application/json',
                Autorization: bearer + AppConfig.token    
            }
        }
        );
        if(response.status === 200) {
            return response.data;
        }
        return null;
    }catch {
        return null;
    }

}


module.exports = {
    sendMessage
}