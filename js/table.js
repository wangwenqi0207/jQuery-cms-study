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
        $(".table").width("");
    } 
    else{
        $(".table").width("100%");
    }   
});

//下拉
$(".down").click(function(){
   let down = $(this).parent().parent().next("table");
   if(down.is(":hidden")){
    down.slideDown();

   }else{
     down.slideUp();
   }
});

//guanbi
$(".close").click(function(){
    $(this).parent().parent().parent().animate({
         opacity: '0'
      }, 500);
 });

//  $(document).ready(function(){
//     let $table2 = $(".table2").find("tr");
//     $("td:odd").css("color","f9f9f9");   
//   });
 