$(document).ready(function () {


  setTimeout(function () {
    $('.splash').fadeTo("fast", 0.01);
    $('.menu').fadeTo("fast", 1);

  }, 1000);




  run1 = () => {

    setTimeout(function () {
      $('.main-menu').fadeOut();
      setTimeout(function () {
        $('.select-pig').fadeTo("fast", 1);

      }, 1000);

    }, 1000);


  }

  $('.run').on('click', run1);

  $('.ok-slaughter').on('click', function () {
    $('.jumbotron').fadeOut();
    $('.pigs').fadeTo("slow", 1);

  });

























});