//import { Parent } from './Parent';
const Parent =  require('./Parent')
const Child =  require('./Child')
const Holder =  require('./Holder')

function log(val) {
    console.log(val)
}

console.log('hej')

var mypar = new Parent()
mypar.logx()

var mychild = new Child()

//mychild.logx()

//mychild.demo()

mychild.logInParent()

mychild.setY('anka')

mychild.logInParent()

var myholder = new Holder()
console.log('holder val1: ' + myholder.getVal1())

myholder.getVal1().then((val) => {
   log(val)
})

