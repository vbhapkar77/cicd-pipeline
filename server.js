const express = require('express')

const app = express()
// dummy commit

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Hello Priya. There is a message from Vishal"
    })
})

app.listen(8080, () => {
    console.log('server running on port 8080')
})