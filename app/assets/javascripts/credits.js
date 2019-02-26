
$(function() {
  console.log("loaded:assets/javascripts/credits.js")
  getCreditForm()
  listenForClearCreditClick()
});

function listenForClick(){
  $('button#new-credit-form').on('click', function(event){
    event.preventDefault()
    getCreditForm()
  })
}

function listenForClearCreditClick(){
  $('button#clear-credit').on('click', function(){
    $("div").empty("#ajax-credit-form");
  })
};

// retrieves html form and puts on page
  function getCreditForm(){
    $('a#new-credit-form').on('click', function(e){
      e.preventDefault();
      $.ajax({
        url: this.href,
        method: 'get',
        dataType: 'html'
      }).done(function(response){
          $('div#ajax-credit-form').html(response);
        postCredit()
      })
    })
  };


   // loads data into Rails database
    function postCredit(){

      $('form#new_credit').on('submit',function(e){
        e.preventDefault();
          let inputs = $(this).serialize();
          let addCredit = $.post('/credits', inputs);

          addCredit.done(function(data) {
            // use Credit Class here
              let mycredit = new Credit(data)
              let myCreditHTML = mycredit.creditHTML()
              document.getElementById("new_credit").innerHTML += myCreditHTML
            })
            })
          };


    class Credit{
      constructor(obj){
        this.id = obj.id;
        this.credit_name = obj.credit_name;
        this.rating = obj.rating;
        this.sector = obj.sector;
        this.state = obj.state;
      }
    };


    Credit.prototype.creditHTML = function (){
    return (`
        <table>
        <caption> <h4>New Credit AJAX Response </h4></caption>
          <thead>
          <tr>
          <th>Credit Name</th>
          <th>Sector </th>
          <th>State </th>
          <th>Ext Rating</th>
          </tr>
          </thead>
            <tbody>
              <tr>
              <td> ${this.credit_name} </td>
              <td> ${this.sector} </td>
              <td> ${this.state} </td>
              <td> ${this.rating} </td>
            </tr>
            </tbody>
        </table>
      `)
    };
