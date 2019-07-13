
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('I AM PANGPOND!'))
app.get('/about', (req, res) => res.send('หน้า about'))
app.get('/contact', (req, res) => res.send('หน้า conutact'))
app.get('/test', (req, res) => {
    res.json({message: "test"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
