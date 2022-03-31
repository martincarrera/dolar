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
  if (type == 'REAL') {
    console.log(`| Tj:\t   ${offset.avg ? ' ' : ''}$ ${convert(parseFloat(val.value_sell) * 1.65)} |`)
  }
  console.log(`| ----------------- |`)
  console.log(
    `| Avg:\t   ${offset.avg ? ' ' : ''}$ ${convert(val.value_avg)} |`,
  )
  console.log(`|___________________|`)
}

const printConversion = (
  val,
  type,
  amount,
  operation
) => {

  if(operation == '--to-usd') {
    val.value_buy = val.value_buy / amount;
    val.value_sell = val.value_sell / amount;
    val.value_avg = val.value_avg / amount;
  } else {
    val.value_buy = val.value_buy * amount;
    val.value_sell = val.value_sell * amount;
    val.value_avg = val.value_avg * amount;
  }

  console.log(`${type} Buy:\t   $ ${convert(val.value_buy)}`)
  console.log(`${type} Sell:\t   $ ${convert(val.value_sell)}`)
  if (type == 'REAL') {
    console.log(`${type} Tj:\t   $ ${convert(parseFloat(val.value_sell) * 1.65)}`)
  }
}

const print = (oficial, blue, amount = 0, operation = '--to-ars') => {
  printTable(oficial, TYPES.real, calculateOffset(oficial, blue))
  console.log()
  printTable(blue, TYPES.blue, calculateOffset(blue, oficial))
  if (amount > 0) {
    console.log()
    console.log(`Convert ${amount}  ${operation}`)
    console.log(`-----------------------------`)
    printConversion(oficial, TYPES.real, amount, operation)
    console.log()
    printConversion(blue, TYPES.blue, amount, operation)
    console.log(`-----------------------------`)

  }
}

module.exports = { print }
