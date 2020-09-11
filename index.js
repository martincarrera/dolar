#!/usr/bin/env node

// @ts-ignore
const trae = require('trae')

const { print } = require('./utils')

const URL = 'https://api.bluelytics.com.ar/v2/latest'

const main = () => {
  trae
    // @ts-ignore
    .get(URL)
    .then(({ data }) => {
      const { oficial, blue } = data
      print(oficial, blue)
    })
    .catch(console.error)
}

module.exports = main

// @ts-ignore
if (!module.parent) {
  main()
}
