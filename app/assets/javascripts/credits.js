
$(function() {
  console.log("loaded:assets/javascripts/credits.js")
  getCreditForm()
  listenForClearCreditClick()
  // listenForShowClick()
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

// function listenForShowClick(){
//   $('button#show-credit').on('click', function(e){
//     e.preventDefault()
//     showCredit()
//   })
// }



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


    // function showCredit(){
    //     $.ajax({
    //       url: this.href,
    //       method: 'get',
    //       dataType: 'json',
    //     }).done(function(data){
    //       let showCredit = new Credit(data)
    //       let showCreditHTML = showCredit.creditHTML()
    //     document.getElementById("ajax-show-credit").innerHTML = showCreditHTML
    //     })
    //   }

    // ajax response for next Credit on show page
      $(function () {
        $("#js-next").on("click", function(e){
        e.preventDefault()
      const nextId = parseInt($("#js-next").attr("data-id")) + 1;

      $.get('/credits/' + nextId + ".json", function(data) {

          let myCredit = new Credit(data)
          let myCreditHTML = myCredit.creditHTML()
          document.getElementById("ajax-next-credit").innerHTML = myCreditHTML

          $("#js-next").attr("data-id", data["id"]);
      })
    })
  })


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
        <caption> <h4>Credit AJAX Response </h4></caption>
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
