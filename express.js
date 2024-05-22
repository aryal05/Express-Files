const express = require('express')
const path = require("path")
const app = express()
const port = 3000

// const rajatMiddleWare = (req,res,next)=>{
//      console.log(req)
//      next()
// }

app.use(express.static(path.join(__dirname, "public")))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "express.html"))
   })
   app.get('/json', (req, res) => {
     res.json({"rajat":24})
     res.send("hello world"+ req.params.name)
   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})