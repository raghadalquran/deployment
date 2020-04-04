'use strict';
const express = require('express');
const app = express();
app.use(express.static('./public'));
const PORT = process.env.PORT || 3000;
app.get('/hello',(Request,Response)=>{
    Response.status(200).send('Hello');
});
app.get('/data',(Request,Response)=>{
let data = [{name:'Javascript'},{name:'Python'},{name:'c#'}];
Response.status(200).json(data);
});
app.get('*',(Request,Response)=>{
Response.status(404).send('404 page not found');
});
app.listen(PORT,()=>console.log(`listining to port ${PORT}`));

