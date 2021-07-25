const express = require('express')
const server = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;

//console.log(path.join(__dirname,'../public'));
const staticPath = path.join(__dirname,'../public')  //public staic path

const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')


server.set('view engine','hbs')
server.set('views',viewsPath)
hbs.registerPartials(partialPath)

server.use(express.static(staticPath))

server.get('/',(req,res)=>{
    res.render('index')
})
server.get('/weather',(req,res)=>{
    res.render('weather')
})
server.get('/about',(req,res)=>{
    res.render('about')
})
server.get('*',(req,res)=>{
    res.render('404error',{
        err_msg: 'Opps! Page Not Found click here to go back'
    })
})
server.listen(port,()=>{
    console.log(`listening on port ${port}`);
})