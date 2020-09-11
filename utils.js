const TYPES = {
  real: 'REAL',
  blue: 'BLUE',
}

const convert = (val) => val.toFixed(2)

const calculateOffset = (a, b) => ({
  buy: convert(a.value_buy).length < convert(b.value_buy).length,
  sell: convert(a.value_sell).length < convert(b.value_sell).length,
  avg: convert(a.value_avg).length < convert(b.value_avg).length,
})

const printTable = (
  val,
  type,
  offset = { buy: false, sell: false, avg: false },
) => {
  console.log(`|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|`)
  console.log(`| ${type}\t\t    |`)
  console.log(`| ----------------- |`)
  console.log(
    `| Buy:\t   ${offset.buy ? ' ' : ''}$ ${convert(val.value_buy)} |`,
  )
  console.log(
    `| Sell:\t   ${offset.sell ? ' ' : ''}$ ${convert(val.value_sell)} |`,
  )
  console.log(`| ----------------- |`)
  console.log(
    `| Avg:\t   ${offset.avg ? ' ' : ''}$ ${convert(val.value_avg)} |`,
  )
  console.log(`|___________________|`)
}

const print = (oficial, blue) => {
  printTable(oficial, TYPES.real, calculateOffset(oficial, blue))
  console.log()
  printTable(blue, TYPES.blue, calculateOffset(blue, oficial))
}

module.exports = { print }
