const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const route = require('./routes');
const db = require('./config/db');
//connect
db.connect();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
// console.log(path.join(__dirname, 'public'))

//template engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
//http logger
app.use(morgan('combined'));
//routes
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
