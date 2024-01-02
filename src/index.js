
const express = require('express');
const app = express();
const whatsappRouter = require('./routes/whatsappRouter');

//settings
app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.use("/whatsapp",whatsappRouter);

//server
app.listen(app.get('port'), () => {
  console.log('server listen on port:', app.get('port'));
})