$ (document).ready(function() {
  
  var cd = moment();
  console.log(cd.format("dddd, MMMM Do YYYY, h:mm:ss a"));

  // $('#cd').text(cd.format("dddd, MMMM Do YYYY, h:mm:ss a"))
  setInterval(function(){
    $('#cd').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  }, 1000);
     
     //onclick function for the save button on the time slots
      $(".saveBtn").on("click", function() {
      
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(value,time)
        localStorage.setItem(time, value);
       // console.log(time, v);
      })
      //localStorage for the events that were entered in the table for each hour
      var show = $('#hour-9 .description').val(localStorage.getItem("hour-9"))
      $(".upcoming").html(show)
       console.log($('#hour-9 .description').val(localStorage.getItem("hour-9")))
    
       var show = $('#hour-10 .description').val(localStorage.getItem("hour-10"))
      $(".upcoming").html(show)
       console.log($('#hour-10 .description').val(localStorage.getItem("hour-10")))
    
       var show = $('#hour-11 .description').val(localStorage.getItem("hour-11"))
      $(".upcoming").html(show)
       console.log($('#hour-11 .description').val(localStorage.getItem("hour-11")))
    
       var show = $('#hour-12 .description').val(localStorage.getItem("hour-12"))
      $(".upcoming").html(show)
       console.log($('#hour-12 .description').val(localStorage.getItem("hour-12")))
    
       var show = $('#hour-13 .description').val(localStorage.getItem("hour-13"))
      $(".upcoming").html(show)
       console.log($('#hour-13 .description').val(localStorage.getItem("hour-13")))
    
       var show = $('#hour-14 .description').val(localStorage.getItem("hour-14"))
      $(".upcoming").html(show)
       console.log($('#hour-14 .description').val(localStorage.getItem("hour-14")))
    
       var show = $('#hour-15 .description').val(localStorage.getItem("hour-15"))
      $(".upcoming").html(show)
       console.log($('#hour-15 .description').val(localStorage.getItem("hour-15")))
    
       var show = $('#hour-16 .description').val(localStorage.getItem("hour-16"))
      $(".upcoming").html(show)
       console.log($('#hour-16 .description').val(localStorage.getItem("hour-16")))
    
       var show = $('#hour-17 .description').val(localStorage.getItem("hour-17"))
      $(".upcoming").html(show)
       console.log($('#hour-17 .description').val(localStorage.getItem("hour-17")))
      })

      
      
      //I made a few different trys to get moment working one way was the variable followed by moment.format.
      //also tried just putting it in the html that also didnt work
      
      // moment().format();
      // moment().format(String);
    