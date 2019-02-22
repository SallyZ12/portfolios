
$(function(){
  console.log("loaded:assets/javascripts/transactions.js")

  getTransactionForm()
});


function getTransactionForm(){
  $('button#transaction-form').on('click', function(e){
    e.preventDefault();
  $.ajax({
    url: this.href,
    method: 'get',
    dataType: 'html'
  }).done(function(response){
      $('div#ajax-transaction-form').html(response);
    })
  })
};

function postTransaction(){

}

class Transaction{
  constructor(obj){
    this.id = obj.id;
    this.name = obj.name;
    this.series = obj.series
    this.par = obj.par
    this.user = obj.user;
    this.credit = obj.credit;
  }

static newTransactionForm() {
  return (`
    <strong> New Transaction Form </strong>
    <form>
      <input id = 'transaction' type='text' name='name'>
      <input type='text' name = 'name'></input><br>
      <input type='text' series = 'series'></input><br>
      <input type='text' par = 'par'></input><br>
      <input type='submit' />
    </form>
    `)
  }
};


Transaction.prototype.transactionHTML = function (){
  return (`
    <table>
    <caption> <h4>New Transaction AJAX Response </h4></caption>
      <thead>
      <tr>
      <th>Name</th>
      <th>Series </th>
      <th>Par </th>
      </tr>
      </thead>
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
