const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./routes/book.router');
const genreRouter = require('./routes/genre.router');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('server/public'));

app.use(bodyParser.json());

app.use('/book', bookRouter);
app.use('/genre', genreRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});