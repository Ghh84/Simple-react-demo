const express=require('express')
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send("<h1>Hello word to express demo</h1>  <h4>Message: sucesss</h4>");

})
app.get('/product',(req,res)=>{
    res.send([
        {
            productId:10,
            productName:'Laptop'
        },
        {
            productId:11,
            productName:"printer"
        }
    ])
})

app.listen(port,(req,res)=>{
    console.log("Listening to port:`${port}`")
})