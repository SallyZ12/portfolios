$(function() {
  console.log("index.js loaded")
  getExposures()
});

function getExposures(){
  $('button#data-button').on('click', function(event){
    event.preventDefault()

    $.ajax({
      url: 'http://localhost:3000/exposures',
      method: 'get',
      dataType: 'json'
    }).done(function(response){
      console.log('response: ', response)

    })

  })

}

class Exposure{
  constructor(obj){
    this.id = obj.id

  }

}

// Exposure.prot

// create a JS Class for Exposures

// custom function on the prototypee of Exposure
// create some custom HTML
// append theml
