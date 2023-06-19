$(document).ready(function($){
  $out();
  setInterval(function(){
    $out();
  },6000)


  if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("canvas.snow").let_it_snow({
      windPower: 2,
      speed:-1,
      //    color: "#ea0618",
      //    size:1,
      count: 80,
      image: "images/petal.png",
      opacity: 0
    });

  }else{
    $("canvas.snow").let_it_snow({
      windPower: 2,
      speed:-1,
      //    color: "#ea0618",
      size:.5,
      count: 40,
      image: "images/petal.png",
      opacity: 0
    });

  }

  function $out() {
    $('h1.tit div').removeClass('out').each(function(index){
      $(this).delay(index*100).animate({
        'background':'transparent'
      },0,function(){
        $(this).addClass('out')
      })
    })
  }
});
