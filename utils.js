const getData = (obj) => obj.data
const getRate = (obj) => obj.USD_ARS
const convert = (val) => val.toFixed(2)
const log = (val) => console.log(`$ ${convert(val)}`)
const catPrint = (val) => {
  console.log(' ___________')
  console.log('/           \\')
  console.log(`|  $ ${convert(val)}  | `)
  console.log('\\           /')
  console.log(' -----------')
  console.log('        \\   /\\_/\\')
  console.log('         \\ ( o.o )')
  console.log('            m   m')
}

const print = (val, arg) => {
  arg && arg.toLowerCase() === 'macri' ? catPrint(val) : log(val)
}

module.exports = {
  getData,
  getRate,
  print,
  catPrint,
}
