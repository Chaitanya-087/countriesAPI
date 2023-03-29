const express = require('express')
const countriesController = require('../controllers/countryController')
const router = express.Router()
router.get('/all',countriesController.getAllCountries)
router.get('/alpha',countriesController.getCountriesByCodes)
router.get('/name/:name',countriesController.getSingleCountry)

module.exports = router
