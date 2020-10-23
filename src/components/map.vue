<template>
    <div class="home">
        <div id="chart" style="width: 1200px;height: 600px;"></div>
    </div>
</template>
<script>
    import echarts from '../common/echarts'
    //import 'echarts/map/js/province/jiangsu.js'  //引入中国地图
    export default{
        data(){
            return {

            }
        },
        mounted(){
            this.init()
        },
        methods:{
            init(){
                var moveLine = {
                    'normal': [
                        {
                            "fromName": "盐城消防支队",
                            "toName": "消防总队",
                            'coords': [
                                [120.2234,33.5577],
                                [118.8062,31.9208]
                            ]
                        },
                        {
                            "fromName": "南京消防支队",
                            "toName": "消防总队",
                            'coords': [
                            [118.9200,31.3989],
                            [118.8062,31.9208],
                            ]
                        },
                        {
                            "fromName": "徐州消防支队",
                            "toName": "消防总队",
                            'coords': [
                            [117.5208,34.3268],
                            [118.8062,31.9208]
                            ]
                        },
                        {
                            "fromName": "南通消防支队",
                            "toName": "消防总队",
                            'coords': [
                            [121.1023,32.1625],
                            [118.8062,31.9208]
                            ]
                        },
                        {
                            "fromName": "淮安消防支队",
                            "toName": "消防总队",
                            'coords': [
                            [118.927,33.4039],
                            [118.8062,31.9208]
                            ]
                        },
                        {
                            "fromName": "苏州消防支队",
                            "toName": "消防总队",
                            'coords': [
                            [120.6519,31.3989],
                            [118.8062,31.9208]
                            ]
                        },
                        {
                            "fromName": "宿迁消防支队",
                            "toName": "消防总队",
                            'coords': [
                            [118.5535,33.7775],
                            [118.8062,31.9208]
                            ]
                        },
                        {
                            "fromName": "连云港消防支队",
                            "toName": "消防总队",
                            'coords': [
                            [119.1248,34.552],
                            [118.8062,31.9208]
                            ]
                        },
                        {
                            "fromName": "扬州消防支队",
                            "toName": "消防总队",
                            'coords': [
                            [119.4653,32.8162],
                            [118.8062,31.9208]
                            ]
                        },
                        {
                            "fromName": "泰州消防支队",
                            "toName": "消防总队",
                            'coords': [
                            [120.0586,32.5525],
                            [118.8062,31.9208]
                            ]
                        },
                
                        {
                            "fromName": "无锡消防支队",
                            "toName": "消防总队",
                            'coords': [
                            [120.3442,31.5527],
                            [118.8062,31.9208]
                            ]
                        },
                        {
                            "fromName": "常州消防支队",
                            "toName": "消防总队",
                            'coords': [
                            [119.4543,31.5582],
                            [118.8062,31.9208]
                            ]
                        },
                        {
                            "fromName": "镇江消防支队",
                            "toName": "消防总队",
                            'coords': [
                            [119.4763,31.9702],
                            [118.8062,31.9208]
                            ]
                        }
                    ]
                };
                var geoCoorddata={
                    '南京消防支队': [118.9200,31.3989],
                    '盐城消防支队':[120.2234,33.5577],
                    '徐州消防支队':[117.5208,34.3268],
                    '南通消防支队':[121.1023,32.1625],
                    '淮安消防支队':[118.927,33.4039],
                    '苏州消防支队':[120.6519,31.3989],
                    '宿迁消防支队':[118.5535,33.7775],
                    '连云港消防支队':[119.1248,34.552],
                    '扬州消防支队':[119.4653,32.8162],
                    '消防总队':[118.8062,31.9208],
                    '泰州消防支队':[120.0586,32.5525],
                    '无锡消防支队':[120.3442,31.5527],
                    '常州消防支队':[119.4543,31.5582],
                    '镇江消防支队':[119.4763,31.9702]
                };
                var data = [
                    {name:'消防总队',value:geoCoorddata['消防总队'].concat(10000)},
                    {name:'盐城消防支队',value:geoCoorddata['盐城消防支队'].concat(100)},
                    {name:'徐州消防支队',value:geoCoorddata['徐州消防支队'].concat(100)},
                    {name:'南通消防支队',value:geoCoorddata['南通消防支队'].concat(100)},
                    {name:'淮安消防支队',value:geoCoorddata['淮安消防支队'].concat(100)},
                    {name:'苏州消防支队',value:geoCoorddata['苏州消防支队'].concat(100)},
                    {name:'宿迁消防支队',value:geoCoorddata['宿迁消防支队'].concat(100)},
                    {name:'连云港消防支队',value:geoCoorddata['连云港消防支队'].concat(100)},
                    {name:'扬州消防支队',value:geoCoorddata['扬州消防支队'].concat(100)},
                    {name:'南京消防支队',value:geoCoorddata['南京消防支队'].concat(100)},
                    {name:'泰州消防支队',value:geoCoorddata['泰州消防支队'].concat(100)},
                    {name:'无锡消防支队',value:geoCoorddata['无锡消防支队'].concat(100)},
                    {name:'常州消防支队',value:geoCoorddata['常州消防支队'].concat(100)},
                    {name:'镇江消防支队',value:geoCoorddata['镇江消防支队'].concat(100)}
                ]
                console.log(data)
                var myChart =echarts.init(document.getElementById('chart'));
                var option={
                    title:{
                        text:"疫情地图"
                    },
                    visualMap: {
                        show: true,//隐藏图例
                        min: 0,
                        max: 500,
                        left: 'left',
                        top: 'top',
                        text: ['高', '低'], // 文本，默认为数值文本
                        calculable: true,
                        realtime: false,
                        seriesIndex: [1],
                        splitNumber: 5,
                        inRange: {
                            color: ['#d94e5d','#eac736','#50a3ba'].reverse()
                            //color: 'transparent'
                        },
                        textStyle: {
                            color: '#F4E925'
                        }
                    },
                    geo: {
                        map: '江苏',
                        label: {
                            normal:{
                                show:false
                            },
                            emphasis: {
                                show:false 
                            }
                        },
                        zoom: 1.2,
                        roam: false,
                        // geoCoord:geoCoorddata,
                        itemStyle: {
                            normal: {
                            areaColor: 'transparent',
                            borderColor: '#3fdaff',
                            borderWidth: 2,
                            shadowColor: 'rgba(63, 218, 255, 0.5)',
                            shadowBlur: 30
                            },
                            emphasis: {
                            areaColor: '#2a333d'
                            }
                        }
                    },
                    series:[
                    {
                        name: '江苏',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: data,
                        rippleEffect:{
                            period:4,
                            scale:2.5,
                            brushType:'stroke',
                            // color:'red'
                        },
                        label: {
                            normal: {
                            formatter: '{b}',
                            position: 'top',
                            show: true
                            },
                            emphasis: {
                            show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                            color: '#F4E925'//字体颜色
                            },
                            label: {
                            show: true
                            }
                        }
                    },
                        {
                            type:'heatmap',
                            map:'江苏',
                            data:data,
                            coordinateSystem: 'geo',
                            symbolSize: function (val) {//地区圆的大小
                                return val[1];
                            },
                            hoverAnimation: true,
                            showEffectOn: 'render',
                            rippleEffect:{
                                period:4,
                                scale:2.5,
                                brushType:'stroke'
                            },
                            label: {
                                normal: {
                                formatter: '{b}',
                                position: 'bottom',
                                show: true
                                },
                                emphasis: {
                                show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#FFFFC3'
                                },
                                label: {
                                    show: true
                                }
                            }
                        },
                        {
                            name: '江苏',
                            type: 'lines',
                            // coordinateSystem: 'geo',
                            zlevel: 1,
                            // large: true,
                            effect: {//红色箭头
                                show: true,
                                period: 6,
                                trailLength: 0.1,
                                color: '#0fff17',
                                symbol: 'arrow',
                                symbolSize: 8
                            },
                            lineStyle: {
                                normal: {
                                color: '#0fff17',
                                width: 2,
                                opacity: 1.0,
                                curveness: 0.15
                                }
                            },
                            data: moveLine.normal

                        }
                    ]
                };
                myChart.setOption(option)
            }
        }
    }
</script>
