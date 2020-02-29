//版面切换
$("#toppA").click(function(){
    $(".five").toggle();
   if($(".five").is(":hidden")){
        $(this).css("background","#72d0eb");   
    } 
    else{
        $(this).css("background","white"); 
        $(".seven").css("display","none");
        $("#toppB").css("background","#72d0eb");
        $(".six").css("display","none"); 
        $("#toppC").css("background","#72d0eb"); 
    } 
});
$("#toppB").click(function(){
    $(".seven").toggle();
   if($(".seven").is(":hidden")){
        $(this).css("background","#72d0eb");  
    } 
    else{
        $(this).css("background","white");
        $(".five").css("display","none");  
        $("#toppA").css("background","#72d0eb"); 
        $(".six").css("display","none"); 
        $("#toppC").css("background","#72d0eb"); 
    } 
});
$("#toppC").click(function(){
    $(".six").toggle();
   if($(".six").is(":hidden")){
        $(this).css("background","#72d0eb");  
    } 
    else{
        $(this).css("background","white");
        $(".five").css("display","none");  
        $("#toppA").css("background","#72d0eb");
        $(".seven").css("display","none");
        $("#toppB").css("background","#72d0eb");   
    } 
});

$(".touxiang").click(function(){
    $(this).children(".touxSon").toggle();
   if($(this).children(".touxSon").is(":hidden")){
        $(this).css("background","#72d0eb"); 
        $(".tb2a").css("opacity","1");  
    } 
    else{
        $(this).css("background","white");
    } 
});

var son = $(".choose").children("li");
son.click(function(){
    $(this).next(".lisSon").toggle();
    $(this).next(".lisSon").siblings(".lisSon").hide();
    if($(this).next(".lisSon").is(":visible")){
        $(this).children("em").text("-");
    } 
    else{
        $(this).children("em").text("+");
    }  
});

$(".choose").children("li").hover(
    function () {
      $(this).children("i").css("color","#72d0eb");
      $(this).children("a").css("color","white");
      $(this).css("background","#35404d");
    },
    function () {
        $(this).children("i").css("color","#aeb2b7");
        $(this).children("a").css("color","#aeb2b7");
        $(this).css("background","#2a3542");
    }
  );

  $(".open").click(function(){
    $(".choose").toggle();
    if($(".choose").is(":visible")){
        $(".users").addClass("open2");
        $(".Pru2B").children("li").css("margin-top","22%");

    } 
    else{
        $(".users").removeClass("open2");
        $(".Pru2B").children("li").css("margin-top","18%");
    }   
});

// 滑过
$(".emailA").hover(
    function () {
      $(this).css("background-color","#f8f7f5");
      $(this).addClass("cur2");
      $(this).css("width","97%");
    },
    function () {
      $(this).css("background-color","white");
      $(this).removeClass("cur2");
      $(this).css("width","100%");
    }
  );


//选项卡

  $(".Popular1").children("p").click(function(){
    var index = $(this).index();
    var Popular2 = $(".Popular2");
        $(this).addClass("cur");
        $(this).siblings("p").removeClass("cur");
        Popular2.eq(index).show();
        Popular2.eq(index).siblings(".Popular2").hide();
  });
 
//折叠
  $(".down").click(function(){
    $(".downs").slideToggle();
    return false;
});

$(".down2").click(function(){
    $(".downs2").slideToggle();
    return false;
});

$(".close").click(function(){
    $(".users2L").css("opacity","0");
});

$(".close2").click(function(){
    $(".users2R").css("opacity","0");
});

$(".upMe").click(function(){
    $(".Action").toggle();
});