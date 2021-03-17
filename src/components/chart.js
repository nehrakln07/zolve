import React, { Component } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = props => {
  const { data } = props;
  console.log(data, "data");
  const chartData = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Bar Chart'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'category',
      title: {
        text: 'Languages '
      },
      labels: {
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Count '
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: 'Count: <b>{point.y:.1f}</b>'
    },
    series: [{
      name: 'language',
      data: [...data],
      dataLabels: {
        enabled: true,
        color: '#FFFFFF',
        format: '{point.y:.1f}',
        y: 10,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    }]
  }

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartData}
      />
    </>
  );
}

export default Chart;
