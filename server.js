const express=require('express');
const ejs=require('ejs');
const expresslayout=require('express-ejs-layouts');
const path=require('path')

const app=express();


const PORT=process.env.PORT||3000;


app.get('/',(req,res)=>{
    res.render('home');
})


//Set template engines
app.use(expresslayout);
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs');



app.listen(PORT,()=>{
    console.log(`Listening on the port ${PORT}`)
})