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
      console.log('response:', data)
      let myexposure = new Exposure(data[1])
      let myExposureHTML = myexposure.postHTML()
      document.getElementById("exposure-data").innerHTML += myExposureHTML
        // let mycredit = new Credit(data[1]["credit"])
        // let myCreditHTML = mycredit.postHTML()
        // document.getElementById("exposure-data").innerHTML += myCreditHTML
    })
  })
}

class Exposure{
  constructor(obj){
    this.id = obj.id
    this.limit = obj.limit;
    this.rating = obj.rating;
    this.credit = obj.credit;
    this.user = obj.user;
  }
};



Exposure.prototype.postHTML = function (){
  return (`
    <table>
      <caption> <h4> AJAX Response <h4></caption>
        <thead>
        <tr>
        <th>Company</th>
        <th>Credit Name</th>
        <th>Sector </th>
        <th>State </th>
        <th>Company Rating</th>
        <th>External Rating</th>
        <th>Limit</th>
        </tr>
        </thead>
        <tbody>
          <tr>
          <td> ${this.user.username} </td>
          <td> ${this.credit.credit_name} </td>
          <td> ${this.credit.sector} </td>
          <td> ${this.credit.state} </td>
          <td> ${this.rating} </td>
          <td> ${this.credit.rating} </td>
          <td> ${this.limit} </td>
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
