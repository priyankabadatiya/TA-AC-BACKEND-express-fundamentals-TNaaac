let express = require('express');
let app = express();
let static = __dirname + '/public';
let store = "";


app.use((req, res, next) => {
    let time = new Date();
    console.log(req.method, req.url, time);
    next();
})

app.use((req, res, next) => {
    req.on('data', (chunk) => {
        store += chunk;
    })
    req.on('end', () => {
        if(store && req.headers['content-type'] === 'application/json') {
            req.body = JSON.parse(store);
            console.log(req.body);
        }
    })
    
    next();
})
app.use((req, res, next) => {
    if(req.url !== '/') {
        res.sendFile(static + req.url); 
    }
    
})
app.listen(4000, () => {
    console.log('server is listening on port 4000');
})