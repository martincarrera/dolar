const trae = require('trae')
const { getData, getRate, print } = require('./utils')

const URL =
  'https://free.currencyconverterapi.com/api/v5/convert?q=USD_ARS&compact=ultra'

const main = (arg) => {
  trae
    .get(URL)
    .then(getData)
    .then(getRate)
    .then((value) => print(value, arg))
    .catch(console.error)
}

module.exports = main

if (!module.parent) {
  main(process.argv[2])
}
