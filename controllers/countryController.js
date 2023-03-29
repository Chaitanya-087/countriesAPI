const Country = require('../models/Country')
const APIFeatures = require('../utils/apiFeatures')

exports.getAllCountries = async (req, res, next) => {
    try {
        const features = new APIFeatures(req.query, Country.find()).region().name().sort().paginate()
        const query = features.query
        const countries = await query
        const details = {
            current_page: req.query.page * 1 || 1,
            current_total: countries.length,
            per_page: 24,
            has_next: !(countries.length < 24),
            total: 250
        }
        res.status(200).json({ ...details, countries })
    } catch (err) {
        next(err)
    }
}
exports.getSingleCountry = async (req,res,next) => {
    try {
        const country = await Country.findOne({"name.common":{$regex:new RegExp(req.params.name,'i')}})
        res.status(200).json(country)
    }catch(err) {
        next(err)
    }
}
exports.getCountriesByCodes = async (req, res, next) => {
    try {
        const features = new APIFeatures(req.query, Country.find()).code()
        const query = features.query
        const countries = await query
        res.status(200).json({countries})
    } catch (err) {
        next(err)
    }
}
