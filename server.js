const express = require('express')

const app = express()
// dummy commit

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Hello Priya. There is a message from Vishal"
    })
})

app.get('/maheshNagtilak', (req, res) => {
    res.json({
        status: 200,
        message: "Hi Mahesh, CI CD sucessfully done."
    })
})

app.listen(8080, () => {
    console.log('server running on port 8080')
})