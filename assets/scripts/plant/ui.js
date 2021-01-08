'use strict'
// Required files
const store = require('./../store')

// function htmlFormatter ([key, value]) {
//   let plantTypeHTML = ''
//   let plantHTML = ''
//   let plantOwnerHTML = ''
//   if (key === 'type') {
//     const plantInfoHTML = (`${key}: ${value}`)
//     plantTypeHTML += plantInfoHTML
//   } else if (key === 'owner') {
//     const plantInfoHTML = (`${key}: ${value.email}`)
//     plantOwnerHTML += plantInfoHTML
//   } else if (key !== 'createdAt' && key !== '__v' && key !== 'updatedAt' && key !== '_id') {
//     const plantInfoHTML = (`<li>${key}: ${value}</li>`)
//     plantHTML += plantInfoHTML
//   }
//   const plantHTMLData = (`
//     <div class="col-6 plant-display">
//       <p>${plantTypeHTML}</p>
//       <ul>
//         ${plantHTML}
//       </ul>
//       <p>${plantOwnerHTML}</p>
//     </div>
//     `)
//   $('#plant-data').append(plantHTMLData)
// }

const indexPlantsSuccess = function (response) {
  store.plants = response.plants
  console.log(store.plants)
  const plantIndex = store.plants
  const plantIndexReverse = plantIndex.reverse()
  let plantHTML = ''
  plantIndexReverse.forEach(function (plant) {
    Object.entries(plant).forEach(([key, value]) => {
      if (key === 'type') {
        const plantInfoHTML = (`<div class="col-6 plant-display"><p>${key}: ${value}</p>`)
        plantHTML += plantInfoHTML
      } else if (key === 'owner') {
        const plantInfoHTML = (`<p>${key}: ${value.email}</p></div><br>`)
        plantHTML += plantInfoHTML
      } else if (key !== 'createdAt' && key !== '__v' && key !== 'updatedAt' && key !== '_id') {
        const plantInfoHTML = (`<li>${key}: ${value}</li>`)
        plantHTML += plantInfoHTML
      }
    })
  })
  $('#plant-data-messages').text('Plants!')
  $('#plant-data').html(plantHTML)
  $('form').trigger('reset')
}

const indexPlantsFailure = function (onError) {
  $('#plant-data-messages').text('Index of plants failed...')
}

const findPlantSuccess = function (response) {
  store.plant = response.plant
  console.log(store.plant)
  const plant = store.plant
  let plantHTML = ''
  for (const [key, value] of Object.entries(plant)) {
    if (key === 'type') {
      const plantInfoHTML = (`<div class="col-6 plant-display"><p>${key}: ${value}</p>`)
      plantHTML += plantInfoHTML
    } else if (key === 'owner') {
      const plantInfoHTML = (`<p>${key}: ${value.email}</p></div>`)
      plantHTML += plantInfoHTML
    } else if (key !== 'createdAt' && key !== '__v' && key !== 'updatedAt' && key !== '_id') {
      const plantInfoHTML = (`<li>${key}: ${value}</li>`)
      plantHTML += plantInfoHTML
    }
  }
  // Object.entries(plant).forEach(([key, value]) => {
  //   let plantTypeHTML = ''
  //   let plantHTML = ''
  //   let plantOwnerHTML = ''
  //   if (key === 'type') {
  //     const plantInfoHTML = (`${key}: ${value}`)
  //     plantTypeHTML += plantInfoHTML
  //   } else if (key === 'owner') {
  //     const plantInfoHTML = (`${key}: ${value.email}`)
  //     plantOwnerHTML += plantInfoHTML
  //   } else if (key !== 'createdAt' && key !== '__v' && key !== 'updatedAt' && key !== '_id') {
  //     const plantInfoHTML = (`<li>${key}: ${value}</li>`)
  //     plantHTML += plantInfoHTML
  //   }
  //   const plantHTMLData = (`
  //     <div class="col-6 plant-display">
  //       <p>${plantTypeHTML}</p>
  //       <ul>
  //         ${plantHTML}
  //       </ul>
  //       <p>${plantOwnerHTML}</p>
  //     </div>
  //     `)
  //   $('#plant-data').append(plantHTMLData)
  // })
  $('#plant-data-messages').text('Plant found!')
  $('#plant-data').html(plantHTML)
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
