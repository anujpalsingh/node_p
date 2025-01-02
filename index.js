const express = require('express')
const app = express();

app.get('/api/getVendorUsers' , (req,res)=>{//prId and custOrgId.
    res.send('query is received from the database')
})

const port = 3000
app.listen(port , ()=>{
    console.log('server is suceesfully running')
})
