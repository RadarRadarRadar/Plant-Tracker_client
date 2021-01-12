'use strict'

const authEvents = require('./auth/events')
const plantEvents = require('./plant/events')

const hidePlantInfo = function () {
  $('#find-plant').hide()
  $('#add-plant').hide()
  $('#update-plant').hide()
  $('#delete-plant').hide()
  $('#change-password').hide()
}

$(() => {
  $('.authenticated').hide()
  $('#plant-nav').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-up-form').on('click', function () {
    $('#sign-up').toggle()
    $('#sign-in').hide()
  })
  $('#sign-in-form').on('click', function () {
    $('#sign-in').toggle()
    $('#sign-up').hide()
  })
  $('#add-plant-form').on('click', function () {
    hidePlantInfo()
    $('#add-plant').toggle()
  })
  $('#find-plant-form').on('click', function () {
    hidePlantInfo()
    $('#find-plant').toggle()
  })
  $('#update-plant-form').on('click', function () {
    hidePlantInfo()
    $('#update-plant').toggle()
  })
  $('#delete-plant-form').on('click', function () {
    hidePlantInfo()
    $('#delete-plant').toggle()
  })
  $('#user-settings-form').on('click', function () {
    hidePlantInfo()
    $('#change-password').toggle()
  })
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#index-plants').on('click', plantEvents.onIndexPlants)
  $('#find-plant').on('submit', plantEvents.onFindPlant)
  $('#add-plant').on('submit', plantEvents.onAddPlant)
  $('#update-plant').on('submit', plantEvents.onUpdatePlant)
  $('#delete-plant').on('submit', plantEvents.onDeletePlant)
  hidePlantInfo()
})
