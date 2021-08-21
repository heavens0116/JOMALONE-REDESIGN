$(function () {
  // hamBtn
  //
  //.ham_btn>a을 클릭하면 nav에 .active클래스를 추가/제거
  $(".ham_btn>a").click(function () {
    $(".ham_btn>a").css({
      color: "white",
    });

    $(".close_btn>a").css({
      color: "white",
    });

    $("nav").stop().animate({
      left: 0,
    });

    //X버튼은 보이게 + ham버튼은 안보이게 처리
    $(".close_btn>a").show();
    $(".ham_btn>a").hide();
  });

  $(".close_btn>a").click(function () {
    $("nav").stop().animate({
      left: "-100%",
    });

    $(".ham_btn>a").show().css({
      color: "#544f49",
    });
    $(".close_btn>a").hide();
  });

  // search icon
  //
  $(".search_input a").click(function () {
    $(".search_input > input").stop().animate({
      width: "180px",
    });
    if (window.innerWidth < 835) {
      $(".search_member>.member").css({
        display: "block",
      });
    }
  });

  // shop fragrance
  //
  var wWidth = $(window).width();
  //현재 보여지는 배너(가운데 배너)가 누구인지 체크할 변수 만들기
  var showBanner = 0;
  // 자식의 너비
  var liWidth = $(".shop_our>li").outerWidth();
  //복사전 배너의 개수
  var liCount = $(".shop_our>li").length;
  // 배너 앞 뒤로 각각 2개씩 복제
  // 앞
  var objFirst = $(".shop_our>li:lt(3)").clone();
  //뒤
  var objLast = $(".shop_our>li:gt(4)").clone();
  //배너의 앞뒤로 붙이기
  $(".shop_our").append(objFirst);
  $(".shop_our").prepend(objLast);
  // 복사한 후의 배너의 개수
  var count = $(".shop_our>li").length;

  // 부모의 너비
  $(".shop_our").width((100 / 4) * count + "%");
  //li의 너비
  $(".shop_our>li").outerWidth(100 / count + "%");
  $(".shop_our>li")
    .eq(showBanner + 2)
    .find(".text_box")
    .stop()
    .fadeIn(500);

  function moveBanner() {
    console.log(showBanner);
    if (showBanner == liCount) {
      showBanner = 0;
      $(".shop_our").css("margin-left", 0);
    }
    showBanner++;
    $(".shop_our")
      .stop()
      .animate(
        {
          marginLeft: -showBanner * liWidth,
        },
        1000,
        function () {
          $(".shop_our>li")
            .eq(showBanner + 2)
            .find(".textBox")
            .stop()
            .fadeIn(500);
        }
      );
    if (showBanner == liCount) {
      $(".scroll_bg>li:eq(0)")
        .addClass("active")
        .siblings()
        .removeClass("active");
    } else {
      $(".scroll_bg>li")
        .eq(showBanner)
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  }
  //배너를 5초마다 하나씩 왼쪽으로 이동하기
  var timer = setInterval(moveBanner, 2000);
  $(".shop").mouseenter(function () {
    clearInterval(timer);
  });
  $(".shop").mouseleave(function () {
    timer = setInterval(moveBanner, 2000);
  });

  $(window).resize(function () {
    showBanner=liCount;
       
    // 부모의 너비
    $(".shop_our").width((100 / 4) * count + "%");
    //li의 너비
    $(".shop_our>li").outerWidth(100 / count + "%");
    liWidth = $(".shop_our>li").outerWidth();
    
  });

  // youtube
  //
  window.addEventListener("load", function () {
    const myVideo = document.querySelector(
      "#myvideo",
      (playPause = this.document.querySelector(".play"))
    );

    playPause.addEventListener("click", function () {
      if (myVideo.paused) {
        myVideo.play();
        this.src = "images/pause.png";
      } else {
        myVideo.pause();
        this.src = "images/play.png";
      }
    });
  });

  // TALES OF HOME
  //

  $(".travel_candles>.button2").click(function () {
    var index = $(this).index();
    console.log(index);
    $(".candle_wrap>.home")
      .eq(index)
      .css("display", "block")
      .siblings()
      .css("display", "none");
  });

  $(".travel_candles>.button1").click(function () {
    var button1 = $(this).index();
    console.log(button1);
    $(".home")
      .eq(button1)
      .css("display", "block")
      .siblings()
      .css("display", "none");
  });

  // Instagram
  //
  $(".small>li").click(function () {
    var sNum = $(this).index();
    console.log(sNum);
    var title = $(".big>li").eq(sNum).find("img").attr("alt");
    // 특정 객체의 속성 값을 확인 및 변경할 수 있습니다
    console.log(title);
    $(this).addClass("active").siblings().removeClass("active");

    //큰그림
    $(".big>li").eq(sNum).fadeIn(1000).siblings().fadeOut(1000);
  });
});
