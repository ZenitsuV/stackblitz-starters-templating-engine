const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');
const app = express();

/* app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs',
  })
); */

// Handle bars
//app.set('view engine', 'hbs');

// ejs
app.set('view engine', 'ejs');

// PUG
//app.set('view engine', 'pug');

app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', { pageTitle: 'Page not found' });
});

app.listen(8000);
