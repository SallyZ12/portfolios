$(function() {
  console.log("loaded: assets/javascripts/exposures.js")
  getExposures()

});

function getExposures(){
  $('button#data-button').on('click', function(event){
    event.preventDefault()

    $.ajax({
      url: 'http://localhost:3000/exposures',
      method: 'get',
      dataType: 'json'
    }).done(function(data){
      console.log('response:',data)
      let myexposure = new Exposure(data[1])
      let myExposureHTML = myexposure.postHTML()
      document.getElementById("exposure-data").innerHTML += myExposureHTML

    })
  })
}

class Exposure{
  constructor(obj){
    this.id = obj.id
    this.credit_id = obj.credit_id
    this.user_id = obj.user_id
    this.limit = obj.limit;
    this.rating = obj.rating;
  }

    // credits(){
    //   return credits.filter(
    //     function(credit) {
    //      return credit.objId === this.id;
    //   }).bind(this)
    // };
  };

  // class Credit{
  //   constructuor(obj){
  //     this.credit_name = obj.credit_name
  //     this.rating = obj.rating
  //     this.sector = obj.sector
  //     this.state = obj.state
  //   }
  // }


// class User {
//   constructor(obj) {
//     this.username = obj.username
//   }
// }
//

// class Transaction {
//   constructor(obj) {
//     this.name = obj.name
//     this.series = obj.series
//
//   }
// }






Exposure.prototype.postHTML = function (){
  return (`
    <table>
      <caption> <h4> AJAX Response <h4></caption>
        <thead>
        <tr>
        <th>ID</th>
        <th>Limit</th>
        <th>Rating</th>
        </tr>
        </thead>
        <tbody>
          <tr>
          <td> ${this.id} </td>
          <td> ${this.limit} </td>
          <td> ${this.rating} </td>
        </tr>
        </tbody>
    </table>
  `)
};

// Exposure.prot

// create a JS Class for Exposures

// custom function on the prototypee of Exposure
// create some custom HTML
// append theml
