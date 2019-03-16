$(function() {
  console.log("loaded: assets/javascripts/exposures.js")
  listenForClick()
  listenForListClick()
  listenForShowClick()
  sortButton()

});

function listenForClick(){
  $('button#data-button').on('click', function(event){
      event.preventDefault()
        getExposures()
  })
}

function listenForListClick(){
  $('button#list-transactions').on('click', function(event){
      event.preventDefault()
        getTransactionList()
  })
}

function listenForShowClick(){
  $('button#show-exposure').on('click', function(event){
      event.preventDefault()
        showExposure()
})
}

function sortButton(){
  $('button#sort-button').on('click', function(event){
    event.preventDefault()
      setUpSortByCompany()
})
}

function setUpSortByCompany(){
  getExposures(true);
}


function sortByCompany(data){
  data.sort(function(a,b){
    let attributeA = a.user.username
     let attributeB = b.user.username
      return attributeA.localeCompare(attributeB);
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


function getExposures(sort = false){

    $.ajax({
      url: 'http://localhost:3000/exposures',
      method: 'get',
      dataType: 'json'
    }).done(function(data){
      if (sort){
        sortByCompany(data)
      }

      // js version returns HTML DOM object
      // document.getElementById("exposure-data").innerHTML = ""
      // document.getElementById("exposure-data").innerHTML += headerHTML

      // jquery version without [0] returns jquery object not HTML DOM object
        $("#exposure-data")[0].innerHTML = ""
          $("#exposure-data")[0].innerHTML = Exposure.headerHTML

      data.map(exposure => {
        let myExposure = new Exposure(exposure)
          let myExposureHTML = myExposure.exposureHTML()

            $("#exposure-data")[0].innerHTML += myExposureHTML
        })
    })
  };

  Exposure.headerHTML =
    (`
    <table id = "js-table"> <caption> <strong> AJAX Response </strong> </caption>
    <thead>
    <tr>
    <th>Exposure ID </th>
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


// use with getExposures function above
Exposure.prototype.exposureHTML = function (){
  let baseUrl = 'http://localhost:3000/exposures';
    let expId = this.id;
      let showExpUrl = baseUrl + '/' + expId
return (`
    <table id="js-table">
        <tbody>
          <tr>
          <td> ${this.id} </td>
          <td> <a href=${showExpUrl}>${this.user.username} </td>
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

function showExposure(){
  $.ajax({
    url: this.action,
    method: 'get',
    dataType: 'json'
  }).done(function(data){

    document.getElementById("ajax-show-exposure").innerHTML = ''
      document.getElementById("ajax-show-exposure").innerHTML += Exposure.headerHTML

    let showExposure = new Exposure(data)
      let showExposureHTML = showExposure.exposureHTML()
        document.getElementById("ajax-show-exposure").innerHTML += showExposureHTML
  })
};


function getTransactionList(){

  $.ajax({
    url: this.url,
    method: 'get',
    dataType: 'json',
  }).done(function(data){

        document.getElementById("transaction-list").innerHTML = ''
          document.getElementById("transaction-list").innerHTML += Exposure.transHeaderHTML

        let myExposure = new Exposure(data)
          let myTransactionListHTML = myExposure.expTransactionHTML()
            document.getElementById("transaction-list").innerHTML += myTransactionListHTML
    })
  };

  Exposure.transHeaderHTML =
  (`
    <table id = "js-table">
    <caption> <h4>Exposure Transaction List AJAX Response </h4></caption>
      <thead>
      <tr>
      <th> Transaction ID </th>
      <th> Transaction Name </th>
      <th> Series </th>
      <th> Par </th>
      </tr>
      </thead>
      </table>
      `)


// Use with getTransactionList()
Exposure.prototype.expTransactionHTML = function (){

  return this.transactions.map(transaction => {

      return (`
          <table id = "js-table">
            <tbody>
              <tr>
                <td> ${transaction.id} </td>
                <td> ${transaction.name} </td>
                <td> ${transaction.series} </td>
                <td> ${transaction.par} </td>
              </tr>
            </tbody>
          </table>
      `)
    }).join("")
}
