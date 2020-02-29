//container

// Make monochrome colors and set them as default for all pies
Highcharts.getOptions().plotOptions.pie.colors = (function () {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;
    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());
// 初始化图表
var chart = Highcharts.chart('container', {
    title: {
        text: '犯罪年龄占比'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        type: 'pie',
        name: '犯罪动机',
        data: [
            ['Firefox',   45.0],
            ['IE',       26.8],
            {
                name: 'Chrome',
                y: 12.8,
                sliced: true,
                selected: true
            },
            ['Safari',    8.5],
            ['Opera',     6.2],
            ['其他',   0.7]
        ]
    }]
});

//container2
var chart = Highcharts.chart('container2', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '疑似犯罪人员分布',
        textStyle: {
            color: 'white'
        }
    },
    subtitle: {
        text: ''
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '犯罪原因',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: '犯罪类型',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [{
        name: '犯罪类型',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
            valueSuffix: ' mm'
        }
    }, {
        name: '犯罪原因',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
            valueSuffix: '°C'
        }
    }]
});


//container3
var dom = document.getElementById("container3");
var myChart = echarts.init(dom);
var app = {};
option = null;

var data = [
    {name: '海门', value: 9},
    {name: '鄂尔多斯', value: 12},
    {name: '招远', value: 12},
    {name: '舟山', value: 12},
    {name: '齐齐哈尔', value: 14},
    {name: '盐城', value: 15},
    {name: '赤峰', value: 16},
    {name: '青岛', value: 18},
    {name: '乳山', value: 18},
    {name: '金昌', value: 19},
    {name: '泉州', value: 21},
    {name: '莱西', value: 21},
    {name: '日照', value: 21},
    {name: '胶南', value: 22},
    {name: '南通', value: 23},
    {name: '拉萨', value: 24},
    {name: '云浮', value: 24},
    {name: '梅州', value: 25},
    {name: '文登', value: 25},
    {name: '上海', value: 25},
    {name: '攀枝花', value: 25},
    {name: '威海', value: 25},
    {name: '承德', value: 25},
    {name: '厦门', value: 26},
    {name: '汕尾', value: 26},
    {name: '潮州', value: 26},
    {name: '丹东', value: 27},
    {name: '太仓', value: 27},
    {name: '曲靖', value: 27},
    {name: '烟台', value: 28},
    {name: '福州', value: 29},
    {name: '瓦房店', value: 30},
    {name: '即墨', value: 30},
    {name: '抚顺', value: 31},
    {name: '玉溪', value: 31},
    {name: '张家口', value: 31},
    {name: '阳泉', value: 31},
    {name: '莱州', value: 32},
    {name: '湖州', value: 32},
    {name: '汕头', value: 32},
    {name: '昆山', value: 33},
    {name: '宁波', value: 33},
    {name: '湛江', value: 33},
    {name: '揭阳', value: 34},
    {name: '荣成', value: 34},
    {name: '连云港', value: 35},
    {name: '葫芦岛', value: 35},
    {name: '常熟', value: 36},
    {name: '东莞', value: 36},
    {name: '河源', value: 36},
    {name: '淮安', value: 36},
    {name: '泰州', value: 36},
    {name: '南宁', value: 37},
    {name: '营口', value: 37},
    {name: '惠州', value: 37},
    {name: '江阴', value: 37},
    {name: '蓬莱', value: 37},
    {name: '韶关', value: 38},
    {name: '嘉峪关', value: 38},
    {name: '广州', value: 38},
    {name: '延安', value: 38},
    {name: '太原', value: 39},
    {name: '清远', value: 39},
    {name: '中山', value: 39},
    {name: '昆明', value: 39},
    {name: '寿光', value: 40},
    {name: '盘锦', value: 40},
    {name: '长治', value: 41},
    {name: '深圳', value: 41},
    {name: '珠海', value: 42},
    {name: '宿迁', value: 43},
    {name: '咸阳', value: 43},
    {name: '铜川', value: 44},
    {name: '平度', value: 44},
    {name: '佛山', value: 44},
    {name: '海口', value: 44},
    {name: '江门', value: 45},
    {name: '章丘', value: 45},
    {name: '肇庆', value: 46},
    {name: '大连', value: 47},
    {name: '临汾', value: 47},
    {name: '吴江', value: 47},
    {name: '石嘴山', value: 49},
    {name: '沈阳', value: 50},
    {name: '苏州', value: 50},
    {name: '茂名', value: 50},
    {name: '嘉兴', value: 51},
    {name: '长春', value: 51},
    {name: '胶州', value: 52},
    {name: '银川', value: 52},
    {name: '张家港', value: 52},
    {name: '三门峡', value: 53},
    {name: '锦州', value: 54},
    {name: '南昌', value: 54},
    {name: '柳州', value: 54},
    {name: '三亚', value: 54},
    {name: '自贡', value: 56},
    {name: '吉林', value: 56},
    {name: '阳江', value: 57},
    {name: '泸州', value: 57},
    {name: '西宁', value: 57},
    {name: '宜宾', value: 58},
    {name: '呼和浩特', value: 58},
    {name: '成都', value: 58},
    {name: '大同', value: 58},
    {name: '镇江', value: 59},
    {name: '桂林', value: 59},
    {name: '张家界', value: 59},
    {name: '宜兴', value: 59},
    {name: '北海', value: 60},
    {name: '西安', value: 61},
    {name: '金坛', value: 62},
    {name: '东营', value: 62},
    {name: '牡丹江', value: 63},
    {name: '遵义', value: 63},
    {name: '绍兴', value: 63},
    {name: '扬州', value: 64},
    {name: '常州', value: 64},
    {name: '潍坊', value: 65},
    {name: '重庆', value: 66},
    {name: '台州', value: 67},
    {name: '南京', value: 67},
    {name: '滨州', value: 70},
    {name: '贵阳', value: 71},
    {name: '无锡', value: 71},
    {name: '本溪', value: 71},
    {name: '克拉玛依', value: 72},
    {name: '渭南', value: 72},
    {name: '马鞍山', value: 72},
    {name: '宝鸡', value: 72},
    {name: '焦作', value: 75},
    {name: '句容', value: 75},
    {name: '北京', value: 79},
    {name: '徐州', value: 79},
    {name: '衡水', value: 80},
    {name: '包头', value: 80},
    {name: '绵阳', value: 80},
    {name: '乌鲁木齐', value: 84},
    {name: '枣庄', value: 84},
    {name: '杭州', value: 84},
    {name: '淄博', value: 85},
    {name: '鞍山', value: 86},
    {name: '溧阳', value: 86},
    {name: '库尔勒', value: 86},
    {name: '安阳', value: 90},
    {name: '开封', value: 90},
    {name: '济南', value: 92},
    {name: '德阳', value: 93},
    {name: '温州', value: 95},
    {name: '九江', value: 96},
    {name: '邯郸', value: 98},
    {name: '临安', value: 99},
    {name: '兰州', value: 99},
    {name: '沧州', value: 100},
    {name: '临沂', value: 103},
    {name: '南充', value: 104},
    {name: '天津', value: 105},
    {name: '富阳', value: 106},
    {name: '泰安', value: 112},
    {name: '诸暨', value: 112},
    {name: '郑州', value: 113},
    {name: '哈尔滨', value: 114},
    {name: '聊城', value: 116},
    {name: '芜湖', value: 117},
    {name: '唐山', value: 119},
    {name: '平顶山', value: 119},
    {name: '邢台', value: 119},
    {name: '德州', value: 120},
    {name: '济宁', value: 120},
    {name: '荆州', value: 127},
    {name: '宜昌', value: 130},
    {name: '义乌', value: 132},
    {name: '丽水', value: 133},
    {name: '洛阳', value: 134},
    {name: '秦皇岛', value: 136},
    {name: '株洲', value: 143},
    {name: '石家庄', value: 147},
    {name: '莱芜', value: 148},
    {name: '常德', value: 152},
    {name: '保定', value: 153},
    {name: '湘潭', value: 154},
    {name: '金华', value: 157},
    {name: '岳阳', value: 169},
    {name: '长沙', value: 175},
    {name: '衢州', value: 177},
    {name: '廊坊', value: 193},
    {name: '菏泽', value: 194},
    {name: '合肥', value: 229},
    {name: '武汉', value: 273},
    {name: '大庆', value: 279}
];

