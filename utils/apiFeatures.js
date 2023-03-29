class APIFeatures {
    constructor(queryString, query) {
        this.queryString = queryString
        this.query = query
    }

    region() {
        if (this.queryString.region) {
            this.query = this.query.where('region').regex(new RegExp(`^${this.queryString.region}`, 'i'))
        }
        return this
    }

    name() {
        if (this.queryString.name) {
            this.query = this.query.where('name.common').regex(new RegExp(`^${this.queryString.name}`, 'i'))
        }
        return this
    }
    sort() {
        if (this.queryString.sort === 'population') this.query = this.query.sort("-population")
        else if(this.queryString.sort === 'asc') this.query = this.query.sort("name.common")
        else if(this.queryString.sort === 'desc') this.query = this.query.sort("-name.common")
        return this
    }
    code() {
        let codes = this.queryString.codes.split(',')
        codes = codes.map(code => code.toUpperCase())
        this.query = this.query.where({
            $or:[
                {'cioc':{$in:codes}},
                {'cca3':{$in:codes}},
                {'cca2':{$in:codes}}
            ]
        })
        return this
    }

    paginate() {
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 24
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this
    }

}

module.exports = APIFeatures