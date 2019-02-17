
$(function() {
  console.log("loaded:app/assets/javascripts/credits.js")
  formCredit();
  postCredit();
});


// retrieves html form and puts on page
  function formCredit(){
    $('a#new-credit-form').on('click', function(e){
      e.preventDefault();

      $.ajax({
        url: this.href,
        method: 'get',
        dataType: 'html'
      }).done(function(response){
          $('div#ajax-credit-form').html(response);
        // console.log('response:', response)
      })
    });
};


   // loads data into Rails database
    function postCredit(){

      $('form#add-credit').on('submit',function(e){
        // e.stopImmediatePropagation();
        e.preventDefault();
          alert("stop");
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
