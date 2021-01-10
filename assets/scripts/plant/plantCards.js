'use strict'

function htmlFormatter (plant) {
  let plantType = ''
  let plantData = ''
  let plantOwner = ''
  for (const [key, value] of Object.entries(plant)) {
    if (key === 'type') {
      plantType = (`${key}: ${value}`)
    } else if (key === 'owner') {
      plantOwner = (`${key}: ${value.email}`)
    } else if (key !== 'createdAt' && key !== '__v' && key !== 'updatedAt' && key !== '_id') {
      const plantIndexData = (`<li>${key}: ${value}</li>\n`)
      plantData += plantIndexData
    }
  }
  const plantHTMLData = (`
       <div class="col-4">
         <div class="card">
           <div class="card-header">Plant ${plantType}</div>
           <div class="card-body">
            <p>Plant data:</p>
            <ul>${plantData}</ul>
           </div>
           <div class="card-footer">Plant ${plantOwner}</div>
         </div>
       </div>
       `)
  console.log(plantHTMLData)
  $('#plant-data').append(plantHTMLData)
}

module.exports = htmlFormatter
