$(function() {
  console.log("index.js loaded")
  getExposures()
  // newCredit()
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
    this.user_id = obj.user_id;
    this.credit_id = obj.credit_id;
    this.limit = obj.limit;
    this.rating = obj.rating;
  }
}

// Exposure.prot

// create a JS Class for Exposures

// custom function on the prototypee of Exposure
// create some custom HTML
// append theml


// function newCredit(){
//   $('add-credit form').on('submit', (function(event){
//     event.preventDefault();
//
//       let inputs = $(this).serialize();
//       let addCredit = $.post('/credits', inputs);
//
//       addCredit.done(function(data) {
//         let credit = data;
//         $("#creditName").text(credit["credit_name"]);
//         $("#creditSector").text(credit["sector"]);
//         $("#creditRating").text(credit["rating"]);
//         $("#creditState").text(credit["state"]);
//       });
//   }));
// };
