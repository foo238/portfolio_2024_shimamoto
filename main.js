

$(function () {$('#work_slider').slick({
    arrows: true, 
    dots:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    autoplaySpeed: 4000,
    }
    );
    });
    
    $(document).on('ready', function() {
    $("#regular").slick({
    // autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  
  });
}); 


    $(function() {
     $(".humberger").on("click", function () {
      $(".sp-nav").fadeToggle();
     $(".humberger").toggleClass("open");
         });
             });

    

            $(function () {
              $('.js-open').click(function () {
                $('#overlay, .modal-window').fadeIn();
              });
              // オーバーレイクリックでもモーダルを閉じるように
              $('.js-close , #overlay').click(function () {
                $('#overlay, .modal-window').fadeOut(200);
              });
            });
            $(function () {
              $('.pc-open').click(function () {
                $('#overlay, .modal-window2').fadeIn(200);
              });
              // オーバーレイクリックでもモーダルを閉じるように
              $('.js-close , #overlay').click(function () {
                $('#overlay, .modal-window2').fadeOut(200);
              });
            });
            $(function () {
              $('.sp-open').click(function () {
                $('#overlay, .modal-window3').fadeIn(200);
              });
              // オーバーレイクリックでもモーダルを閉じるように
              $('.js-close , #overlay').click(function () {
                $('#overlay, .modal-window3').fadeOut(200);
              });
            });

            window.onload = function() {
              const spinner = document.getElementById('loading');
              spinner.classList.add('loaded');
            }