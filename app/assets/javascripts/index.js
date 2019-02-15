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
  constructor(user_id, credit_id, limit, rating){
    this.user_id = user_id;
    this.credit_id = credit_id;
    this.limit = limit;
    this.rating = rating;
  }
}

// Exposure.prot

// create a JS Class for Exposures

// custom function on the prototypee of Exposure
// create some custom HTML
// append theml


// function newCredit(){
//   $('form#add-credit').on('submit', (function(event){
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
