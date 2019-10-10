import React, { Component } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
// Apply chart themes
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

class XYChartDiv extends Component {
  componentDidMount() {
    // Create chart instance
    var chart = am4core.create("XYChartDiv", am4charts.XYChart);

    chart.marginRight = 400;

    // Add data
    chart.data = [
      {
        country: "Lithuania",
        research: 501.9,
        marketing: 250,
        sales: 199
      },
      {
        country: "Czech Republic",
        research: 301.9,
        marketing: 222,
        sales: 251
      },
      {
        country: "Ireland",
        research: 201.1,
        marketing: 170,
        sales: 199
      },
      {
        country: "Germany",
        research: 165.8,
        marketing: 122,
        sales: 90
      },
      {
        country: "Australia",
        research: 139.9,
        marketing: 99,
        sales: 252
      },
      {
        country: "Austria",
        research: 128.3,
        marketing: 85,
        sales: 84
      },
      {
        country: "UK",
        research: 99,
        marketing: 93,
        sales: 142
      },
      {
        country: "Belgium",
        research: 60,
        marketing: 50,
        sales: 55
      },
      {
        country: "The Netherlands",
        research: 50,
        marketing: 42,
        sales: 25
      }
    ];

    //console.log('chart', chart);

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.title.text = "Local country offices";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Expenditure (M)";

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "research";
    series.dataFields.categoryX = "country";
    series.name = "Research";
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = true;

    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "marketing";
    series2.dataFields.categoryX = "country";
    series2.name = "Marketing";
    series2.tooltipText = "{name}: [bold]{valueY}[/]";
    series2.stacked = true;

    var series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.dataFields.valueY = "sales";
    series3.dataFields.categoryX = "country";
    series3.name = "Sales";
    series3.tooltipText = "{name}: [bold]{valueY}[/]";
    series3.stacked = true;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div>
        <h3>amChart4: XY Chart 1</h3>
        <div id="XYChartDiv" style={{ width: "100%", height: "500px" }}></div>
      </div>
    );
  }
}

export default XYChartDiv;
