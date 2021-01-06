'use strict'

const authEvents = require('./auth/events')
const plantEvents = require('./plant/events')

$(() => {
  $('.authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#index-plants').on('click', plantEvents.onIndexPlants)
  $('#find-plant').on('submit', plantEvents.onFindPlant)
  $('#add-plant').on('submit', plantEvents.onAddPlant)
  $('#update-plant').on('submit', plantEvents.onUpdatePlant)
  $('#delete-plant').on('submit', plantEvents.onDeletePlant)
})
