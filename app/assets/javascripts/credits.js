
$(function() {
  console.log("credits.js loaded")
  newCredit()
});


  function newCredit(){
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

// above retrieves html form and puts on page
// the following loads data into Rails database
    $('form#add-credit').on('submit', function(event){
      event.preventDefault();

        let inputs = $(this).serialize();
        let addCredit = $.post('/credits', inputs);

        addCredit.done(function(data) {
          let credit = data;
          $("#creditName").text(credit["credit_name"]);
          $("#creditSector").text(credit["sector"]);
          $("#creditRating").text(credit["rating"]);
          $("#creditState").text(credit["state"]);
        });
    });
  });
  };