var geoCoordMap = {
    '海门':[121.15,31.89],
    '鄂尔多斯':[109.781327,39.608266],
    '招远':[120.38,37.35],
    '舟山':[122.207216,29.985295],
    '齐齐哈尔':[123.97,47.33],
    '盐城':[120.13,33.38],
    '赤峰':[118.87,42.28],
    '青岛':[120.33,36.07],
    '乳山':[121.52,36.89],
    '金昌':[102.188043,38.520089],
    '泉州':[118.58,24.93],
    '莱西':[120.53,36.86],
    '日照':[119.46,35.42],
    '胶南':[119.97,35.88],
    '南通':[121.05,32.08],
    '拉萨':[91.11,29.97],
    '云浮':[112.02,22.93],
    '梅州':[116.1,24.55],
    '文登':[122.05,37.2],
    '上海':[121.48,31.22],
    '攀枝花':[101.718637,26.582347],
    '威海':[122.1,37.5],
    '承德':[117.93,40.97],
    '厦门':[118.1,24.46],
    '汕尾':[115.375279,22.786211],
    '潮州':[116.63,23.68],
    '丹东':[124.37,40.13],
    '太仓':[121.1,31.45],
    '曲靖':[103.79,25.51],
    '烟台':[121.39,37.52],
    '福州':[119.3,26.08],
    '瓦房店':[121.979603,39.627114],
    '即墨':[120.45,36.38],
    '抚顺':[123.97,41.97],
    '玉溪':[102.52,24.35],
    '张家口':[114.87,40.82],
    '阳泉':[113.57,37.85],
    '莱州':[119.942327,37.177017],
    '湖州':[120.1,30.86],
    '汕头':[116.69,23.39],
    '昆山':[120.95,31.39],
    '宁波':[121.56,29.86],
    '湛江':[110.359377,21.270708],
    '揭阳':[116.35,23.55],
    '荣成':[122.41,37.16],
    '连云港':[119.16,34.59],
    '葫芦岛':[120.836932,40.711052],
    '常熟':[120.74,31.64],
    '东莞':[113.75,23.04],
    '河源':[114.68,23.73],
    '淮安':[119.15,33.5],
    '泰州':[119.9,32.49],
    '南宁':[108.33,22.84],
    '营口':[122.18,40.65],
    '惠州':[114.4,23.09],
    '江阴':[120.26,31.91],
    '蓬莱':[120.75,37.8],
    '韶关':[113.62,24.84],
    '嘉峪关':[98.289152,39.77313],
    '广州':[113.23,23.16],
    '延安':[109.47,36.6],
    '太原':[112.53,37.87],
    '清远':[113.01,23.7],
    '中山':[113.38,22.52],
    '昆明':[102.73,25.04],
    '寿光':[118.73,36.86],
    '盘锦':[122.070714,41.119997],
    '长治':[113.08,36.18],
    '深圳':[114.07,22.62],
    '珠海':[113.52,22.3],
    '宿迁':[118.3,33.96],
    '咸阳':[108.72,34.36],
    '铜川':[109.11,35.09],
    '平度':[119.97,36.77],
    '佛山':[113.11,23.05],
    '海口':[110.35,20.02],
    '江门':[113.06,22.61],
    '章丘':[117.53,36.72],
    '肇庆':[112.44,23.05],
    '大连':[121.62,38.92],
    '临汾':[111.5,36.08],
    '吴江':[120.63,31.16],
    '石嘴山':[106.39,39.04],
    '沈阳':[123.38,41.8],
    '苏州':[120.62,31.32],
    '茂名':[110.88,21.68],
    '嘉兴':[120.76,30.77],
    '长春':[125.35,43.88],
    '胶州':[120.03336,36.264622],
    '银川':[106.27,38.47],
    '张家港':[120.555821,31.875428],
    '三门峡':[111.19,34.76],
    '锦州':[121.15,41.13],
    '南昌':[115.89,28.68],
    '柳州':[109.4,24.33],
    '三亚':[109.511909,18.252847],
    '自贡':[104.778442,29.33903],
    '吉林':[126.57,43.87],
    '阳江':[111.95,21.85],
    '泸州':[105.39,28.91],
    '西宁':[101.74,36.56],
    '宜宾':[104.56,29.77],
    '呼和浩特':[111.65,40.82],
    '成都':[104.06,30.67],
    '大同':[113.3,40.12],
    '镇江':[119.44,32.2],
    '桂林':[110.28,25.29],
    '张家界':[110.479191,29.117096],
    '宜兴':[119.82,31.36],
    '北海':[109.12,21.49],
    '西安':[108.95,34.27],
    '金坛':[119.56,31.74],
    '东营':[118.49,37.46],
    '牡丹江':[129.58,44.6],
    '遵义':[106.9,27.7],
    '绍兴':[120.58,30.01],
    '扬州':[119.42,32.39],
    '常州':[119.95,31.79],
    '潍坊':[119.1,36.62],
    '重庆':[106.54,29.59],
    '台州':[121.420757,28.656386],
    '南京':[118.78,32.04],
    '滨州':[118.03,37.36],
    '贵阳':[106.71,26.57],
    '无锡':[120.29,31.59],
    '本溪':[123.73,41.3],
    '克拉玛依':[84.77,45.59],
    '渭南':[109.5,34.52],
    '马鞍山':[118.48,31.56],
    '宝鸡':[107.15,34.38],
    '焦作':[113.21,35.24],
    '句容':[119.16,31.95],
    '北京':[116.46,39.92],
    '徐州':[117.2,34.26],
    '衡水':[115.72,37.72],
    '包头':[110,40.58],
    '绵阳':[104.73,31.48],
    '乌鲁木齐':[87.68,43.77],
    '枣庄':[117.57,34.86],
    '杭州':[120.19,30.26],
    '淄博':[118.05,36.78],
    '鞍山':[122.85,41.12],
    '溧阳':[119.48,31.43],
    '库尔勒':[86.06,41.68],
    '安阳':[114.35,36.1],
    '开封':[114.35,34.79],
    '济南':[117,36.65],
    '德阳':[104.37,31.13],
    '温州':[120.65,28.01],
    '九江':[115.97,29.71],
    '邯郸':[114.47,36.6],
    '临安':[119.72,30.23],
    '兰州':[103.73,36.03],
    '沧州':[116.83,38.33],
    '临沂':[118.35,35.05],
    '南充':[106.110698,30.837793],
    '天津':[117.2,39.13],
    '富阳':[119.95,30.07],
    '泰安':[117.13,36.18],
    '诸暨':[120.23,29.71],
    '郑州':[113.65,34.76],
    '哈尔滨':[126.63,45.75],
    '聊城':[115.97,36.45],
    '芜湖':[118.38,31.33],
    '唐山':[118.02,39.63],
    '平顶山':[113.29,33.75],
    '邢台':[114.48,37.05],
    '德州':[116.29,37.45],
    '济宁':[116.59,35.38],
    '荆州':[112.239741,30.335165],
    '宜昌':[111.3,30.7],
    '义乌':[120.06,29.32],
    '丽水':[119.92,28.45],
    '洛阳':[112.44,34.7],
    '秦皇岛':[119.57,39.95],
    '株洲':[113.16,27.83],
    '石家庄':[114.48,38.03],
    '莱芜':[117.67,36.19],
    '常德':[111.69,29.05],
    '保定':[115.48,38.85],
    '湘潭':[112.91,27.87],
    '金华':[119.64,29.12],
    '岳阳':[113.09,29.37],
    '长沙':[113,28.21],
    '衢州':[118.88,28.97],
    '廊坊':[116.7,39.53],
    '菏泽':[115.480656,35.23375],
    '合肥':[117.27,31.86],
    '武汉':[114.31,30.52],
    '大庆':[125.03,46.58]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

function renderItem(params, api) {
    var coords = [
        [116.7,39.53],
        [103.73,36.03],
        [112.91,27.87],
        [120.65,28.01],
        [119.57,39.95]
    ];
    var points = [];
    for (var i = 0; i < coords.length; i++) {
        points.push(api.coord(coords[i]));
    }
    var color = api.visual('color');

    return {
        type: 'polygon',
        shape: {
            points: echarts.graphic.clipPointsByRect(points, {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            })
        },
        style: api.style({
            fill: color,
            stroke: echarts.color.lift(color)
        })
    };
}

option = {
     //backgroundColor: 'black',
    title: {
        text: '全国犯罪分子分布图',
        subtext: '',
        sublink: '',
        left: 'center',
        textStyle: {
            color: 'white'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    bmap: {
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
            styleJson: [
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {
                            "color": "black"
                        }
                    },
                    {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                            "color": "#142336"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "yellow"
                        }
                    },
                    {
                        "featureType": "railway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "white"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "white",
                            "lightness": 1
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#a7c2df"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "white"
                        }
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "green",
                        "elementType": "all",
                        "stylers": {
                            "color": "white",
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "subway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "manmade",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "local",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "white"
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "all",
                        "stylers": {
                            "color": "#a7c2df"
                        }
                    },
                    {
                        "featureType": "label",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }
            ]
        }
    },
    series : [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            type: 'custom',
            coordinateSystem: 'bmap',
            renderItem: renderItem,
            itemStyle: {
                normal: {
                    opacity: 0.5
                }
            },
            animation: false,
            silent: true,
            data: [0],
            z: -10
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

//container4

Highcharts.setOptions({
    global: {
            useUTC: false
    }
});
function activeLastPointToolip(chart) {
    var points = chart.series[0].points;
    chart.tooltip.refresh(points[points.length -1]);
}
var chart = Highcharts.chart('container4', {
    chart: {
            type: 'spline',
            marginRight: 10,
            events: {
                    load: function () {
                            var series = this.series[0],
                                    chart = this;
                            activeLastPointToolip(chart);
                            setInterval(function () {
                                    var x = (new Date()).getTime(), // 当前时间
                                            y = Math.random();          // 随机值
                                    series.addPoint([x, y], true, true);
                                    activeLastPointToolip(chart);
                            }, 1000);
                    }
            }
    },
    title: {
            text: '动态模拟实时数据'
    },
    xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
    },
    yAxis: {
            title: {
                    text: null
            }
    },
    tooltip: {
            formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                            Highcharts.numberFormat(this.y, 2);
            }
    },
    legend: {
            enabled: false
    },
    series: [{
            name: '随机数据',
            data: (function () {
                    // 生成随机值
                    var data = [],
                            time = (new Date()).getTime(),
                            i;
                    for (i = -19; i <= 0; i += 1) {
                            data.push({
                                    x: time + i * 1000,
                                    y: Math.random()
                            });
                    }
                    return data;
            }())
    }]
});

