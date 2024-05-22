const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

// Set up Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'static')));

// Use routes
app.use('/', require('./routes/blog'));

app.listen(port, () => {
    console.log(`Blog app listening on port ${port}`);
});
