require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')

const PORT = process.env.PORT
const DB = process.env.DB_URI

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB connection established')
}).catch(err => {
    console.error(err)
})

app.listen(PORT, () => {
    console.log(`server running at ${PORT}...`);
})
