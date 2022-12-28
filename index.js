#!/usr/bin/env NODE_NO_WARNINGS=1 node

// @ts-ignore
const trae = require('trae')

const args = process.argv.slice(2);

const { print } = require('./utils')

const URL = 'https://api.bluelytics.com.ar/v2/latest'

const main = () => {
  trae
    // @ts-ignore
    .get(URL)
    .then(({ data }) => {
      const { oficial, blue } = data
      print(oficial, blue, args[0], args[1])
    })
    .catch(console.error)
}

module.exports = main

// @ts-ignore
if (!module.parent) {
  main()
}
