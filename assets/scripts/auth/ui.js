'use strict'
// Required files
const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Signed Up Successfully!')
  $('form').trigger('reset')
}
const signUpFailure = function (onError) {
  $('#unauth-message').text('Sign Up Failed')
}

const signInSuccess = function (response) {
  $('#message').text('Sign In Success')
  // $('#message').delay(1000).text('')
  store.user = response.user
  $('#auth-nav').hide()
  $('#plant-nav').show()
  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('form').trigger('reset')
}
const signInFailure = function (onError) {
  $('#unauth-message').text('Sign In Failed')
}

const changePasswordSuccess = function () {
  $('#message').text('Change password success!')
  $('form').trigger('reset')
}
const changePasswordFailure = function (onError) {
  $('#message').text('Change Password Failed')
}

const signOutSuccess = function () {
  $('#unauth-message').text('You have been signed out.')
  $('.authenticated').hide()
  $('.unauthenticated').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  store.user = null
  $('form').trigger('reset')
}
const signOutFailure = function (onError) {
  $('#message').text('Sign Out Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
