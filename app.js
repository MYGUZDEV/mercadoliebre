const express = require('express');
const app = express();

const path = require ('path');
const publicPath = path.resolve (__dirname,'./public');
// codigo path para resolver en cualquier S.O. la busqueda de carpeta public
app.use(express.static(publicPath));


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/datosDeUsuarios', (req,res)=>{
    res.sendFile(__dirname + '/views/datosDeUsuarios.html');
});

app.listen(3000, ()=>{
    console.log('Servidor funcionando a las chapas por localhost:3000');
});