'use strict'

const config = require('../config')
const store = require('../store')

const receiptCreate = (data) => {
  console.log('api data: ', data)
  return $.ajax({
    url: config.apiOrigin + '/receipts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const receiptIndex = (data) => {
  console.log('api data: ', data)
  return $.ajax({
    url: config.apiOrigin + '/receipts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  receiptCreate,
  receiptIndex
}
