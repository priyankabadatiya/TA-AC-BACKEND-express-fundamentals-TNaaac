var express = require("express")
var app = express();
let logger = require('morgan');
let cookieparser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger("dev"))
app.use(cookieparser())

app.use((req, res, next) => {
    res.cookie('username', "Priyanka");
    next();
  });

app.get('/', (req, res) => {
    res.type('html').send('<h2>Welcome to Express</h2>');  
})

app.get('/about', (req, res) => {
    res.type('text/plain').send('My name is qwerty');
})

app.post('/form', (req, res) => {
    res.json(req.body);
})

app.post('/json', (req, res) => {
    res.type('text/plain').send(req.body);
})

app.get('/users/:username', (req, res) => {
    res.type('html').send(`<h2>${req.params.username}</h2>`);
})

app.use((req, res, next) => {
    res.status(404).type('html').send('<h1>Page not found</h1>');
})

app.use((err, req, res, next) => {
    res.type(500).send(err);
})


app.listen(3000, () => {
    console.log('Server is listening on port 3k');
})