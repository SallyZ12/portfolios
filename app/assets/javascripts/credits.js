
$(function() {
  console.log("loaded:assets/javascripts/credits.js")
  getCreditForm()
  listenForClick()
  listenForAllCredits()
});

function listenForClick(){
  $('button#new-credit-form').on('click', function(event){
    event.preventDefault()
    getCreditForm()
  })
}

function listenForAllCredits(){
  $('button#all-credits').on('click', function(event){
    event.preventDefault()
    allCredits()
})
}


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

          addCredit.done(function(data){
            // use Credit Class here
              let mycredit = new Credit(data)
                let myCreditHTML = mycredit.creditHTML()
                  document.getElementById("new_credit").innerHTML += myCreditHTML
          })
      })
    };


      // AJAX Response List of All Credits By User
    function allCredits(){
      $.ajax({
        url: this.href,
        method: 'get',
        dataType: 'json'
      }).done(function(data){
        let headerHTML =
        (`<table id = "js-table"> <caption> <strong> AJAX Response </strong> </caption>
        <thead>
        <th>Credit ID </td>
        <th>Credit Name</th>
        <th>Sector </th>
        <th>State </th>
        <th>Ext Rating</th>
        </tr>
        </thead>
        </table>
        `)
        document.getElementById("credit-index").innerHTML = " "
        document.getElementById("credit-index").innerHTML += headerHTML
        data.map(credit => {
          let myCredit = new Credit(credit)
          let myCreditAllHTML = myCredit.allCreditsHTML()
          document.getElementById("credit-index").innerHTML += myCreditAllHTML
        })
    })
  };


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
    });

    class Credit{
      constructor(obj){
        this.id = obj.id;
        this.credit_name = obj.credit_name;
        this.rating = obj.rating;
        this.sector = obj.sector;
        this.state = obj.state;
      }
    };

    // Used with Show Credit Ajax Response
    Credit.prototype.creditHTML = function (){
    return (`
        <table>
        <caption> <h4>Credit AJAX Response </h4></caption>
          <thead>
          <tr>
          <th>Credit ID </td>
          <th>Credit Name</th>
          <th>Sector </th>
          <th>State </th>
          <th>Ext Rating</th>
          </tr>
          </thead>
            <tbody>
              <tr>
              <td> ${this.id} </td>
              <td> ${this.credit_name} </td>
              <td> ${this.sector} </td>
              <td> ${this.state} </td>
              <td> ${this.rating} </td>
            </tr>
            </tbody>
        </table>
      `)
    };

    // Used with List of Credits Due to Constraints on Table
    Credit.prototype.allCreditsHTML = function (){
      let baseUrl = 'http://localhost:3000/credits'
      let creditId = this.id
      let showCreditId = baseUrl + '/' + creditId
      return (`
        <table id="js-table">
            <tbody>
              <tr>
              <td> ${this.id} </td>
              <td> <a href = ${showCreditId}>${this.credit_name} </td>
              <td> ${this.sector} </td>
              <td> ${this.state} </td>
              <td> ${this.rating} </td>
            </tr>
            </tbody>
        </table>
        `)
    };
