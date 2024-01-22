const express=require('express');
const app=express();
const path=require('path');
const port=process.env.PORT || 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port,()=>console.log(`Servidor corriendo en el puerto ${port}`)); 
app.get('/',function(req,res){ 
    res.sendFile(path.join(__dirname,'views/index.html')); 
});