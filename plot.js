// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById('basic-bar'));

// Specify the configuration items and data for the chart
var option = {
    title: {
        text: 'Phone Screen Time'
    },
    tooltip: {},
    xAxis: {
        name: 'Category',
        data: ['Entertainment', 'Utilities', 'Creativity']
    },
    yAxis: {
        name: 'Hours'
    },
    series: [
        {
            name: 'Categories',
            type: 'bar',
            data: [
                {
                    value: 3.62,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#02dbc2'
                            },
                            {
                                offset: 1,
                                color: '#02c7bd'
                            }
                        ])
                    }
                },
                {
                    value: 3.32,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#f78c00'
                            },
                            {
                                offset: 1,
                                color: '#db5f00'
                            }
                        ])
                    }
                },
                {
                    value: 4.42,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#009dff'
                            },
                            {
                                offset: 1,
                                color: '#0d55d1'
                            }
                        ])
                    }
                }
            ]
        }
    ]
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);


// Initialize the echarts instance based on the prepared dom
var compBar = echarts.init(document.getElementById('compare-bar'));

var option2 = {
    title: {
        text: 'SAT Scores Throughout the US in 2020'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      //legend: {},
      /*grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      */
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: [
            'Wisconsin', 
            'Texas',
            'North Dakota', 
            'Michigan', 
            'Kentucky', 
            'Hawaii', 
            'Florida', 
            'Alaska', 
            'Alabama', 
            'USA'
        ]
      },
      series: [
        {
          name: 'Evidence-Based Reading and Writing',
          type: 'bar',
          data: [615, 510, 615, 503, 609, 549, 512, 555, 576, 528]
        },
        {
          name: 'Math',
          type: 'bar',
          data: [628, 500, 617, 495, 598, 546, 479, 543, 551, 523]
        },
        {
            name: 'Total',
            type: 'bar',
            data: [1243, 1010, 1231, 998, 1207, 1095, 992, 1098, 1127, 1051]
          }
      ]
  };
  
// Display the chart using the configuration items and data just specified.
compBar.setOption(option2);