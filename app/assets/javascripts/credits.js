
$(function() {
  console.log("credits.js loaded")
  formCredit()
  newCredit()
});

// retrieves html form and puts on page
  function formCredit(){
    $("a#new-credit-form").on('click', function(event){
      event.preventDefault();
      // const url = window.location.pathname;
      $.ajax({
        url: this.href,
        method: 'get',
        dataType: 'html'
      }).done(function(response){
          $('div#ajax-credit-form').html(response);
        console.log('response:', response)
      })
    });
  };

//  loads data into Rails database
  function newCredit() {
    $('form#add-credit').on('submit', function(event){
      event.preventDefault();

        let inputs = $(this).serialize();
        let addCredit = $.post('/credits', inputs);

        addCredit.done(function(data) {
          let credit = data;
          $("#creditName").text(credit["credit_name"]);
          // $("#creditSector").text(credit["sector"]);
          // $("#creditRating").text(credit["rating"]);
          // $("#creditState").text(credit["state"]);
        });
    });
  };
