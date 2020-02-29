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
        $(".product").width("");
    } 
    else{
        $(".product").width("100%");
    }   
});


//获得焦点
$(".Search1").focus(function(){
   $(this).attr("placeholder"," ");
   $(this).css("border-color","#314a60");
   $(this).css("border-width","1px");
  });
  $(".Search1").blur(function(){
    $(this).attr("placeholder","Keyword Search");
    $(this).css("border-color","#e1e1e1");
    $(this).css("border-width","1px");
});

$(".goods").focus(function(){
    $(this).css("border-color","#314a60");
    $(this).css("border-width","1px");
   });
   $(".goods").blur(function(){
     $(this).css("border-color","#e1e1e1");
     $(this).css("border-width","1px");
 });

 //放大镜
 window.onload=function(){
    function $(str){//#box .cls  p
        if(str.charAt(0)=="#"){
            return document.getElementById(str.substring(1));
        }else if(str.charAt(0)=="."){
            return document.getElementsByClassName(str.substring(1));
        }else{
            return document.getElementsByTagName(str);
        }
    }
	$("#bigBox").onmouseover = function(){
		bigMirrorSingleton.getInstance({ 
			"boxDom":$("#bigBox"),
			"width":100,
            "height":100,
            "top":70,
        });	
    }
}

// 选项卡放大
$(".cur1").click(function(){
    $(this).addClass("cur");
    $(this).siblings().removeClass("cur");
    var src1 = $(this).attr("src"); //获取元素的src
    $(".big").attr("src",src1); //赋给另一个元素
    //将变量赋给元素的background属性
    $("#bigBox").css("background-image","url("+ src1 + ")");
});


// 选项卡
$(".Deslisp1").click(function(){
    $(this).addClass("cur2");
    $(this).siblings(".Deslisp1").removeClass("cur2");
    $(this).next(".Deslis2").css("display","block");
    $(this).siblings(".Deslisp1").next(".Deslis2").css("display","none");
});