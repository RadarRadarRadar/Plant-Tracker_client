'use strict'
// Required files
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onIndexPlants = function (event) {
  event.preventDefault()
  api.indexPlants()
    .then(ui.indexPlantsSuccess)
    .catch(ui.indexPlantsFailure)
}

const onFindPlant = function (event) {
  event.preventDefault()
  const form = event.target
  const plantData = getFormFields(form)
  const plantId = plantData.plant.id
  console.log(plantId)
  api.findPlant(plantId)
    .then(ui.findPlantSuccess)
    .catch(ui.findPlantFailure)
}

const onAddPlant = function (event) {
  event.preventDefault()
  const form = event.target
  const plantData = getFormFields(form)
  console.log(plantData)
  api.addPlant(plantData)
    .then(ui.addPlantSuccess)
    .catch(ui.addPlantFailure)
}

const onUpdatePlant = function (event) {
  event.preventDefault()

  const form = event.target
  const plantUpdateData = getFormFields(form)

  const plantData = plantUpdateData.plant
  const plantId = plantUpdateData.credentials.id

  console.log(plantUpdateData)
  console.log(plantUpdateData.plant)
  console.log(plantUpdateData.credentials.id)

  api.updatePlant(plantId, plantData)
    .then(ui.updatePlantSuccess)
    .catch(ui.updatePlantFailure)
}

const onDeletePlant = function (event) {
  event.preventDefault()
  const form = event.target
  const plantData = getFormFields(form)
  const plantId = plantData.plant.id
  console.log(plantId)
  api.deletePlant(plantId)
    .then(ui.deletePlantSuccess)
    .catch(ui.deletePlantFailure)
}

module.exports = {
  onAddPlant,
  onIndexPlants,
  onFindPlant,
  onDeletePlant,
  onUpdatePlant
}
