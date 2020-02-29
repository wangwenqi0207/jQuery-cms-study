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
        $(".tubiao").css("width","82%");
        $(".tubiao1").css("marginLeft","26px");
        $(".tb2a ").css("marginLeft","26px");
        $(".tb2b ").children("a").css("width","118px");
        $(".tb2b ").css("marginLeft","25px");
        $(".tb2b ").css("marginRight","25px");
        $("#CalendarMain").css("marginLeft","23px");
        $(".Expansion").css("marginLeft","24px");
       
        
    } 
    else{
        $(".tubiao").css("width","100%");
        $(".tubiao1").css("marginLeft","54px");
        $(".tb2a ").css("marginLeft","54px");
        $(".tb2b ").children("a").css("width","200px");
        $(".tb2b ").css("marginLeft","50px");
        $(".tb2b ").css("marginRight","50px");
        $("#CalendarMain").css("marginLeft","70px");
        $(".Expansion").css("marginLeft","70px");
    }   
});

//数字
var count = 0;
function begin() {
    if (! (count > 495)) {
        $(".number1").text(count);
        setTimeout("begin()", 5);
    }
    count++;
}
begin();

var count1 = 0;
function begin1() {
    if (! (count1 > 947)) {
        $(".number2").text(count1);
        setTimeout("begin1()", 5);
    }
    count1++;
}
begin1();

var count2 = 0;
function begin2() {
    if (! (count2 > 328)) {
        $(".number3").text(count2);
        setTimeout("begin2()", 6);
    }
    count2++;
}
begin2();

var count3 = 0;
function begin3() {
    if (! (count3 > 10328)) {
        $(".number4").text(count3);
        setTimeout("begin3()", 2);
    }
    count3+=10;
}
begin3();

// 图表
var chart = Highcharts.chart('container', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'May'
    },
    subtitle: {
        text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
            'm</a>'
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states'
        },
        labels: {
            formatter: function () {
                return this.value / 500 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 500,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'USA',
        data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
            27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
            26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
            22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
            10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
    }, {
        name: 'USSR/Russia',
        data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
            4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
            15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
            33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
            35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000]
    }]
});

//container2
var chart = Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Friday'
    },
    xAxis: {
        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
    },
    yAxis: {
        min: 0,
        title: {
            text: '水果消费总量'
        },
        stackLabels: {  // 堆叠数据标签
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                '总量: ' + this.point.stackTotal;
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                style: {
                    // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
                    textOutline: '1px 1px black'
                }
            }
        }
    },
    series: [{
        // name: '小张',
        // data: [5, 3, 4, 7, 2]
    }, {
        // name: '小彭',
        data: [2, 2, 3, 2, 1]
    }, {
        //name: '小潘',
        data: [3, 4, 4, 2, 5]
    }]
});

//container3
var categories = ['0-4', '5-9', '10-14', '15-19',
'20-24', '25-29', '30-34', '35-39', '40-44',
'45-49', '50-54', '55-59', '60-64', '65-69',
'70-74', '75-79', '80-84', '85-89', '90-94',
'95-99', '100 + '];
var chart = Highcharts.chart('container3', {
chart: {
type: 'bar'
},
title: {
text: 'Profit(USD)'
},
subtitle: {
useHTML: true,
text: ''
},
xAxis: [{
categories: categories,
reversed: false,
labels: {
step: 1
}
}, { 
// 显示在右侧的镜像 xAxis （通过 linkedTo 与第一个 xAxis 关联）
opposite: true, 
reversed: false,
categories: categories,
linkedTo: 0,
labels: {
step: 1
}
}],
yAxis: {
title: {
text: null
},
labels: {
formatter: function () {
return (Math.abs(this.value) / 1000000) + 'M';
}
},
min: -4000000,
max: 4000000
},
plotOptions: {
series: {
stacking: 'normal'
}
},
tooltip: {
formatter: function () {
return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
'人口: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
}
},
series: [{
name: '男',
data: [-1746181, -1884428, -2089758, -2222362, -2537431, -2507081, -2443179,
-2664537, -3556505, -3680231, -3143062, -2721122, -2229181, -2227768,
-2176300, -1329968, -836804, -354784, -90569, -28367, -3878]
}, {
name: '女',
data: [1656154, 1787564, 1981671, 2108575, 2403438, 2366003, 2301402, 2519874,
3360596, 3493473, 3050775, 2759560, 2304444, 2426504, 2568938, 1785638,
1447162, 1005011, 330870, 130632, 21208]
}]

});


