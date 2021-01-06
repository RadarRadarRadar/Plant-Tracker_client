'use strict'
// Required files
const config = require('./../config')
const store = require('./../store')

// INDEX plants
// GET
const indexPlants = function () {
  return $.ajax({
    url: config.apiUrl + '/plants',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// SHOW plants
// GET
const findPlant = function (plantId) {
  return $.ajax({
    url: config.apiUrl + '/plants/' + plantId,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// CREATE plant
// PATCH
const addPlant = function (plantData) {
  return $.ajax({
    url: config.apiUrl + '/plants',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: plantData
  })
}

// CREATE plant
// PATCH
const updatePlant = function (plantId, plantData) {
  return $.ajax({
    url: config.apiUrl + '/plants/' + plantId,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      plant: plantData
    }
  })
}

// DELETE plant
// DELETE
const deletePlant = function (plantId) {
  return $.ajax({
    url: config.apiUrl + '/plants/' + plantId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  addPlant,
  indexPlants,
  findPlant,
  deletePlant,
  updatePlant
}
