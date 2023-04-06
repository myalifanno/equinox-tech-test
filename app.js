const express = require('express')
const app = express()
const port = process.env.PORT | 3000
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./routers'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})