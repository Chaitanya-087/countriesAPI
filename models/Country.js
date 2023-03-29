const mongoose = require('mongoose')

const CountrySchema = new mongoose.Schema({
    name: {
        common: String,
        official: String,
        nativeName: {
            [String]: {
                official: String,
                common: String,
            }
        }
    },
    tld: [String],
    cca2: String,
    ccn3: String,
    cca3: String,
    cioc: String,
    independent: Boolean,
    status: String,
    unMember: Boolean,
    currencies: {
        [String]: {
            name: String,
            symbol: String,
        }
    },
    idd: {
        root: String,
        suffixes: [String],
    },
    capital: [String],
    altSpellings: [String],
    region: String,
    subregion: String,
    languages: {
        [String]: String,
    },
    translations: {
        [String]: {
            official: String,
            common: String,
        }
    },
    latlng: [Number],
    landlocked: Boolean,
    borders: [String],
    area: Number,
    demonyms: {
        [String]: {
            f: String,
            m: String,
        }
    },
    flag: String,
    maps: {
        googleMaps: String,
        openStreetMaps: String,
    },
    population: Number,
    gini: {
        [String]: Number,
    },
    fifa: String,
    car: {
        signs: [String],
        side: String,
    },
    timezones: [String],
    continents: [String],
    flags: {
        png: String,
        svg: String,
        alt: String,
    },
    coatOfArms: {
        png: String,
        svg: String,
    },
    startOfWeek: String,
    capitalInfo: {
        latlng: [Number],
    },
    postalCode: {
        format: String,
        regex: String,
    },
})

module.exports = mongoose.model('Country', CountrySchema)
