$(function() {
  console.log("loaded: assets/javascripts/exposures.js")
  listenForClick()
});

function listenForClick(){
  $('button#data-button').on('click', function(event){
    event.preventDefault()
    getExposures()
  })
}


function getExposures(){
    $.ajax({
      url: 'http://localhost:3000/exposures',
      method: 'get',
      dataType: 'json'
    }).done(function(data){
      console.log('response:', data)
      let myexposure = new Exposure(data[1])
      let myExposureHTML = myexposure.postHTML()
      document.getElementById("exposure-data").innerHTML += myExposureHTML
    })
  }


class Exposure{
  constructor(obj){
    this.id = obj.id
    this.limit = obj.limit;
    this.rating = obj.rating;
    this.credit = obj.credit;
    this.user = obj.user;
    this.transactions = obj.transactions;
  }
};



Exposure.prototype.postHTML = function (){
  return (`
    <table>
      <caption> <h4> AJAX Exposure Response <h4></caption>
        <thead>
        <tr>
        <th>Company</th>
        <th>Credit Name</th>
        <th>Sector </th>
        <th>State </th>
        <th>Co Rating</th>
        <th>Ext Rating</th>
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
