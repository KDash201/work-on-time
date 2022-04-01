var saveBtn = $(".saveBtn");

//today date
$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

function timeBlock() {
  var hour = moment().hour();

  $(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("id"));

    if (currentHour > hour) {
      $(this).addClass("future");
    } else if (currentHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}

// save button/local storage
saveBtn.on("click", function () {
  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".plan").val();

  localStorage.setItem(time, plan);
});

function usePlanner() {
  $(".hour").each(function () {
    var currentHour = $(this).text();
    var currentPlan = localStorage.getItem(currentHour);
    console.log(currentPlan);

    if (currentPlan !== null) {
      $(this).siblings(".plan").val(currentPlan);
    }
  });
}

timeBlock();
usePlanner();
