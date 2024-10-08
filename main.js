

$(function () {$('#work_slider').slick({
    arrows: true, 
    dots:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    }
    );
    });
    
    $(document).on('ready', function() {
    $("#regular").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  
  });
}); 




    // ハンバーガー
    $(function() {
     $(".humberger,.sp-nav li").on("click", function () {
      $(".sp-nav").fadeToggle();
     $(".humberger").toggleClass("open");
         });
             });

      

    
            //  モーダル処理

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


            // ローディング画面
            window.onload = function() {
              const spinner = document.getElementById('loading');
              spinner.classList.add('loaded');
            }

            document.body.addEventListener("click", drop, false);

            function drop(e) {



                // //座標の取得
                // var x = e.pageX;
                // var y = e.pageY;

                // //しずくになるdivの生成、座標の設定
                // var sizuku = document.createElement("div");
                // sizuku.style.top = y + "px";
                // sizuku.style.left = x + "px";
                // document.body.appendChild(sizuku);

                // //アニメーションをする className を付ける
                // sizuku.className = "sizuku";

                // //アニメーションが終わった事を感知してしずくを remove する
                // sizuku.addEventListener("animationend", function() {
                //     this.parentNode.removeChild(this);
                // }, false);
            }


            // キャンバス



          (function () {
 
            var unit = 100,
                canvas, context, canvas2, context2,
                height, width, xAxis, yAxis,
                draw;
             
            /**
             * Init function.
             * 
             * Initialize variables and begin the animation.
             */
            function init() {
                
                canvas = document.getElementById("sineCanvas");
                
                canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
                canvas.height = 900;
                
                context = canvas.getContext("2d");
                
                height = canvas.height;
                width = canvas.width;
                
                xAxis = Math.floor(height/2);
                yAxis = 0;
                
                draw();
            }
             
            /**
             * Draw animation function.
             * 
             * This function draws one frame of the animation, waits 20ms, and then calls
             * itself again.
             */
            function draw() {
                
                // キャンバスの描画をクリア
                context.clearRect(0, 0, width, height);
             
                //波を描画
                drawWave('#bee8e9', 1, 3, 0);
                
                // Update the time and draw again
                draw.seconds = draw.seconds + .009;
                draw.t = draw.seconds*Math.PI;
                setTimeout(draw, 35);
            };
            draw.seconds = 0;
            draw.t = 0;
             
            /**
            * 波を描画
            * drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
            */
            function drawWave(color, alpha, zoom, delay) {
                context.fillStyle = color;
                context.globalAlpha = alpha;
             
                context.beginPath(); //パスの開始
                drawSine(draw.t / 0.5, zoom, delay);
                context.lineTo(width + 10, height); //パスをCanvasの右下へ
                context.lineTo(0, height); //パスをCanvasの左下へ
                context.closePath() //パスを閉じる
                context.fill(); //塗りつぶす
            }
             
            /**
             * Function to draw sine
             * 
             * The sine curve is drawn in 10px segments starting at the origin. 
             * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
             */
            function drawSine(t, zoom, delay) {
             
                // Set the initial x and y, starting at 0,0 and translating to the origin on
                // the canvas.
                var x = t; //時間を横の位置とする
                var y = Math.sin(x)/zoom;
                context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く
                
                // Loop to draw segments (横幅の分、波を描画)
                for (i = yAxis; i <= width + 10; i += 10) {
                    x = t+(-yAxis+i)/unit/zoom;
                    y = Math.sin(x - delay)/3;
                    context.lineTo(i, unit*y+xAxis);
                }
            }
             
            init();
                
            })();







        
       
          
            
            
            
    