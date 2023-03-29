const express = require('express')
const app = express()
const cors = require('cors')
const countriesRoutes = require('./routes/country')
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

app.get('/', (req, res) => {
    res.status(200).send({ message: 'welcome to countries api service...' })
})

app.use('/v1.0',countriesRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    res.status(status).json({
        success: false,
        status,
        message,
    });
});

module.exports = app
