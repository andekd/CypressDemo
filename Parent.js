class Parent {
    constructor() {
        this.x = 'kalle'
    }
    logx() {
        console.log(this.x)
    }
    logVal(val) {
        console.log(val)
    }
    sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
    async logProm(valueToLog) {
        await this.sleep(3000);
        var prom = new Promise((resolve, reject) => { resolve(this.x) })
        prom.then((myx) => { var logval = myx + valueToLog; console.log(logval) })
    }
    async demo() {
        console.log('Taking a break...');
        await this.sleep(5000);
        console.log('5 seconds later');
    }
}
module.exports = Parent