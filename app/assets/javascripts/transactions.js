
$(function (){
  console.log("loaded: javascripts/transctions.js")
  getTransactionForm()
});


function getTransactionForm(){
  $('a#new-transaction-form').on('click', function(e){
    e.preventDefault();
    $.ajax({
      url: this.href,
      method: 'get',
      dataType: 'html'
    }).done(function(response){
        $('div#ajax-transaction-form').html(response);
      postTransaction()
    })
  })
}

function postTransaction(){
  $('form#new_transaction').on('submit', function(e){
    e.preventDefault();
    // this is a DOM object, $(this) is a jQuery Object, serialize() jQuery method
    let inputs = $(this).serialize();
      let expUrl = window.location.pathname;
        let transUrl = expUrl + '/transactions'
          let addTransaction = $.post(transUrl, inputs);

    addTransaction.done(function(data){
      let myTransaction = new Transaction(data)
        let myTransactionHTML = myTransaction.transactionHTML()
          document.getElementById("new_transaction").innerHTML += myTransactionHTML
    })
    getTransactionList();
    showExposure();
  })
};

class Transaction{
  constructor(obj){
    this.id = obj.id;
    this.name = obj.name;
    this.series = obj.series;
    this.par = obj.par;
    this.exposure = obj.exposure;
  }
};

Transaction.prototype.transactionHTML = function (){
  return (`
    <table>
    <caption> <h4>New Transaction AJAX Response </h4></caption>
      <thead>
      <tr>

      <th> Exposure ID </th>
      <th> Name</th>
      <th> Series </th>
      <th> Par </th>
      </tr>
      </thead>
        <tbody>

          <td> ${this.exposure.id}
          <td> ${this.name} </td>
          <td> ${this.series} </td>
          <td> ${this.par} </td>
        </tr>
        </tbody>
    </table>
    `)
  };
