const verifyToken = (req, res) => {
    res.send({status: 200, message:'hola mundo'})
}


const recivedMessage = (req, res) => {
    res.send({status: 200, message:'recivedMessage'})

}


module.exports = {
    verifyToken,
    recivedMessage
}
