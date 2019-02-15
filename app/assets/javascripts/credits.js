
// $(function() {
//   console.log("credits.js loaded")
//   newCredit()
// });
//
//
//   function newCredit(){
//     $("#add-credit form").on("submit", (function(event){
//       event.preventDefault();
//         alert("got this far");
//         let inputs = $(this).serialize();
//         let addCredit = $.post('/credits', inputs);
//
//         addCredit.done(function(data) {
//           let credit = data;
//           $("#creditName").text(credit["credit_name"]);
//           $("#creditSector").text(credit["sector"]);
//           $("#creditRating").text(credit["rating"]);
//           $("#creditState").text(credit["state"]);
//         });
//     }));
//   };
