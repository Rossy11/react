/**
 * Created by Rossy1 on 2018/5/7.
 */
import React, { Component } from 'react';
import echarts from 'echarts';
import axios from 'axios';

class router2 extends Component {
    componentDidMount() {
        axios.get("http://14.119.109.232:30666/center/report/?cmd=income_info").then(res => {
            let list = res.data.result.group;
            list.sort((a,b)=>{
                return b.index - a.index
            });
            let time = [];
            let datas = [];
            for(var value of list){
                time.push(value.recharge_day)
                datas.push(Number(value.mount))
            }
            this.drawLine(time, datas)
        });
    }
    drawLine(time, datas){
        let myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
            color: ['#90bcf3'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['收益/元'],
                left: 20,
                top: 20,
                textStyle: {
                    color: ['#90bcf3']
                }
            },
            toolbox: {
                show: false,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    name: '日期',
                    boundaryGap: false,
                    data: time,
                    axisLine: {
                        lineStyle: {
                            color: ['#90bcf3']
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: ['#000']
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: ['#90bcf3']
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: ['#000']
                        }
                    }
                }
            ],
            series: [
                {
                    name: '收益/元',
                    type: 'line',
                    smooth: true,//平滑
                    stack: '总量',
                    data: datas
                }
            ]
        });
    }
    render() {
        return (
            <div id="main" className="echarts"></div>
        );
    }
}

export default router2;
