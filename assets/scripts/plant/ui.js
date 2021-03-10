'use strict'
// Required files
const store = require('./../store')
const htmlFormatter = require('./plantCards')

const indexPlantsSuccess = function (response) {
  store.plants = response.plants
  console.log(store.plants)
  const plantIndex = store.plants
  const plantIndexReverse = plantIndex.reverse()
  $('#plant-data').html('')
  plantIndexReverse.forEach(function (plant) {
    console.log(plant)
    htmlFormatter(plant)
  })
  // $('#plant-data-messages').text('Plants!')
  $('form').trigger('reset')
}

const indexPlantsFailure = function (onError) {
  $('#plant-data-messages').text('Index of plants failed...')
}

const findPlantSuccess = function (response) {
  store.plant = response.plant
  console.log(store.plant)
  const plant = store.plant
  $('#plant-data').html('')
  htmlFormatter(plant)
  $('#plant-data-messages').text('Plant found!')
  $('form').trigger('reset')
}

const findPlantFailure = function (onError) {
  $('#plant-data-messages').text('Find plant failed...')
}

const addPlantSuccess = function (response) {
  // store.plant = response.plant
  // console.log(store.plant)
  $('#plant-data-messages').text('Plant added!')
  $('form').trigger('reset')
}

const addPlantFailure = function (onError) {
  $('#plant-data-messages').text('Plant add failed...')
}

const updatePlantSuccess = function (response) {
  $('#plant-data-messages').text('Plant updated!')
  $('form').trigger('reset')
}

const updatePlantFailure = function (onError) {
  $('#plant-data-messages').text('Plant update failed...')
}

const deletePlantSuccess = function (response) {
  $('#plant-data-messages').text('Plant deleted!')
  $('form').trigger('reset')
}

const deletePlantFailure = function (onError) {
  $('#plant-data-messages').text('Plant delete failed...')
}

module.exports = {
  indexPlantsSuccess,
  indexPlantsFailure,
  findPlantSuccess,
  findPlantFailure,
  addPlantSuccess,
  addPlantFailure,
  deletePlantSuccess,
  deletePlantFailure,
  updatePlantSuccess,
  updatePlantFailure
}
