'use strict'

function htmlFormatter (plant) {
  // let plantType = ''
  // let plantData = ''
  // let plantOwner = ''

  // for (const [key, value] of Object.entries(plant)) {
  //   if (key === 'type') {
  //     plantType = (`${key}: ${value}`)
  //   } else if (key === 'owner') {
  //     plantOwner = (`${key}: ${value.email}`)
  //   } else if (key !== 'createdAt' && key !== '__v' && key !== 'updatedAt') {
  //     const plantIndexData = (`<li>${key}: ${value}</li>\n`)
  //     plantData += plantIndexData
  //   }
  // }

  console.log(plant.type)

  const plantHTMLData = (`
       <div class="col-4 mt-3">
         <div class="card">
           <div class="card-header">Plant ${plant.type}</div>
           <div class="card-body">
            <p>Plant data:</p>
            <ul>
              <li>id: ${plant._id}</li>
              <li>stage: ${plant.stage}</li>
              <li>light: ${plant.light}</li>
              <li>water: ${plant.water}</li>
              <li>soil: ${plant.soil}</li>
            </ul>
           </div>
           <div class="card-footer">Plant ${plant.owner.email}</div>
         </div>
       </div>
       `)

  $('#plant-data').append(plantHTMLData)
}

module.exports = htmlFormatter