//container5

var chart = Highcharts.chart('container5', {
    chart: {
            polar: true
    },
    title: {
            text: '极地图'
    },
    pane: {
            startAngle: 0,
            endAngle: 360
    },
    xAxis: {
            tickInterval: 45,
            min: 0,
            max: 360,
            labels: {
                    formatter: function () {
                            return this.value + '°';
                    }
            }
    },
    yAxis: {
            min: 0
    },
    plotOptions: {
            series: {
                    pointStart: 0,
                    pointInterval: 45
            },
            column: {
                    pointPadding: 0,
                    groupPadding: 0
            }
    },
    series: [{
            type: 'column',
            name: '柱形',
            data: [8, 7, 6, 5, 4, 3, 2, 1],
            pointPlacement: 'between'
    }, {
            type: 'line',
            name: '线',
            data: [1, 2, 3, 4, 5, 6, 7, 8]
    }, {
            type: 'area',
            name: '面积',
            data: [1, 8, 2, 7, 3, 6, 4, 5]
    }]
});

//container6
var chart = Highcharts.chart('container6', {
    chart: {
        type: 'area'
    },
    title: {
        text: '全球各大洲人口占比'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: '百分比'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} 百万)<br/>',
        shared: true
    },
    plotOptions: {
        area: {
            stacking: 'percent',
            lineColor: '#ffffff',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#ffffff'
            }
        }
    },
    series: [{
        name: '亚洲',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: '非洲',
        data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
        name: '欧洲',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        name: '美洲',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
        name: '大洋洲',
        data: [2, 2, 2, 6, 13, 30, 46]
    }]
});