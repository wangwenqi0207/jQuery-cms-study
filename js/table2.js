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
        $(".tables").width("");
    } 
    else{
        $(".tables").width("100%");
    }   
});

//点击变色
var table = $("table");
$(".liscp").click(function(){
    var $index = $(this).index();
    $(this).css("background-color","#1e8ba0");
    $(this).css("color","white");
    $(this).siblings("p").css("background-color","white");
    $(this).siblings("p").css("color","#787878");
    $(".one").eq($index-1).css("display","block");
    $(".one").eq($index-1).siblings(".one").css("display","none");
});

var num = 0;
$(".next").click(function(){
    num++;
    if(num == 4){
        num == 0;
    }
    $(".one").eq(num).css("display","block");
    $(".one").eq(num).siblings(".one").css("display","none");
});

// var num = 0;
// $(".prev").click(function(){
//     num--;
//     if(num == 0){
//         num == 0;
//     }
//     $(".one").eq(num).css("display","block");
//     $(".one").eq(num).siblings(".one").css("display","none");
// });