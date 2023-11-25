const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//central part of our app
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
//tells express which template method to use
app.use(cookieParser())

app.set('view engine', 'pug');

//path
app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/cards', (req, res) =>{ 
    res.render('card', {prompt:"who is buried in Grant's tomb?"});
});

app.get('/hello', (req, res) =>{
    res.render('hello', { name: req.cookies.username });
})
app.post('/hello', (req, res) =>{
    //send a cookie to the browser after we submit the form
    res.cookie('username', req.body.username);
    res.render('hello', { name: req.body.username });
});


app.listen(3000, () => {
    console.log('Hola! Running on localhost: 3000!')
});