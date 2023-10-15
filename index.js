const express = require('express') ;
const app = express() ;
const cors = require('cors') ;
const port = process.env.PORT || 5000 ;


// middle ware
app.use(cors())
app.use(express.json())


app.get('/', (req,res)=>{
    res.send("chartered accountants server is running")
})


app.listen(port, ()=> {
    console.log("chartered account server is running on port", port)
})