
$(function(){
  console.log("loaded:assets/javascripts/transactions.js")
  listenForClick();
});



function listenForClick(){
  $('a#new-transaction-form').on('click', function(e){
    e.preventDefault();
  })
}

function getTransactionForm(){
  $.ajax({
    url: this.href,
    method: 'get',
    dataType: 'html'
  }).done(function(response){
      $('div#ajax-transaction-form').html(response);
    })
  }
