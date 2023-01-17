import express  from 'express'

const app = express()
const port = 3006

app.get('/', (req, res) => {
    res.send('o my god!!! Andersen!')
})
app.get('/users', (req, res) => {
    res.send('this is lessen and write!!!!!!!')
})
app.post('/users', (req, res) => {
    res.send('we have creator')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})