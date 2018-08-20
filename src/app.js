const path = require('path');
const mongoose = require('mongoose');
const config = require('./config')

const app = require('./expressConf');

//connecting to db
mongoose.connect(config.db, {
    useNewUrlParser:true
})
.then(db => console.log("Base de datos conectada"))
.catch(err => console.log(err));

// settings
app.set('port', config.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//starting the server
app.listen(app.get('port'), ()=> {
    console.log(`server on port ${app.get('port')}`);
});