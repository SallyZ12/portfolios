$(function() {
  console.log("loaded: assets/javascripts/exposures.js")
  listenForClick()
  listenForAnotherClick()
  listenForListClick()
});

function listenForClick(){
  $('button#data-button').on('click', function(event){
    event.preventDefault()
    getExposures()
  })
}

function listenForAnotherClick(){
$('button#clear-button').on('click', function() {
  $("div").empty("#exposure-data");
})
};

function listenForListClick(){
  $('button#list-transactions').on('click', function(e){
    event.preventDefault()
    getTransactionList()
  })
}


function getExposures(){

    $.ajax({
      url: 'http://localhost:3000/exposures',
      method: 'get',
      dataType: 'json'
    }).done(function(data){
      let headerHTML =
        (`
        <table id = "js-table"> <caption> <strong> AJAX Response </strong> </caption>
        <thead>
        <tr>
        <th>Company</th>
        <th>Credit Name</th>
        <th>Sector </th>
        <th>State </th>
        <th>Co Rating</th>
        <th>Ext Rating</th>
        <th>Limit</th>
        <th>Total Par</th>
        <th>Violation</th>
        </tr>
        </thead>
        </table>
      `)

      document.getElementById("exposure-data").innerHTML += headerHTML
      data.map(exposure => {
      let myExposure = new Exposure(exposure)
      let myExposureHTML = myExposure.exposureHTML()
      document.getElementById("exposure-data").innerHTML += myExposureHTML
        })
    })
  };


class Exposure{
  constructor(obj){
    this.id = obj.id
    this.limit = obj.limit;
    this.rating = obj.rating;
    this.credit = obj.credit;
    this.user = obj.user;
    this.transactions = obj.transactions;
    this.t_sum = obj.t_sum;
  }
  violations() {
    return (this.limit - this.t_sum < 0) ? "Yes" : "No";
  }
};

// use with headerHTML function above
Exposure.prototype.exposureHTML = function (){
return (`
    <table id="js-table">
        <tbody>
          <tr>
          <td> ${this.user.username} </td>
          <td> ${this.credit.credit_name} </td>
          <td> ${this.credit.sector} </td>
          <td> ${this.credit.state} </td>
          <td> ${this.rating} </td>
          <td> ${this.credit.rating} </td>
          <td> ${this.limit} </td>
          <td> ${this.t_sum} </td>
          <td> <v>${this.violations()}</v></td>
        </tr>
        </tbody>
    </table>
  `)
};


function getTransactionList(){
  $.ajax({
    url: this.href,
    method: 'get',
    dataType: 'json',
  }).done(function(data){
    let transHeaderHTML =
    (`
      <table id = "js-table">
      <caption> <h4>Exposure Transaction List AJAX Response </h4></caption>
        <thead>
        <tr>
        <th> Name</th>
        <th> Series </th>
        <th> Par </th>
        </tr>
        </thead>
        </table>
        `)
        $('#transaction-list').innerHTML += transHeaderHTML

          // need to revisit this
          // const dataTrans = data.transactions

          // dataTrans.map(transactions => {
          let myExposure = new Exposure(data)
          // let myTransactions = myExposure.transactions

            myExposure.transactions.map(transaction => {
              let myExpTransactionHTML = myExposure.myExpTransactionHTML()
                $('#transaction-list').innerHTML += myExpTransactionHTML
          })
        })
      };


Exposure.prototype.myExpTransactionHTML = function(){
  return (`
    <table id = "js-table">
  <tbody>
  <tr>
  <td> ${this.name} </td>
  <td> ${this.series} </td>
  <td> ${this.par} </td>
  </tr>
  </tbody>
  </table>
  `)
};
