const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routeHomepage = require('./routes/homepageRoute');
const routeCRUD = require('./routes/crudRoute');

app.use("/public",express.static(__dirname + '/public')); 

app.use('/crud', routeCRUD);
app.use('/', routeHomepage);

app.use((req, res, next) => {
    res.render('error404');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});