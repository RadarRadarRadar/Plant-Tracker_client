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
    $('#unauth-message').text('')
  })
  $('#sign-in-form').on('click', function () {
    $('#sign-in').toggle()
    $('#sign-up').hide()
    $('#unauth-message').text('')
  })
  $('#add-plant-form').on('click', function () {
    hidePlantInfo()
    $('#add-plant').toggle()
    $('#message').text('')
    $('#plant-data-messages').text('')
  })
  $('#find-plant-form').on('click', function () {
    hidePlantInfo()
    $('#find-plant').toggle()
    $('#message').text('')
    $('#plant-data-messages').text('')
  })
  $('#update-plant-form').on('click', function () {
    hidePlantInfo()
    $('#update-plant').toggle()
    $('#message').text('')
    $('#plant-data-messages').text('')
  })
  $('#delete-plant-form').on('click', function () {
    hidePlantInfo()
    $('#delete-plant').toggle()
    $('#message').text('')
    $('#plant-data-messages').text('')
  })
  $('#user-settings-form').on('click', function () {
    hidePlantInfo()
    $('#change-password').toggle()
    $('#message').text('')
    $('#plant-data-messages').text('')
  })
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#index-plants').on('click', plantEvents.onIndexPlants)
  $('#index-plants').on('click', function () {
    $('#message').text('')
    $('#plant-data-messages').text('')
    hidePlantInfo()
  })
  $('#find-plant').on('submit', plantEvents.onFindPlant)
  $('#add-plant').on('submit', plantEvents.onAddPlant)
  $('#update-plant').on('submit', plantEvents.onUpdatePlant)
  $('#delete-plant').on('submit', plantEvents.onDeletePlant)
  hidePlantInfo()
})
