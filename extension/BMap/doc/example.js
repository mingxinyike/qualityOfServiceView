(function () {
    require.config({
        paths: {
            echarts: '../qualityOfServiceView/js'
        },
        packages: [
            {
                name: 'BMap',
                location: '../qualityOfServiceView/extension/Bmap/src',
                main: 'main'
            }
        ]
    });

    require(
        [
            'echarts',
            'BMap',
            'echarts/chart/map'
        ],
        function (echarts, BMapExtension) {
            $('#main').css({
                //height: $('body').height(),
                width: $('body').width()
            });

            // 初始化地图
            var BMapExt = new BMapExtension($('#main')[0], BMap, echarts, {
                enableMapClick: false
            });
            var map = BMapExt.getMap();
            var container = BMapExt.getEchartsContainer();

            var startPoint = {
                x: 0,
                y: 30
            };
            var point = new BMap.Point(startPoint.x, startPoint.y);
            map.centerAndZoom(point, 1);
            map.enableScrollWheelZoom(true);
            // 地图自定义样式
            map.setMapStyle({
                styleJson: [
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {
                            "color": "#044161"
                        }
                    },
                    {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#064f85"
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
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#005b96",
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
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#00508b"
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
                            "color": "#056197",
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
                            "color": "#029fd4"
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "all",
                        "stylers": {
                            "color": "#1a5787"
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
            });

            option = {
                color: ['gold', 'aqua', 'lime'],
                title: {
                    text: 'QoGIS',
                    subtext: ' ',
                    x: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function (v) {
                        return v[1].replace(':', ' > ');
                    }
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['Monitor-US.VIRGINIA',
                    'Monitor-IRELAND', 
                    'Monitor-HONGKONG',
                    'Monitor-NETHERLANDS',
                    'Monitor-SINGAPORE',
                    'Monitor-US.CALIFORNIA',
                    'Monitor-US.VIRGINIA2',
                    'Monitor-IRELAND2',
                    'Monitor-NETHERLANDS2',
                    'Monitor-US.CALIFORNIA2',
                    'Monitor-HONGKONG2',
                    'Monitor-US.VIRGINIA3',
                    'Monitor-IRELAND3',
                    'Monitor-CHINA',
                    'Monitor-IRELAND4',
                    'Monitor_US.WASHINGTON',
                    'Monitor_US.ILLINOIS',
                    ' ',
                    'Service-Europe',
                    'Service-NorthAmerica',
                    'Service-Oceania',
                    'Service-SouthAmerica'],
                    //data: ['Monitor-US.VIRGINIA', 'Monitor-IRELAND', 'Monitor-HONGKONG','Monitor-NETHERLANDS','Monitor-SINGAPORE','Monitor-US.CALIFORNIA','Monitor-US.VIRGINIA2','Service-Europe','Service-NorthAmerica','Service-Oceania','Service-SouthAmerica'],
                    selectedMode: 'single',
                    selected: {
                        //'Monitor-US.VIRGINIA': false,
                        'Monitor-IRELAND': false,
                        'Monitor-HONGKONG': false,
                        'Monitor-NETHERLANDS': false,
                        'Monitor-SINGAPORE': false,
                        'Monitor-US.CALIFORNIA': false,
                        'Monitor-US.VIRGINIA2': false,
                        'Monitor-IRELAND2': false,
                        'Monitor-NETHERLANDS2': false,
                        'Monitor-US.CALIFORNIA2': false,
                        'Monitor-HONGKONG2': false,
                        'Monitor-US.VIRGINIA3': false,
                        'Monitor-IRELAND3': false,
                        'Monitor-CHINA': false,
                        'Monitor-IRELAND4': false,
                        'Monitor_US.WASHINGTON': false,
                        'Monitor_US.ILLINOIS': false,
                        ' ':false,
                        'Service-Europe':false,
                        'Service-NorthAmerica':false,
                        'Service-Oceania':false,
                        'Service-SouthAmerica':false
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    x: 'right',
                    y: 'center',
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                dataRange: {
                    min: 0,
                    max: 2,
                    x: 'right',
                    calculable: true,
                    color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        name: 'Monitor-US.VIRGINIA',
                        type: 'map',
                        mapType: 'none',
                        data: [],
                        geoCoord: {
                            "monitor17": [-6.26719, 53.344],
                            "monitor19": [-87.65, 41.85],
                            "monitor10": [-122.419, 37.7749],
                            "monitor11": [114.158, 22.2855],
                            "monitor14": [-6.26719, 53.344],
                            "monitor18": [-122.121, 47.6829],
                            "monitor16": [112.011, 38.9984],
                            "monitor8": [-6.26719, 53.344],
                            "monitor9": [4.88969, 52.374],
                            "monitor6": [-122.419, 37.7749],
                            "monitor7": [-77.5361, 38.7228],
                            "monitor4": [4.88969, 52.374],
                            "monitor5": [103.85, 1.28967],
                            "monitor2": [-6.26719, 53.344],
                            "monitor3": [114.158, 22.2855],
                            "monitor12": [-77.5361, 38.7228],
                            "monitor1": [-77.5361, 38.7228],
                            "service1811": [-77.3659, 38.9466],
                            "service1816": [-106.619, 35.0901],
                            "service1817": [-106.619, 35.0901],
                            "service1814": [-106.619, 35.0901],
                            "service1815": [-112.091, 33.4508],
                            "service1957": [-77.3659, 38.9466],
                            "service1956": [-77.3659, 38.9466],
                            "service1968": [-122.125, 37.4494],
                            "service1969": [-79.4163, 43.7001],
                            "service1959": [-77.3659, 38.9466],
                            "service1844": [-94.5689, 39.1478],
                            "service1958": [-77.3659, 38.9466],
                            "service1962": [-77.3659, 38.9466],
                            "service1963": [151.237, -33.8878],
                            "service1961": [-77.3659, 38.9466],
                            "service180": [8.21467, 53.1412],
                            "service181": [-94.5689, 39.1478],
                            "service182": [6.58615, 51.3392],
                            "service183": [12.1405, 54.0887],
                            "service184": [-83.7359, 42.2288],
                            "service185": [-75.6981, 45.4112],
                            "service186": [-97.147, 49.8844],
                            "service187": [12.5655, 55.6759],
                            "service188": [1.90389, 47.9029],
                            "service189": [-97.147, 49.8844],
                            "service1647": [-74.006, 40.7143],
                            "service1646": [14.3053, 46.6247],
                            "service1645": [11.0683, 49.4478],
                            "service1644": [11.0683, 49.4478],
                            "service1720": [-77.3659, 38.9466],
                            "service1721": [3.17456, 50.6942],
                            "service1722": [-77.3659, 38.9466],
                            "service1723": [-77.3659, 38.9466],
                            "service1724": [-77.3659, 38.9466],
                            "service1725": [-77.3659, 38.9466],
                            "service1649": [12.5338, 47.795],
                            "service1648": [-77.3659, 38.9466],
                            "service28": [144.963, -37.814],
                            "service29": [-94.5689, 39.1478],
                            "service22": [151.207, -33.8679],
                            "service23": [14.5051, 46.0511],
                            "service20": [4.88969, 52.374],
                            "service21": [-9.13333, 38.7167],
                            "service26": [-134.527, 58.3565],
                            "service27": [-80.2997, 42.8334],
                            "service24": [-70.5666, -33.4263],
                            "service25": [4.88969, 52.374],
                            "service294": [-77.0283, -12.0433],
                            "service295": [7.09548, 50.7344],
                            "service296": [-88.2463, 40.1125],
                            "service297": [6.58615, 51.3392],
                            "service290": [-77.3659, 38.9466],
                            "service291": [-86.6546, 34.6333],
                            "service119": [-47.9297, -15.7797],
                            "service118": [-134.527, 58.3565],
                            "service117": [-134.527, 58.3565],
                            "service116": [9.73322, 52.3705],
                            "service115": [0.0, 0.0],
                            "service114": [-97.147, 49.8844],
                            "service113": [-1.78116, 51.558],
                            "service112": [-1.78116, 51.558],
                            "service111": [10.3951, 63.4305],
                            "service110": [-1.78116, 51.558],
                            "service1940": [-77.3659, 38.9466],
                            "service1941": [-77.3659, 38.9466],
                            "service1942": [-77.3659, 38.9466],
                            "service1943": [-77.3659, 38.9466],
                            "service1944": [-77.3659, 38.9466],
                            "service1945": [-77.3659, 38.9466],
                            "service1946": [-77.3659, 38.9466],
                            "service1947": [-77.3659, 38.9466],
                            "service1948": [-77.3659, 38.9466],
                            "service1949": [-77.3659, 38.9466],
                            "service203": [135.569, 34.8164],
                            "service202": [135.569, 34.8164],
                            "service201": [-1.78116, 51.558],
                            "service169": [-6.97061, 38.8779],
                            "service207": [24.6522, 60.2052],
                            "service206": [-45.8869, -23.1794],
                            "service205": [-6.97061, 38.8779],
                            "service204": [51.4215, 35.6944],
                            "service162": [-5.66152, 43.5357],
                            "service163": [10.7461, 59.9127],
                            "service160": [-93.6425, 42.0227],
                            "service161": [-93.6425, 42.0227],
                            "service166": [-4.42034, 36.7202],
                            "service167": [-4.42034, 36.7202],
                            "service164": [-4.42034, 36.7202],
                            "service165": [-4.42034, 36.7202],
                            "service1719": [-1.78116, 51.558],
                            "service1718": [24.6522, 60.2052],
                            "service1714": [7.57884, 50.3536],
                            "service1711": [12.4839, 41.8947],
                            "service1710": [12.4839, 41.8947],
                            "service1683": [-94.5689, 39.1478],
                            "service1682": [9.17702, 48.7823],
                            "service1681": [11.0683, 49.4478],
                            "service1680": [12.5338, 47.795],
                            "service1687": [12.5338, 47.795],
                            "service1686": [12.5338, 47.795],
                            "service1685": [9.17702, 48.7823],
                            "service1684": [-94.5689, 39.1478],
                            "service1689": [9.73322, 52.3705],
                            "service1688": [8.2791, 49.9842],
                            "service1764": [-5.97613, 37.3824],
                            "service1765": [-5.97613, 37.3824],
                            "service1766": [12.1405, 54.0887],
                            "service1767": [-5.97613, 37.3824],
                            "service1760": [-5.97613, 37.3824],
                            "service1761": [-5.97613, 37.3824],
                            "service1762": [-5.97613, 37.3824],
                            "service1763": [-5.97613, 37.3824],
                            "service149": [8.2791, 49.9842],
                            "service1768": [-5.97613, 37.3824],
                            "service1769": [-5.97613, 37.3824],
                            "service66": [-77.0364, 38.8951],
                            "service67": [-79.4163, 43.7001],
                            "service64": [-105.266, 40.0074],
                            "service65": [10.7461, 59.9127],
                            "service62": [-105.27, 40.015],
                            "service63": [-123.369, 48.4329],
                            "service60": [-105.266, 40.0074],
                            "service61": [2.15899, 41.3888],
                            "service68": [6.95, 50.9333],
                            "service69": [-74.006, 40.7143],
                            "service1908": [13.8195, 52.8349],
                            "service1909": [6.58615, 51.3392],
                            "service1904": [-0.12574, 51.5085],
                            "service1905": [-94.5689, 39.1478],
                            "service1906": [-94.5689, 39.1478],
                            "service1907": [-94.5689, 39.1478],
                            "service1900": [-94.5689, 39.1478],
                            "service1901": [-78.632, 35.8511],
                            "service1902": [-78.632, 35.8511],
                            "service1903": [-78.632, 35.8511],
                            "service1889": [-97.7431, 30.2672],
                            "service1807": [-106.619, 35.0901],
                            "service1885": [151.124, -33.7968],
                            "service1884": [-122.121, 47.6829],
                            "service1887": [-94.5689, 39.1478],
                            "service1886": [-94.5689, 39.1478],
                            "service1881": [-84.3866, 33.8318],
                            "service1880": [6.18801, 51.7101],
                            "service1883": [-93.124, 44.9629],
                            "service1882": [-84.3866, 33.8318],
                            "service1806": [-77.3659, 38.9466],
                            "service249": [-77.3659, 38.9466],
                            "service248": [-77.3659, 38.9466],
                            "service247": [-77.3659, 38.9466],
                            "service246": [-77.3659, 38.9466],
                            "service245": [-77.3659, 38.9466],
                            "service244": [-77.3659, 38.9466],
                            "service243": [-77.3659, 38.9466],
                            "service242": [-77.3659, 38.9466],
                            "service241": [-77.3659, 38.9466],
                            "service240": [-77.3659, 38.9466],
                            "service126": [8.2791, 49.9842],
                            "service127": [8.2791, 49.9842],
                            "service124": [-5.66152, 43.5357],
                            "service125": [8.2791, 49.9842],
                            "service122": [9.73322, 52.3705],
                            "service123": [-123.369, 48.4329],
                            "service120": [4.88969, 52.374],
                            "service121": [6.85016, 61.1846],
                            "service1838": [-77.3659, 38.9466],
                            "service148": [8.2791, 49.9842],
                            "service128": [8.2791, 49.9842],
                            "service129": [8.2791, 49.9842],
                            "service1821": [-106.619, 35.0901],
                            "service140": [8.2791, 49.9842],
                            "service141": [8.2791, 49.9842],
                            "service238": [-77.3659, 38.9466],
                            "service239": [-77.3659, 38.9466],
                            "service232": [-77.3659, 38.9466],
                            "service233": [-77.3659, 38.9466],
                            "service230": [-77.3659, 38.9466],
                            "service231": [-77.3659, 38.9466],
                            "service236": [-77.3659, 38.9466],
                            "service237": [-77.3659, 38.9466],
                            "service234": [-77.3659, 38.9466],
                            "service235": [-77.3659, 38.9466],
                            "service1869": [6.06972, 50.8294],
                            "service1981": [-80.2997, 42.8334],
                            "service1805": [-106.619, 35.0901],
                            "service1804": [-106.619, 35.0901],
                            "service59": [127.42, 36.3214],
                            "service136": [8.2791, 49.9842],
                            "service1982": [-94.5689, 39.1478],
                            "service1801": [-106.619, 35.0901],
                            "service1800": [-106.619, 35.0901],
                            "service1803": [-106.619, 35.0901],
                            "service1802": [-106.619, 35.0901],
                            "service197": [-84.5066, 38.0318],
                            "service196": [24.7535, 59.437],
                            "service195": [-0.87734, 41.6561],
                            "service194": [-6.26719, 53.344],
                            "service193": [-1.78116, 51.558],
                            "service192": [-1.78116, 51.558],
                            "service191": [-43.2075, -22.9028],
                            "service190": [-97.147, 49.8844],
                            "service199": [4.51418, 50.8237],
                            "service198": [-71.8991, 45.4001],
                            "service1654": [-86.6546, 34.6333],
                            "service1655": [12.4839, 41.8947],
                            "service1656": [12.4839, 41.8947],
                            "service1657": [-5.97613, 37.3824],
                            "service1650": [12.4839, 41.8947],
                            "service1651": [12.5338, 47.795],
                            "service1652": [-5.97613, 37.3824],
                            "service1653": [12.4839, 41.8947],
                            "service1715": [12.4839, 41.8947],
                            "service139": [8.2791, 49.9842],
                            "service1717": [12.1405, 54.0887],
                            "service1716": [-5.97613, 37.3824],
                            "service1658": [-89.4114, 43.0753],
                            "service1659": [9.18951, 45.4643],
                            "service1713": [-86.6546, 34.6333],
                            "service138": [8.2791, 49.9842],
                            "service19": [-84.3866, 33.8318],
                            "service18": [4.34878, 50.8504],
                            "service17": [135.569, 34.8164],
                            "service16": [1.90389, 47.9029],
                            "service15": [-1.78116, 51.558],
                            "service14": [-77.4875, 39.0437],
                            "service13": [-75.6981, 45.4112],
                            "service12": [-97.147, 49.8844],
                            "service11": [-79.4163, 43.7001],
                            "service10": [-93.124, 44.9629],
                            "service289": [-77.3659, 38.9466],
                            "service288": [-77.3659, 38.9466],
                            "service283": [-77.3659, 38.9466],
                            "service282": [-77.3659, 38.9466],
                            "service281": [-77.3659, 38.9466],
                            "service280": [-77.3659, 38.9466],
                            "service287": [-77.3659, 38.9466],
                            "service286": [-77.3659, 38.9466],
                            "service285": [-77.3659, 38.9466],
                            "service284": [-77.3659, 38.9466],
                            "service1868": [6.06972, 50.8294],
                            "service1878": [-94.5689, 39.1478],
                            "service1879": [-100.78, 46.8181],
                            "service1974": [-77.3659, 38.9466],
                            "service1874": [6.06972, 50.8294],
                            "service1875": [6.18801, 51.7101],
                            "service1876": [6.18801, 51.7101],
                            "service1877": [6.06972, 50.8294],
                            "service1870": [6.06972, 50.8294],
                            "service1871": [6.06972, 50.8294],
                            "service1872": [6.06972, 50.8294],
                            "service1873": [6.06972, 50.8294],
                            "service1975": [135.502, 34.6939],
                            "service1809": [-106.619, 35.0901],
                            "service1977": [-94.5689, 39.1478],
                            "service1976": [-94.5689, 39.1478],
                            "service1971": [28.1878, -25.7449],
                            "service1970": [-77.3659, 38.9466],
                            "service1973": [-77.3659, 38.9466],
                            "service1972": [-77.3659, 38.9466],
                            "service1979": [11.651, 48.249],
                            "service1978": [-94.5689, 39.1478],
                            "service1808": [-88.2463, 40.1125],
                            "service276": [-77.3659, 38.9466],
                            "service178": [-6.97061, 38.8779],
                            "service274": [-77.3659, 38.9466],
                            "service275": [-77.3659, 38.9466],
                            "service272": [-77.3659, 38.9466],
                            "service273": [-77.3659, 38.9466],
                            "service270": [-77.3659, 38.9466],
                            "service271": [-77.3659, 38.9466],
                            "service171": [-4.42034, 36.7202],
                            "service170": [-4.42034, 36.7202],
                            "service173": [-4.42034, 36.7202],
                            "service172": [-6.97061, 38.8779],
                            "service175": [-6.97061, 38.8779],
                            "service174": [-6.97061, 38.8779],
                            "service278": [-77.3659, 38.9466],
                            "service176": [-4.42034, 36.7202],
                            "service9": [-86.6546, 34.6333],
                            "service8": [2.15899, 41.3888],
                            "service3": [-77.0302, 38.892],
                            "service2": [11.4954, 64.0149],
                            "service1": [0.0, 0.0],
                            "service7": [-75.6981, 45.4112],
                            "service6": [12.1405, 54.0887],
                            "service5": [1.90389, 47.9029],
                            "service4": [-94.5689, 39.1478],
                            "service302": [4.32501, 52.0363],
                            "service303": [151.194, -33.8699],
                            "service300": [14.4208, 50.088],
                            "service301": [14.4208, 50.088],
                            "service304": [12.5338, 47.795],
                            "service305": [-52.7093, 47.5649],
                            "service1728": [-5.97613, 37.3824],
                            "service1729": [-106.501, 31.788],
                            "service1690": [9.17702, 48.7823],
                            "service1691": [7.85222, 47.9959],
                            "service1692": [7.466, 51.5149],
                            "service1693": [7.12283, 51.5075],
                            "service1694": [-77.3659, 38.9466],
                            "service1695": [9.73322, 52.3705],
                            "service1696": [-77.3659, 38.9466],
                            "service1697": [12.4839, 41.8947],
                            "service1698": [4.86746, 50.4669],
                            "service1699": [-94.5689, 39.1478],
                            "service1753": [12.1405, 54.0887],
                            "service1752": [12.4839, 41.8947],
                            "service1755": [12.4839, 41.8947],
                            "service1754": [12.4839, 41.8947],
                            "service1757": [12.4839, 41.8947],
                            "service1756": [-71.0342, 42.3968],
                            "service1867": [-94.5689, 39.1478],
                            "service1812": [-106.619, 35.0901],
                            "service1726": [-5.97613, 37.3824],
                            "service1727": [-5.56667, 42.6],
                            "service1888": [-94.5689, 39.1478],
                            "service1931": [-77.3659, 38.9466],
                            "service1930": [-77.3659, 38.9466],
                            "service1933": [-77.3659, 38.9466],
                            "service1932": [-77.3659, 38.9466],
                            "service1935": [-77.3659, 38.9466],
                            "service1934": [-77.3659, 38.9466],
                            "service1937": [-77.3659, 38.9466],
                            "service1936": [-77.3659, 38.9466],
                            "service1939": [-77.3659, 38.9466],
                            "service1938": [-77.3659, 38.9466],
                            "service1673": [12.4839, 41.8947],
                            "service1830": [-78.6328, 35.774],
                            "service1892": [-78.6328, 35.774],
                            "service1893": [-78.6328, 35.774],
                            "service1890": [-78.6328, 35.774],
                            "service1891": [-78.6328, 35.774],
                            "service1896": [-78.632, 35.8511],
                            "service1897": [-94.5689, 39.1478],
                            "service1894": [-78.6328, 35.774],
                            "service1895": [-78.632, 35.8511],
                            "service1898": [-94.5689, 39.1478],
                            "service1899": [-2.23743, 53.4809],
                            "service1866": [13.4105, 52.5244],
                            "service1774": [12.4839, 41.8947],
                            "service1831": [-78.6328, 35.774],
                            "service135": [8.2791, 49.9842],
                            "service134": [8.2791, 49.9842],
                            "service137": [8.2791, 49.9842],
                            "service58": [6.13, 49.6117],
                            "service131": [8.2791, 49.9842],
                            "service130": [8.2791, 49.9842],
                            "service133": [8.2791, 49.9842],
                            "service132": [8.2791, 49.9842],
                            "service53": [-75.6981, 45.4112],
                            "service52": [-3.70256, 40.4165],
                            "service51": [-78.8988, 35.9938],
                            "service50": [-94.5689, 39.1478],
                            "service57": [-86.6546, 34.6333],
                            "service56": [-75.6981, 45.4112],
                            "service55": [2.15899, 41.3888],
                            "service54": [2.15899, 41.3888],
                            "service1862": [6.18801, 51.7101],
                            "service179": [-76.7497, 38.8159],
                            "service1813": [-77.3659, 38.9466],
                            "service277": [-77.3659, 38.9466],
                            "service1983": [149.128, -35.2835],
                            "service229": [-77.3659, 38.9466],
                            "service228": [-77.3659, 38.9466],
                            "service221": [-77.3659, 38.9466],
                            "service220": [-77.3659, 38.9466],
                            "service223": [-77.3659, 38.9466],
                            "service222": [-77.3659, 38.9466],
                            "service225": [-77.3659, 38.9466],
                            "service224": [-77.3659, 38.9466],
                            "service227": [-77.3659, 38.9466],
                            "service226": [-77.3659, 38.9466],
                            "service1795": [9.22528, 49.1891],
                            "service1794": [-84.5066, 38.0318],
                            "service1797": [-96.629, 43.7327],
                            "service1796": [-106.501, 31.788],
                            "service1791": [-112.091, 33.4508],
                            "service1790": [-112.091, 33.4508],
                            "service1793": [11.25, 43.7667],
                            "service1792": [-112.091, 33.4508],
                            "service1799": [-106.619, 35.0901],
                            "service1798": [-79.9528, 39.6375],
                            "service177": [-4.42034, 36.7202],
                            "service279": [-77.3659, 38.9466],
                            "service1984": [149.128, -35.2835],
                            "service1985": [14.4208, 50.088],
                            "service1986": [14.4208, 50.088],
                            "service1669": [6.58615, 51.3392],
                            "service1668": [13.4105, 52.5244],
                            "service1987": [14.4208, 50.088],
                            "service1918": [-94.5689, 39.1478],
                            "service1661": [12.4839, 41.8947],
                            "service1660": [12.4839, 41.8947],
                            "service1663": [12.4839, 41.8947],
                            "service1662": [6.58615, 51.3392],
                            "service1665": [7.466, 51.5149],
                            "service1664": [12.4839, 41.8947],
                            "service1667": [13.4105, 52.5244],
                            "service1666": [-89.4114, 43.0753],
                            "service1702": [-79.4163, 43.7001],
                            "service1703": [-5.97613, 37.3824],
                            "service1700": [-79.4163, 43.7001],
                            "service1701": [12.4839, 41.8947],
                            "service1706": [-77.4328, 43.0886],
                            "service1707": [12.4839, 41.8947],
                            "service1704": [-77.3659, 38.9466],
                            "service1705": [-75.6981, 45.4112],
                            "service1708": [-86.6546, 34.6333],
                            "service1709": [-105.266, 40.0074],
                            "service1832": [-96.629, 43.7327],
                            "service1833": [-96.629, 43.7327],
                            "service1834": [-77.3659, 38.9466],
                            "service1835": [-77.3659, 38.9466],
                            "service1993": [-75.6981, 45.4112],
                            "service1836": [-77.3659, 38.9466],
                            "service1991": [-75.6981, 45.4112],
                            "service1990": [10.1194, 56.0901],
                            "service1988": [-75.6981, 45.4112],
                            "service1837": [9.73322, 52.3705],
                            "service1989": [12.3633, 55.7317],
                            "service1839": [7.57884, 50.3536],
                            "service1841": [9.73322, 52.3705],
                            "service1840": [13.912, 51.1111],
                            "service1843": [-75.6981, 45.4112],
                            "service1842": [-75.6981, 45.4112],
                            "service1845": [13.044, 47.7994],
                            "service292": [-86.6546, 34.6333],
                            "service1847": [7.85222, 47.9959],
                            "service1846": [13.044, 47.7994],
                            "service1849": [5.12222, 52.0908],
                            "service1848": [9.73322, 52.3705],
                            "service1960": [-75.5262, 39.1576],
                            "service293": [-3.70256, 40.4165],
                            "service1966": [7.09548, 50.7344],
                            "service1967": [-77.3659, 38.9466],
                            "service1964": [-75.5262, 39.1576],
                            "service1965": [-77.3659, 38.9466],
                            "service97": [1.90389, 47.9029],
                            "service96": [-1.78116, 51.558],
                            "service95": [12.5655, 55.6759],
                            "service94": [149.128, -35.2835],
                            "service93": [1.90389, 47.9029],
                            "service92": [3.16667, 50.8],
                            "service91": [1.90389, 47.9029],
                            "service90": [17.6454, 59.8585],
                            "service1865": [-105.108, 39.7436],
                            "service99": [4.88969, 52.374],
                            "service98": [28.1878, -25.7449],
                            "service1864": [-84.3866, 33.8318],
                            "service1859": [6.18801, 51.7101],
                            "service298": [12.5338, 47.795],
                            "service299": [-75.6981, 45.4112],
                            "service1861": [-94.5689, 39.1478],
                            "service1860": [-94.5689, 39.1478],
                            "service265": [-77.3659, 38.9466],
                            "service264": [-77.3659, 38.9466],
                            "service267": [-77.3659, 38.9466],
                            "service266": [-77.3659, 38.9466],
                            "service261": [-77.3659, 38.9466],
                            "service260": [-77.3659, 38.9466],
                            "service263": [-77.3659, 38.9466],
                            "service262": [-77.3659, 38.9466],
                            "service144": [8.2791, 49.9842],
                            "service145": [8.2791, 49.9842],
                            "service146": [8.2791, 49.9842],
                            "service147": [8.2791, 49.9842],
                            "service269": [-77.3659, 38.9466],
                            "service268": [-77.3659, 38.9466],
                            "service142": [8.2791, 49.9842],
                            "service143": [8.2791, 49.9842],
                            "service1856": [-77.0353, 39.0017],
                            "service1857": [14.2861, 48.3064],
                            "service1919": [-77.0302, 38.892],
                            "service1911": [-75.6981, 45.4112],
                            "service1851": [-79.8371, 43.3862],
                            "service1917": [-75.6981, 45.4112],
                            "service1916": [-75.6981, 45.4112],
                            "service1915": [-75.6981, 45.4112],
                            "service1914": [-75.6981, 45.4112],
                            "service1910": [-75.6981, 45.4112],
                            "service1913": [-75.6981, 45.4112],
                            "service1912": [-75.6981, 45.4112],
                            "service1863": [-77.4875, 39.0437],
                            "service1858": [151.192, -33.8956],
                            "service1748": [12.4839, 41.8947],
                            "service1749": [12.4839, 41.8947],
                            "service1746": [12.4839, 41.8947],
                            "service1747": [8.2791, 49.9842],
                            "service1744": [9.73322, 52.3705],
                            "service1745": [-123.369, 48.4329],
                            "service1742": [12.4839, 41.8947],
                            "service1743": [-123.119, 49.2497],
                            "service1740": [-5.97613, 37.3824],
                            "service1741": [9.73322, 52.3705],
                            "service1980": [-94.5689, 39.1478],
                            "service1924": [-123.119, 49.2497],
                            "service1925": [11.0683, 49.4478],
                            "service1926": [6.06972, 50.8294],
                            "service1927": [-77.4875, 39.0437],
                            "service1739": [12.4839, 41.8947],
                            "service1738": [-63.5724, 44.6453],
                            "service1922": [-63.5724, 44.6453],
                            "service1923": [9.13462, 39.2074],
                            "service1920": [6.18801, 51.7101],
                            "service1921": [-63.5724, 44.6453],
                            "service1733": [12.4839, 41.8947],
                            "service1732": [-75.6981, 45.4112],
                            "service1731": [12.4839, 41.8947],
                            "service1730": [12.4839, 41.8947],
                            "service1737": [-3.70256, 40.4165],
                            "service1736": [-123.119, 49.2497],
                            "service1735": [12.4839, 41.8947],
                            "service1734": [-111.933, 33.428],
                            "service39": [-75.6981, 45.4112],
                            "service38": [-88.1583, 30.6312],
                            "service31": [-77.3659, 38.9466],
                            "service30": [1.90389, 47.9029],
                            "service33": [9.73322, 52.3705],
                            "service32": [19.0399, 47.498],
                            "service35": [-73.7533, 45.4473],
                            "service34": [-84.3866, 33.8318],
                            "service37": [19.0399, 47.498],
                            "service36": [-84.3866, 33.8318],
                            "service1928": [-75.6981, 45.4112],
                            "service1929": [-77.3659, 38.9466],
                            "service108": [-1.78116, 51.558],
                            "service109": [-1.78116, 51.558],
                            "service1818": [-106.619, 35.0901],
                            "service1819": [-106.619, 35.0901],
                            "service1823": [-106.619, 35.0901],
                            "service100": [-6.26719, 53.344],
                            "service101": [-97.147, 49.8844],
                            "service102": [-43.2075, -22.9028],
                            "service103": [-112.091, 33.4508],
                            "service104": [1.90389, 47.9029],
                            "service105": [14.4208, 50.088],
                            "service106": [-0.87734, 41.6561],
                            "service107": [17.6454, 59.8585],
                            "service1953": [-77.3659, 38.9466],
                            "service1952": [-77.3659, 38.9466],
                            "service1951": [-77.3659, 38.9466],
                            "service1950": [-77.3659, 38.9466],
                            "service48": [4.88969, 52.374],
                            "service49": [2.15899, 41.3888],
                            "service1955": [-77.3659, 38.9466],
                            "service1954": [-77.3659, 38.9466],
                            "service44": [4.88969, 52.374],
                            "service45": [4.88969, 52.374],
                            "service46": [4.88969, 52.374],
                            "service47": [4.88969, 52.374],
                            "service40": [-118.312, 34.0616],
                            "service41": [-134.527, 58.3565],
                            "service42": [12.5338, 47.795],
                            "service43": [4.88969, 52.374],
                            "service1759": [-5.97613, 37.3824],
                            "service1758": [12.4839, 41.8947],
                            "service218": [-77.3659, 38.9466],
                            "service219": [-77.3659, 38.9466],
                            "service214": [-77.3659, 38.9466],
                            "service215": [-77.3659, 38.9466],
                            "service216": [-77.3659, 38.9466],
                            "service217": [-77.3659, 38.9466],
                            "service210": [-77.3659, 38.9466],
                            "service211": [-77.3659, 38.9466],
                            "service212": [2.15899, 41.3888],
                            "service213": [-77.3659, 38.9466],
                            "service1788": [-9.13333, 38.7167],
                            "service1789": [-112.091, 33.4508],
                            "service1782": [12.1405, 54.0887],
                            "service1783": [-116.997, 46.7298],
                            "service1780": [12.4839, 41.8947],
                            "service1781": [12.4839, 41.8947],
                            "service1786": [-95.2643, 38.9581],
                            "service1787": [-72.5808, 44.2617],
                            "service1784": [-94.5689, 39.1478],
                            "service1785": [-116.997, 46.7298],
                            "service1751": [12.1405, 54.0887],
                            "service1750": [12.4839, 41.8947],
                            "service1712": [12.4839, 41.8947],
                            "service168": [-4.42034, 36.7202],
                            "service200": [151.207, -33.8679],
                            "service1678": [14.5051, 46.0511],
                            "service1679": [-5.97613, 37.3824],
                            "service1676": [-1.78116, 51.558],
                            "service1677": [21.0118, 52.2298],
                            "service1674": [12.5655, 55.6759],
                            "service1675": [13.4105, 52.5244],
                            "service1672": [13.4105, 52.5244],
                            "service209": [-77.3659, 38.9466],
                            "service1670": [9.73322, 52.3705],
                            "service1671": [13.4105, 52.5244],
                            "service1777": [12.1405, 54.0887],
                            "service1776": [12.4839, 41.8947],
                            "service1775": [12.4839, 41.8947],
                            "service208": [-118.145, 34.1478],
                            "service1773": [12.4839, 41.8947],
                            "service1772": [12.4839, 41.8947],
                            "service1771": [12.1405, 54.0887],
                            "service1770": [12.1405, 54.0887],
                            "service1779": [12.4839, 41.8947],
                            "service1778": [12.4839, 41.8947],
                            "service75": [21.0118, 52.2298],
                            "service74": [28.1878, -25.7449],
                            "service77": [-79.4163, 43.7001],
                            "service76": [135.569, 34.8164],
                            "service71": [6.14569, 46.2022],
                            "service70": [-94.5689, 39.1478],
                            "service73": [16.3721, 48.2085],
                            "service72": [-1.78116, 51.558],
                            "service79": [1.90389, 47.9029],
                            "service78": [14.5051, 46.0511],
                            "service1992": [-75.6981, 45.4112],
                            "service88": [-97.147, 49.8844],
                            "service89": [9.73322, 52.3705],
                            "service1854": [-94.5689, 39.1478],
                            "service1855": [-96.629, 43.7327],
                            "service1852": [-96.629, 43.7327],
                            "service1853": [14.3053, 46.6247],
                            "service1850": [9.52154, 47.1415],
                            "service1822": [-106.619, 35.0901],
                            "service80": [14.5051, 46.0511],
                            "service81": [14.5051, 46.0511],
                            "service82": [135.569, 34.8164],
                            "service83": [-79.4163, 43.7001],
                            "service84": [11.3945, 47.2627],
                            "service85": [9.73322, 52.3705],
                            "service86": [-122.694, 45.4978],
                            "service87": [12.4839, 41.8947],
                            "service1820": [-106.619, 35.0901],
                            "service1827": [-106.619, 35.0901],
                            "service1826": [-106.619, 35.0901],
                            "service1825": [-116.997, 46.7298],
                            "service1824": [-116.997, 46.7298],
                            "service1829": [-96.629, 43.7327],
                            "service258": [-77.3659, 38.9466],
                            "service259": [-77.3659, 38.9466],
                            "service1828": [-96.629, 43.7327],
                            "service250": [-77.3659, 38.9466],
                            "service251": [-77.3659, 38.9466],
                            "service252": [-77.3659, 38.9466],
                            "service253": [-77.3659, 38.9466],
                            "service254": [-77.3659, 38.9466],
                            "service255": [-77.3659, 38.9466],
                            "service256": [-77.3659, 38.9466],
                            "service257": [-77.3659, 38.9466],
                            "service153": [8.2791, 49.9842],
                            "service152": [8.2791, 49.9842],
                            "service151": [8.2791, 49.9842],
                            "service150": [8.2791, 49.9842],
                            "service157": [8.2791, 49.9842],
                            "service156": [8.2791, 49.9842],
                            "service155": [8.2791, 49.9842],
                            "service154": [8.2791, 49.9842],
                            "service159": [8.2791, 49.9842],
                            "service158": [8.2791, 49.9842],
                            "service1810": [-106.619, 35.0901]
                        },

                        markLine: {
                            smooth: true,
                            effect: {
                                show: true,
                                scaleSize: 1,
                                period: 30,
                                color: '#fff',
                                shadowBlur: 10
                            },
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10
                                    }
                                }
                            },
                            data:testData1_1
//                            data:testData4_1
                        },
                        markPoint: {
                            symbol: 'emptyCircle',
                            symbolSize: function (v) {
                                return 10 + v / 10
                            },
                            effect: {
                                show: true,
                                shadowBlur: 0
                            },
                            itemStyle: {
                                normal: {
                                    label: {show: false}
                                }
                            },
//                            data:testData4_2
                            data:testData1_2

                        }

                    },
                    {
                        name: 'Monitor-IRELAND',
                        type: 'map',
                        mapType: 'none',
                        data: [],
                        markLine: {
                            smooth: true,
                            effect: {
                                show: true,
                                scaleSize: 1,
                                period: 30,
                                color: '#fff',
                                shadowBlur: 10
                            },
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10
                                    }
                                }
                            },
                           data:testData2_1
                        },
                        markPoint: {
                            symbol: 'emptyCircle',
                            symbolSize: function (v) {
                                return 10 + v / 10
                            },
                            effect: {
                                show: true,
                                shadowBlur: 0
                            },
                            itemStyle: {
                                normal: {
                                    label: {show: false}
                                }
                            },
                            data: testData2_2
                        }
                    },
                    {
                        name: 'Monitor-HONGKONG',
                        type: 'map',
                        mapType: 'none',
                        data: [],
                        markLine: {
                            smooth: true,
                            effect: {
                                show: true,
                                scaleSize: 1,
                                period: 30,
                                color: '#fff',
                                shadowBlur: 10
                            },
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10
                                    }
                                }
                            },
                            data: testData3_1
                        },
                        markPoint: {
                            symbol: 'emptyCircle',
                            symbolSize: function (v) {
                                return 10 + v / 10
                            },
                            effect: {
                                show: true,
                                shadowBlur: 0
                            },
                            itemStyle: {
                                normal: {
                                    label: {show: false}
                                }
                            },

                            data: testData3_2
                        }
                    },
                    {
                        name: 'Monitor-NETHERLANDS',
                        type: 'map',
                        mapType: 'none',
                        data: [],
                        markLine: {
                            smooth: true,
                            effect: {
                                show: true,
                                scaleSize: 1,
                                period: 30,
                                color: '#fff',
                                shadowBlur: 10
                            },
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10
                                    }
                                }
                            },
                            data: testData4_1
                        },
                        markPoint: {
                            symbol: 'emptyCircle',
                            symbolSize: function (v) {
                                return 10 + v / 10
                            },
                            effect: {
                                show: true,
                                shadowBlur: 0
                            },
                            itemStyle: {
                                normal: {
                                    label: {show: false}
                                }
                            },
                            data:testData4_2
                        }
                    },
                    {
                        name: 'Monitor-SINGAPORE',
                        type: 'map',
                        mapType: 'none',
                        data: [],
                        markLine: {
                            smooth: true,
                            effect: {
                                show: true,
                                scaleSize: 1,
                                period: 30,
                                color: '#fff',
                                shadowBlur: 10
                            },
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10
                                    }
                                }
                            },
                            data: testData5_1
                        },
                        markPoint: {
                            symbol: 'emptyCircle',
                            symbolSize: function (v) {
                                return 10 + v / 10
                            },
                            effect: {
                                show: true,
                                shadowBlur: 0
                            },
                            itemStyle: {
                                normal: {
                                    label: {show: false}
                                }
                            },
                            data: testData5_2
                        }
                    },
                    {
                        name: 'Monitor-US.CALIFORNIA',
                        type: 'map',
                        mapType: 'none',
                        data: [],
                        markLine: {
                            smooth: true,
                            effect: {
                                show: true,
                                scaleSize: 1,
                                period: 30,
                                color: '#fff',
                                shadowBlur: 10
                            },
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10
                                    }
                                }
                            },
                            data:testData6_1
                        },
                        markPoint: {
                            symbol: 'emptyCircle',
                            symbolSize: function (v) {
                                return 10 + v / 10
                            },
                            effect: {
                                show: true,
                                shadowBlur: 0
                            },
                            itemStyle: {
                                normal: {
                                    label: {show: false}
                                }
                            },
                            data:testData6_2
                        }
                    },
                    {
                        name: 'Monitor-US.VIRGINIA2',
                        type: 'map',
                        mapType: 'none',
                        data: [],
                        markLine: {
                               smooth: true,
                               effect: {
                                   show: true,
                                   scaleSize: 1,
                                   period: 30,
                                   color: '#fff',
                                   shadowBlur: 10
                               },
                               itemStyle: {
                                   normal: {
                                       borderWidth: 1,
                                       lineStyle: {
                                           type: 'solid',
                                           shadowBlur: 10
                                       }
                                   }
                               },
                               data:testData7_1
                           },
                           markPoint: {
                               symbol: 'emptyCircle',
                               symbolSize: function (v) {
                                   return 10 + v / 10
                               },
                               effect: {
                                   show: true,
                                   shadowBlur: 0
                               },
                               itemStyle: {
                                   normal: {
                                       label: {show: false}
                                   }
                               },
                               data:testData7_2
                           }
                    },
                    {
                                            name: 'Monitor-IRELAND2',
                                            type: 'map',
                                            mapType: 'none',
                                            data: [],
                                            markLine: {
                                                smooth: true,
                                                effect: {
                                                    show: true,
                                                    scaleSize: 1,
                                                    period: 30,
                                                    color: '#fff',
                                                    shadowBlur: 10
                                                },
                                                itemStyle: {
                                                    normal: {
                                                        borderWidth: 1,
                                                        lineStyle: {
                                                            type: 'solid',
                                                            shadowBlur: 10
                                                        }
                                                    }
                                                },
                                                data:monitorDataLine[8]
                                            },
                                            markPoint: {
                                                symbol: 'emptyCircle',
                                                symbolSize: function (v) {
                                                    return 10 + v / 10
                                                },
                                                effect: {
                                                    show: true,
                                                    shadowBlur: 0
                                                },
                                                itemStyle: {
                                                    normal: {
                                                        label: {show: false}
                                                    }
                                                },
                                                data:monitorDataPoint[8]
                                            }
                                        },
                    {
                                                                name: 'Monitor-NETHERLANDS2',
                                                                type: 'map',
                                                                mapType: 'none',
                                                                data: [],
                                                                markLine: {
                                                                    smooth: true,
                                                                    effect: {
                                                                        show: true,
                                                                        scaleSize: 1,
                                                                        period: 30,
                                                                        color: '#fff',
                                                                        shadowBlur: 10
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            borderWidth: 1,
                                                                            lineStyle: {
                                                                                type: 'solid',
                                                                                shadowBlur: 10
                                                                            }
                                                                        }
                                                                    },
                                                                    data:monitorDataLine[9]
                                                                },
                                                                markPoint: {
                                                                    symbol: 'emptyCircle',
                                                                    symbolSize: function (v) {
                                                                        return 10 + v / 10
                                                                    },
                                                                    effect: {
                                                                        show: true,
                                                                        shadowBlur: 0
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            label: {show: false}
                                                                        }
                                                                    },
                                                                    data:monitorDataPoint[9]
                                                                }
                                                            },
                    {
                                                                name: 'Monitor-US.CALIFORNIA2',
                                                                type: 'map',
                                                                mapType: 'none',
                                                                data: [],
                                                                markLine: {
                                                                    smooth: true,
                                                                    effect: {
                                                                        show: true,
                                                                        scaleSize: 1,
                                                                        period: 30,
                                                                        color: '#fff',
                                                                        shadowBlur: 10
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            borderWidth: 1,
                                                                            lineStyle: {
                                                                                type: 'solid',
                                                                                shadowBlur: 10
                                                                            }
                                                                        }
                                                                    },
                                                                    data:monitorDataLine[10]
                                                                },
                                                                markPoint: {
                                                                    symbol: 'emptyCircle',
                                                                    symbolSize: function (v) {
                                                                        return 10 + v / 10
                                                                    },
                                                                    effect: {
                                                                        show: true,
                                                                        shadowBlur: 0
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            label: {show: false}
                                                                        }
                                                                    },
                                                                    data:monitorDataPoint[10]
                                                                }
                                                            },
                      {
                                                                name: 'Monitor-HONGKONG2',
                                                                type: 'map',
                                                                mapType: 'none',
                                                                data: [],
                                                                markLine: {
                                                                    smooth: true,
                                                                    effect: {
                                                                        show: true,
                                                                        scaleSize: 1,
                                                                        period: 30,
                                                                        color: '#fff',
                                                                        shadowBlur: 10
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            borderWidth: 1,
                                                                            lineStyle: {
                                                                                type: 'solid',
                                                                                shadowBlur: 10
                                                                            }
                                                                        }
                                                                    },
                                                                    data:monitorDataLine[11]
                                                                },
                                                                markPoint: {
                                                                    symbol: 'emptyCircle',
                                                                    symbolSize: function (v) {
                                                                        return 10 + v / 10
                                                                    },
                                                                    effect: {
                                                                        show: true,
                                                                        shadowBlur: 0
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            label: {show: false}
                                                                        }
                                                                    },
                                                                    data:monitorDataPoint[11]
                                                                }
                                                            },
                      {
                                                                name: 'Monitor-US.VIRGINIA3',
                                                                type: 'map',
                                                                mapType: 'none',
                                                                data: [],
                                                                markLine: {
                                                                    smooth: true,
                                                                    effect: {
                                                                        show: true,
                                                                        scaleSize: 1,
                                                                        period: 30,
                                                                        color: '#fff',
                                                                        shadowBlur: 10
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            borderWidth: 1,
                                                                            lineStyle: {
                                                                                type: 'solid',
                                                                                shadowBlur: 10
                                                                            }
                                                                        }
                                                                    },
                                                                    data:monitorDataLine[12]
                                                                },
                                                                markPoint: {
                                                                    symbol: 'emptyCircle',
                                                                    symbolSize: function (v) {
                                                                        return 10 + v / 10
                                                                    },
                                                                    effect: {
                                                                        show: true,
                                                                        shadowBlur: 0
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            label: {show: false}
                                                                        }
                                                                    },
                                                                    data:monitorDataPoint[12]
                                                                }
                                                            },
                     {
                                                                name: 'Monitor-IRELAND3',
                                                                type: 'map',
                                                                mapType: 'none',
                                                                data: [],
                                                                markLine: {
                                                                    smooth: true,
                                                                    effect: {
                                                                        show: true,
                                                                        scaleSize: 1,
                                                                        period: 30,
                                                                        color: '#fff',
                                                                        shadowBlur: 10
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            borderWidth: 1,
                                                                            lineStyle: {
                                                                                type: 'solid',
                                                                                shadowBlur: 10
                                                                            }
                                                                        }
                                                                    },
                                                                    data:monitorDataLine[14]
                                                                },
                                                                markPoint: {
                                                                    symbol: 'emptyCircle',
                                                                    symbolSize: function (v) {
                                                                        return 10 + v / 10
                                                                    },
                                                                    effect: {
                                                                        show: true,
                                                                        shadowBlur: 0
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            label: {show: false}
                                                                        }
                                                                    },
                                                                    data:monitorDataPoint[14]
                                                                }
                                                            },
                      {
                                                                name: 'Monitor-CHINA',
                                                                type: 'map',
                                                                mapType: 'none',
                                                                data: [],
                                                                markLine: {
                                                                    smooth: true,
                                                                    effect: {
                                                                        show: true,
                                                                        scaleSize: 1,
                                                                        period: 30,
                                                                        color: '#fff',
                                                                        shadowBlur: 10
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            borderWidth: 1,
                                                                            lineStyle: {
                                                                                type: 'solid',
                                                                                shadowBlur: 10
                                                                            }
                                                                        }
                                                                    },
                                                                    data:monitorDataLine[16]
                                                                },
                                                                markPoint: {
                                                                    symbol: 'emptyCircle',
                                                                    symbolSize: function (v) {
                                                                        return 10 + v / 10
                                                                    },
                                                                    effect: {
                                                                        show: true,
                                                                        shadowBlur: 0
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            label: {show: false}
                                                                        }
                                                                    },
                                                                    data:monitorDataPoint[16]
                                                                }
                                                            },
                     {
                                                                name: 'Monitor-IRELAND4',
                                                                type: 'map',
                                                                mapType: 'none',
                                                                data: [],
                                                                markLine: {
                                                                    smooth: true,
                                                                    effect: {
                                                                        show: true,
                                                                        scaleSize: 1,
                                                                        period: 30,
                                                                        color: '#fff',
                                                                        shadowBlur: 10
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            borderWidth: 1,
                                                                            lineStyle: {
                                                                                type: 'solid',
                                                                                shadowBlur: 10
                                                                            }
                                                                        }
                                                                    },
                                                                    data:monitorDataLine[17]
                                                                },
                                                                markPoint: {
                                                                    symbol: 'emptyCircle',
                                                                    symbolSize: function (v) {
                                                                        return 10 + v / 10
                                                                    },
                                                                    effect: {
                                                                        show: true,
                                                                        shadowBlur: 0
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            label: {show: false}
                                                                        }
                                                                    },
                                                                    data:monitorDataPoint[17]
                                                                }
                                                            },
                     {
                                                                name: 'Monitor_US.WASHINGTON',
                                                                type: 'map',
                                                                mapType: 'none',
                                                                data: [],
                                                                markLine: {
                                                                    smooth: true,
                                                                    effect: {
                                                                        show: true,
                                                                        scaleSize: 1,
                                                                        period: 30,
                                                                        color: '#fff',
                                                                        shadowBlur: 10
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            borderWidth: 1,
                                                                            lineStyle: {
                                                                                type: 'solid',
                                                                                shadowBlur: 10
                                                                            }
                                                                        }
                                                                    },
                                                                    data:monitorDataLine[18]
                                                                },
                                                                markPoint: {
                                                                    symbol: 'emptyCircle',
                                                                    symbolSize: function (v) {
                                                                        return 10 + v / 10
                                                                    },
                                                                    effect: {
                                                                        show: true,
                                                                        shadowBlur: 0
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            label: {show: false}
                                                                        }
                                                                    },
                                                                    data:monitorDataPoint[18]
                                                                }
                                                            },
                     {
                                                                name: 'Monitor_US.ILLINOIS',
                                                                type: 'map',
                                                                mapType: 'none',
                                                                data: [],
                                                                markLine: {
                                                                    smooth: true,
                                                                    effect: {
                                                                        show: true,
                                                                        scaleSize: 1,
                                                                        period: 30,
                                                                        color: '#fff',
                                                                        shadowBlur: 10
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            borderWidth: 1,
                                                                            lineStyle: {
                                                                                type: 'solid',
                                                                                shadowBlur: 10
                                                                            }
                                                                        }
                                                                    },
                                                                    data:monitorDataLine[19]
                                                                },
                                                                markPoint: {
                                                                    symbol: 'emptyCircle',
                                                                    symbolSize: function (v) {
                                                                        return 10 + v / 10
                                                                    },
                                                                    effect: {
                                                                        show: true,
                                                                        shadowBlur: 0
                                                                    },
                                                                    itemStyle: {
                                                                        normal: {
                                                                            label: {show: false}
                                                                        }
                                                                    },
                                                                    data:monitorDataPoint[19]
                                                                }
                                                            },
                     {
                        name: ' ',
                        type: 'map',
                        mapType: 'none',
                        data: [],
                        markLine: {
                            smooth: true,
                            effect: {
                                show: true,
                                scaleSize: 1,
                                period: 30,
                                color: '#fff',
                                shadowBlur: 10
                            },
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10
                                    }
                                }
                            },
                            data: []
                        },
                        markPoint: {
                            symbol: 'emptyCircle',
                            symbolSize: function (v) {
                                return 10 + v / 10
                            },
                            effect: {
                                show: true,
                                shadowBlur: 0
                            },
                            itemStyle: {
                                normal: {
                                    label: {show: false}
                                }
                            },

                            data: []
                        }
                    },
                    {
                        name: 'Service-Europe',
                        type: 'map',
                        mapType: 'none',
                        data: [],
                        markLine: {
                            smooth: true,
                            effect: {
                                show: true,
                                scaleSize: 1,
                                period: 30,
                                color: '#fff',
                                shadowBlur: 10
                            },
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10
                                    }
                                }
                            },

                               data:countryData2[2]
                        }

                    },
                    {
                        name: 'Service-NorthAmerica',
                        type: 'map',
                        mapType: 'none',
                        data: [],
                        markLine: {
                            smooth: true,
                            effect: {
                                show: true,
                                scaleSize: 1,
                                period: 30,
                                color: '#fff',
                                shadowBlur: 10
                            },
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10
                                    }
                                }
                            },
                            data:countryData2[3]
                        }

                    },
                    {
                        name: 'Service-Oceania',
                        type: 'map',
                        mapType: 'none',
                        data: [],
                        markLine: {
                            smooth: true,
                            effect: {
                                show: true,
                                scaleSize: 1,
                                period: 30,
                                color: '#fff',
                                shadowBlur: 10
                            },
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10
                                    }
                                }
                            },
                            data:countryData2[4]
                        }

                    },
                    {
                        name: 'Service-SouthAmerica',
                        type: 'map',
                        mapType: 'none',
                        data: [],
                        markLine: {
                            smooth: true,
                            effect: {
                                show: true,
                                scaleSize: 1,
                                period: 30,
                                color: '#fff',
                                shadowBlur: 10
                            },
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10
                                    }
                                }
                            },
                            data:countryData2[5]
                        }
                    }


                ]
            };

            var myChart = BMapExt.initECharts(container);
            BMapExt.setOption(option);
        }
    );
})();