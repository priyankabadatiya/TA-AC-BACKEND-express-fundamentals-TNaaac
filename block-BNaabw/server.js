let express = require('express');
let app = express();
let logger = require('morgan');
let cookieparser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(cookieparser());

app.use((req, res, next) => {
    res.cookie('username', 'Priyanka');
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/project', (req, res) => {
    res.sendFile(__dirname + '/project.html');
});

app.get('/users', (req, res) => {
    res.type('html').send('<h2>Users Page</h2>');
});

app.use((req, res, next) => {
    res.status(404).send('Page not found');
})

app.use((err, req, res, next) => {
    res.status(500).send(err);
});

app.listen(4000, () => {
    console.log('Server listening on port 4k');
})