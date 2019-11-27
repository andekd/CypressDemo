class Holder {
    constructor() {
        this.val1 = 'val1'
        this.val2 = 'val2'
    }

    getVal1() {
        var prom = new Promise((resolve, reject) => { resolve(this.val1) })
        return prom 
    }
}
module.exports = Holder