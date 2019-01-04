const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000

app.use(express.static(publicPath))
app.get('*',function(req, res){
    res.sendFile(path.join(publicPath,'index.html'))
})
app.listen(port, function() {
    console.log('Start Node Server!')
})