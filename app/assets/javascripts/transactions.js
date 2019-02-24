
$(function(){
  console.log("loaded:assets/javascripts/transactions.js")
  listenForNewTransactionFormClick()

});

function listenForNewTransactionFormClick(){
  $('button#ajax-new-transaction').on('click', function(e){
    e.preventDefault();

    let newTransactionForm = Transaction.newTransactionForm()
    document.querySelector('div#ajax-transaction-form').innerHTML = newTransactionForm

    postTransaction()
  })
};




function postTransaction(){
  $('form#new-transaction').on('submit', function(e){
    e.preventDefault();

    // let headers = {'authenticity_token': $('meta[name="csrf-token"]').attr('content')}
    let inputs = $(this).serialize()
    // let allInputs = inputs + "authenticity_token" + "=" + headers["authenticity_token"]
    let addTransaction = $.post('/exposures/4/transactions', inputs);

    // let addTransaction = $.ajax({
    //   url: '/exposures/4/transactions',
    //   headers: {'authenticity_token': $('meta[name="csrf-token"]').attr('content')},
    //   method:'POST',
    //   data: this.data,
    //   success: function(data){
    //     console.log('success: ' +data);
    //   }
    // });

    addTransaction.done(function(data){
      let myTransaction = new Transaction(data)
      let myTransactionHTML = mytransaction.transactionHTML()
      document.getElementById('new-transaction').innerHTML += myTransactionHTML
    })
  })
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
      <form id="new-transaction"> <br>

        Name: <input type='text' name= "name"> <br>
        Series: <input type='text' name="series"> <br>
        Par: <input type='text' name="par"><br>

        <input type='submit' value = "Create AJAX
         Transaction">
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
