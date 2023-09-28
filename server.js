const express = require('express')

const app = express()
// dummy commit

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Hi Mahesh CI/CD pipeline done"
    })
})

app.get('/mahesh', (req, res) => {
    res.json({
        status: 200,
        message: "Hi Mahesh, CI CD sucessfully done."
    })
})

app.listen(8080, () => {
    console.log('server running on port 8080')
})