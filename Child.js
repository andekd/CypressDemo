const Parent =  require('./Parent')
class Child extends Parent {
    constructor() {
        super()
        this.y = 'lisa'
    }
    setY(yVal) {
        this.y = yVal
    }
    logInParent() { this.logProm(this.y) }
}
module.exports = Child