//日历
$(document).ready(function(e) {
    CalendarHandler.initialize();
});

var CalendarHandler = {
    currentYear: 0,
    currentMonth: 0,
    isRunning: false,
    showYearStart:2009,
    tag:0,
    initialize: function() {
        $calendarItem = this.CreateCalendar(0, 0, 0);
        $("#Container").append($calendarItem);

        $("#context").css("height", $("#CalendarMain").height() - 65 + "px");
        $("#center").css("height", $("#context").height() - 30 + "px");
        $("#selectYearDiv").css("height", $("#context").height() - 30 + "px").css("width", $("#context").width() + "px");
        $("#selectMonthDiv").css("height", $("#context").height() - 30 + "px").css("width", $("#context").width() + "px");
        $("#centerCalendarMain").css("height", $("#context").height() - 30 + "px").css("width", $("#context").width() + "px");

        $calendarItem.css("height", $("#context").height() - 30 + "px"); //.css("visibility","hidden");
        $("#Container").css("height", "0px").css("width", "0px").css("margin-left", $("#context").width() / 2 + "px").css("margin-top", ($("#context").height() - 30) / 2 + "px");
        $("#Container").animate({
            width: $("#context").width() + "px",
            height: ($("#context").height() - 30) * 2 + "px",
            marginLeft: "0px",
            marginTop: "0px"
        }, 300, function() {
            $calendarItem.css("visibility", "visible");
        });
        $(".dayItem").css("width", $("#context").width() + "px");
        var itemPaddintTop = $(".dayItem").height() / 6;
        $(".item").css({
            "width": $(".week").width() / 7 + "px",
            "line-height": itemPaddintTop + "px",
            "height": itemPaddintTop + "px"
        });
        $(".currentItem>a").css("margin-left", ($(".item").width() - 25) / 2 + "px").css("margin-top", ($(".item").height() - 25) / 2 + "px");
        $(".week>h3").css("width", $(".week").width() / 7 + "px");
        this.RunningTime();
    },
    CreateSelectYear: function(showYearStart) {
        CalendarHandler.showYearStart=showYearStart;
        $(".currentDay").show();
        $("#selectYearDiv").children().remove();
        var yearindex = 0;
        for (var i = showYearStart; i < showYearStart+12; i++) {
            yearindex++;
            if(i==showYearStart){
                $last=$("<div>往前</div>");
                $("#selectYearDiv").append($last);
                $last.click(function(){
                    CalendarHandler.CreateSelectYear(CalendarHandler.showYearStart-10);
                });
                continue;
            }
            if(i==showYearStart+11){
                $next=$("<div>往后</div>");
                $("#selectYearDiv").append($next);
                $next.click(function(){
                    CalendarHandler.CreateSelectYear(CalendarHandler.showYearStart+10);
                });
                continue;
            }
            
            if (i == this.currentYear) {
                $yearItem=$("<div class=\"currentYearSd\" id=\"" + yearindex + "\">" + i + "</div>")
            
            }
            else{
                 $yearItem=$("<div id=\"" + yearindex + "\">" + i + "</div>");
            }
            $("#selectYearDiv").append($yearItem);
            $yearItem.click(function(){
                $calendarItem=CalendarHandler.CreateCalendar(Number($(this).html()),1,1);
                $("#Container").append($calendarItem);
                CalendarHandler.CSS()
                CalendarHandler.isRunning = true;
                $($("#Container").find(".dayItem")[0]).animate({
                height: "0px"
                }, 300, function() {
                $(this).remove();
                CalendarHandler.isRunning = false;
                });
                $("#centerMain").animate({
                marginLeft: -$("#center").width() + "px"
            }, 500);
            });
            if (yearindex == 1 || yearindex == 5 || yearindex == 9) $("#selectYearDiv").find("#" + yearindex).css("border-left-color", "#fff");
            if (yearindex == 4 || yearindex == 8 || yearindex == 12) $("#selectYearDiv").find("#" + yearindex).css("border-right-color", "#fff");
            
        }
        $("#selectYearDiv>div").css("width", ($("#center").width() - 4) / 4 + "px").css("line-height", ($("#center").height() - 4) / 3 + "px");
        $("#centerMain").animate({
            marginLeft: "0px"
        }, 300);
    },
    CreateSelectMonth: function() {
        $(".currentDay").show();
        $("#selectMonthDiv").children().remove();
        for (var i = 1; i < 13; i++) {
            if (i == this.currentMonth) $monthItem=$("<div class=\"currentMontSd\" id=\"" + i + "\">" + i + "月</div>");
            else  $monthItem=$("<div id=\"" + i + "\">" + i + "月</div>");
            $("#selectMonthDiv").append($monthItem);
            $monthItem.click(function(){
                $calendarItem=CalendarHandler.CreateCalendar(CalendarHandler.currentYear,Number($(this).attr("id")),1);
                $("#Container").append($calendarItem);
                CalendarHandler.CSS()
                CalendarHandler.isRunning = true;
                $($("#Container").find(".dayItem")[0]).animate({
                height: "0px"
                }, 300, function() {
                $(this).remove();
                CalendarHandler.isRunning = false;
                });
                $("#centerMain").animate({
                marginLeft: -$("#center").width() + "px"
            }, 500);
            });
            if (i == 1 || i == 5 || i == 9) $("#selectMonthDiv").find("#" + i).css("border-left-color", "#fff");
            if (i == 4 || i == 8 || i == 12) $("#selectMonthDiv").find("#" + i).css("border-right-color", "#fff");
        }
        $("#selectMonthDiv>div").css("width", ($("#center").width() - 4) / 4 + "px").css("line-height", ($("#center").height() - 4) / 3 + "px");
        $("#centerMain").animate({
            marginLeft: -$("#center").width() * 2 + "px"
        }, 300);
    },
    IsRuiYear: function(aDate) {
        return (0 == aDate % 4 && (aDate % 100 != 0 || aDate % 400 == 0));
    },
    CalculateWeek: function(y, m, d) {
        var arr = "7123456".split("");
        with(document.all) {
            var vYear = parseInt(y, 10);
            var vMonth = parseInt(m, 10);		
            var vDay = parseInt(d, 10);
        }
        var week =arr[new Date(y,m-1,vDay).getDay()];
        return week;
    },
    CalculateMonthDays: function(m, y) {
        var mDay = 0;
        if (m == 0 || m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
            mDay = 31;
        } else {
            if (m == 2) {
                //判断是否为芮年
                var isRn = this.IsRuiYear(y);
                if (isRn == true) {
                    mDay = 29;
                } else {
                    mDay = 28;
                }
            } else {
                mDay = 30;
            }
        }
        return mDay;
    },
    CreateCalendar: function(y, m, d) {
        $dayItem = $("<div class=\"dayItem\"></div>");
        //获取当前月份的天数
        var nowDate = new Date();
        if(y==nowDate.getFullYear()&&m==nowDate.getMonth()+1||(y==0&&m==0))
        $(".currentDay").hide();
        var nowYear = y == 0 ? nowDate.getFullYear() : y;
        this.currentYear = nowYear;
        var nowMonth = m == 0 ? nowDate.getMonth() + 1 : m;
        this.currentMonth = nowMonth;
        var nowDay = d == 0 ? nowDate.getDate() : d;
        $(".selectYear").html(nowYear + "年");
        $(".selectMonth").html(nowMonth + "月");
        var nowDaysNub = this.CalculateMonthDays(nowMonth, nowYear);
        //获取当月第一天是星期几
        //var weekDate = new Date(nowYear+"-"+nowMonth+"-"+1);
        //alert(weekDate.getDay());
        var nowWeek = parseInt(this.CalculateWeek(nowYear, nowMonth, 1));
        //nowWeek=weekDate.getDay()==0?7:weekDate.getDay();
        //var nowWeek=weekDate.getDay();
        //获取上个月的天数
        var lastMonthDaysNub = this.CalculateMonthDays((nowMonth - 1), nowYear);

        if (nowWeek != 0) {
            //生成上月剩下的日期
            for (var i = (lastMonthDaysNub - (nowWeek - 1)); i < lastMonthDaysNub; i++) {
                $dayItem.append("<div class=\"item lastItem\"><a>" + (i + 1) + "</a></div>");
            }
        }

        //生成当月的日期
        for (var i = 0; i < nowDaysNub; i++) {
            if (i == (nowDay - 1)) $dayItem.append("<div class=\"item currentItem\"><a>" + (i + 1) + "</a></div>");
            else $dayItem.append("<div class=\"item\"><a>" + (i + 1) + "</a></div>");
        }

        //获取总共已经生成的天数
        var hasCreateDaysNub = nowWeek + nowDaysNub;
        //如果小于42，往下个月推算
        if (hasCreateDaysNub < 42) {
            for (var i = 0; i <= (42 - hasCreateDaysNub); i++) {
                $dayItem.append("<div class=\"item lastItem\"><a>" + (i + 1) + "</a></div>");
            }
        }

        return $dayItem;
    },
    CSS: function() {
        var itemPaddintTop = $(".dayItem").height() / 6;
        $(".item").css({
            "width": $(".week").width() / 7 + "px",
            "line-height": itemPaddintTop + "px",
            "height": itemPaddintTop + "px"
        });
        $(".currentItem>a").css("margin-left", ($(".item").width() - 25) / 2 + "px").css("margin-top", ($(".item").height() - 25) / 2 + "px");
    },
    CalculateNextMonthDays: function() {
        if (this.isRunning == false) {
            $(".currentDay").show();
            var m = this.currentMonth == 12 ? 1 : this.currentMonth + 1;
            var y = this.currentMonth == 12 ? (this.currentYear + 1) : this.currentYear;
            var d = 0;
            var nowDate = new Date();
            if (y == nowDate.getFullYear() && m == nowDate.getMonth() + 1) d = nowDate.getDate();
            else d = 1;
            $calendarItem = this.CreateCalendar(y, m, d);
            $("#Container").append($calendarItem);

            this.CSS();
            this.isRunning = true;
            $($("#Container").find(".dayItem")[0]).animate({
                height: "0px"
            }, 300, function() {
                $(this).remove();
                CalendarHandler.isRunning = false;
            });
        }
    },
    CalculateLastMonthDays: function() {
        if (this.isRunning == false) {
            $(".currentDay").show();
            var nowDate = new Date();					
            var m = this.currentMonth == 1 ? 12 : this.currentMonth - 1;
            var y = this.currentMonth == 1 ? (this.currentYear - 1) : this.currentYear;
            var d = 0;
            
            if (y == nowDate.getFullYear() && m == nowDate.getMonth() + 1) d = nowDate.getDate();
            else d = 1;
            $calendarItem = this.CreateCalendar(y, m, d);
            $("#Container").append($calendarItem);
            var itemPaddintTop = $(".dayItem").height() / 6;
            this.CSS();
            this.isRunning = true;
            $($("#Container").find(".dayItem")[0]).animate({
                height: "0px"
            }, 300, function() {
                $(this).remove();
                CalendarHandler.isRunning = false;
            });
        }
    },
    CreateCurrentCalendar: function() {
        if (this.isRunning == false) {
            $(".currentDay").hide();
            $calendarItem = this.CreateCalendar(0, 0, 0);
            $("#Container").append($calendarItem);
            this.isRunning = true;
            $($("#Container").find(".dayItem")[0]).animate({
                height: "0px"
            }, 300, function() {
                $(this).remove();
                CalendarHandler.isRunning = false;
            });
            this.CSS();
            $("#centerMain").animate({
                marginLeft: -$("#center").width() + "px"
            }, 500);
        }
    },
    RunningTime: function() {
        var mTiming = setInterval(function() {
            var nowDate = new Date();
            var h=nowDate.getHours()<10?"0"+nowDate.getHours():nowDate.getHours();
            var m=nowDate.getMinutes()<10?"0"+nowDate.getMinutes():nowDate.getMinutes();
            var s=nowDate.getSeconds()<10?"0"+nowDate.getSeconds():nowDate.getSeconds();
            var nowTime = h + ":" + m + ":" + s;
            $("#footNow").html("本地时间 "+nowTime);
        }, 1000);

    }
}


//图表4
var dom = document.getElementById("container4");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}