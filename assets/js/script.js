var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

 $("#submit").click(function () {
     var name = $("#name").val();
      var star = $("#star").val();
      var comment = $("#comment").val();
      // var str = ` Name: ${name} and rating: ${star} and feedback: ${comment}`
      var str = `rating: ${star} and feedback: ${comment}`
    var str1=`Name:${name}`
       $("#modal_heading").html(str1);
       $("#modal_body").html(str);
    });
  $(document).ready(function() {
          $("#st1").click(function() {
              $(".fa-star").css("color", "black");
              $("#st1").css("color", "yellow");

          });
          $("#st2").click(function() {
              $(".fa-star").css("color", "black");
              $("#st1, #st2").css("color", "yellow");

          });
          $("#st3").click(function() {
              $(".fa-star").css("color", "black")
              $("#st1, #st2, #st3").css("color", "yellow");

          });
          $("#st4").click(function() {
              $(".fa-star").css("color", "black");
              $("#st1, #st2, #st3, #st4").css("color", "yellow");

          });
          $("#st5").click(function() {
              $(".fa-star").css("color", "black");
              $("#st1, #st2, #st3, #st4, #st5").css("color", "yellow");

          });
        });