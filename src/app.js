const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 3000


const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))
app.get('', (req, res) => {
    res.render('index')
})
app.listen(PORT, ()=> {
    console.log('http://localhost:' + PORT + '/')
})


