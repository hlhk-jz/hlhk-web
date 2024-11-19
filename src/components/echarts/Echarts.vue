<template>
    <div id="echartsId" ref="echartsDom" style="width: 600px; height: 400px;"></div>
</template>

<script>
    import * as echarts from 'echarts'

    export default {
        name: 'Echarts',
        data(){
            return{
                option:{
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    legend: {
                        data: ['销量']
                    },
                    xAxis: {
                        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                    },
                    yAxis: {},
                    series: [
                        {
                            name: '销量',
                            type: 'bar',
                            data: [5, 20, 36, 10, 10, 20]
                        }
                    ]
                }
            }
        },
        props: {
            msg: String
        },

        mounted() {
            this.initChart();
        },
        beforeDestroy() {
            if (this.chart) {
                this.chart.dispose();
            }
        },
        methods: {
            initChart() {
                this.chart = echarts.init(this.$refs.echartsDom);
                this.chart.setOption(this.option);
            },

        }
    }
</script>

<style>
    #echartsId{
        background-color: #f76eff;
    }
</style>