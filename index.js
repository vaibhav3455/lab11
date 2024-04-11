const express=require('express');
const app=express();
const PORT=process.env.PORT||3000;
app.get('/',(req,resp)=>
{
    resp.send('<h1>Marwadi University Rajkot</h1>');
})
app.listen(PORT,()=>
{
    console.log(`Application listening on ${PORT}`);
})