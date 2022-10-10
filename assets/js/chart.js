$(function () {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  "use strict";
  var data = {
    labels: [
      "24th Sept",
      "25th Sept",
      "26th Sept",
      "27th Sept",
      "28th Sept",
      "29th Sept",
    ],
    datasets: [
      {
        label: "Voltage",
        data: [240, 225, 220, 200, 250, 240],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        fill: false,
      },
    ],
  };
  var multiLineData1 = {
    labels: [
      "24th Sept",
      "25th Sept",
      "26th Sept",
      "27th Sept",
      "28th Sept",
      "29th Sept",
    ],
    datasets: [
      {
        label: "Sector 1",
        data: [240, 225, 220, 200, 250, 240],
        borderColor: ["#587ce4"],
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Sector 2",
        data: [230, 255, 210, 270, 200, 220],
        borderColor: ["#ede190"],
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  var multiLineData2 = {
    labels: [
      "24th Sept",
      "25th Sept",
      "26th Sept",
      "27th Sept",
      "28th Sept",
      "29th Sept",
    ],
    datasets: [
      {
        label: "Sector 1",
        data: [240, 225, 220, 200, 250, 240],
        borderColor: ["#587ce4"],
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Sector 2",
        data: [230, 255, 210, 270, 200, 220],
        borderColor: ["#ede190"],
        borderWidth: 2,
        fill: false,
      },
    ],
  };
  var options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
          gridLines: {
            color: "rgba(204, 204, 204,0.1)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            color: "rgba(204, 204, 204,0.1)",
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  var doughnutPieData = {
    datasets: [
      {
        data: [30, 70, 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Pink", "Blue", "Yellow"],
  };
  var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };
  var areaData = {
    labels: ["25th Sept", "26th Sept", "27th Sept", "28th Sept", "29th Sept"],
    datasets: [
      {
        label: "Energy (KWH)",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        fill: true, // 3: no fill
      },
    ],
  };

  var areaOptions = {
    plugins: {
      filler: {
        propagate: true,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            color: "rgba(204, 204, 204,0.1)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            color: "rgba(204, 204, 204,0.1)",
          },
        },
      ],
    },
  };

  var multiAreaData = {
    labels: [
      "23th Sept",
      "24th Sept",
      "25th Sept",
      "26th Sept",
      "27th Sept",
      "Yesterday",
      "Today",
      "Tomorrow",
    ],
    datasets: [
      {
        label: "Consumptions",
        data: [12, 13, 16, 15, 13, 19, 11, 14],
        borderColor: ["rgba(255, 99, 132, 0.5)"],
        backgroundColor: ["rgba(255, 99, 132, 0.5)"],
        borderWidth: 1,
        fill: true,
      },
      {
        label: "Generation",
        data: [14, 18, 16, 12, 15, 11, 13, 9],
        borderColor: ["rgba(54, 162, 235, 0.5)"],
        backgroundColor: ["rgba(54, 162, 235, 0.5)"],
        borderWidth: 1,
        fill: true,
      },
      {
        label: "Saved",
        data: [6, 14, 16, 20, 12, 18, 15, 12],
        borderColor: ["rgba(255, 206, 86, 0.5)"],
        backgroundColor: ["rgba(255, 206, 86, 0.5)"],
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  var areaData1 = {
    labels: [
      "23th Sept",
      "24th Sept",
      "25th Sept",
      "26th Sept",
      "27th Sept",
      "Yesterday",
      "Today",
      "Tomorrow",
    ],
    datasets: [
      {
        label: "Temperature",
        data: [98, 99, 100, 103, 97, 95, 105, 104],
        borderColor: ["rgba(255, 206, 86, 0.5)"],
        backgroundColor: ["rgba(255, 206, 86, 0.5)"],
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  var areaData2 = {
    labels: [
      "23th Sept",
      "24th Sept",
      "25th Sept",
      "26th Sept",
      "27th Sept",
      "Yesterday",
      "Today",
      "Tomorrow",
    ],
    datasets: [
      {
        label: "Voltage",
        data: [220, 210, 250, 300, 250, 190, 230, 240],
        borderColor: ["rgba(54, 162, 235, 0.5)"],
        backgroundColor: ["rgba(54, 162, 235, 0.5)"],
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  var multiAreaOptions = {
    plugins: {
      filler: {
        propagate: true,
      },
    },
    elements: {
      point: {
        radius: 3,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
          },
        },
      ],
    },
  };

  var scatterChartData = {
    datasets: [
      {
        label: "First Dataset",
        data: [
          {
            x: -10,
            y: 0,
          },
          {
            x: 0,
            y: 3,
          },
          {
            x: -25,
            y: 5,
          },
          {
            x: 40,
            y: 5,
          },
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255,99,132,1)"],
        borderWidth: 1,
      },
      {
        label: "Second Dataset",
        data: [
          {
            x: 10,
            y: 5,
          },
          {
            x: 20,
            y: -30,
          },
          {
            x: -25,
            y: 15,
          },
          {
            x: -10,
            y: 5,
          },
        ],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var scatterChartOptions = {
    scales: {
      xAxes: [
        {
          type: "linear",
          position: "bottom",
          gridLines: {
            color: "rgba(204, 204, 204,0.1)",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgba(204, 204, 204,0.1)",
          },
        },
      ],
    },
  };
  // Get context with jQuery - using jQuery's .get() method.
  if ($("#barChart").length) {
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart = new Chart(barChartCanvas, {
      type: "bar",
      data: data,
      options: options,
    });
  }

  if ($("#lineChart").length) {
    var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas, {
      type: "line",
      data: data,
      options: options,
    });
  }

  if ($("#linechart-multi1").length) {
    var multiLineCanvas = $("#linechart-multi1").get(0).getContext("2d");
    var lineChart = new Chart(multiLineCanvas, {
      type: "line",
      data: multiLineData1,
      options: options,
    });
  }

  if ($("#linechart-multi2").length) {
    var multiLineCanvas = $("#linechart-multi2").get(0).getContext("2d");
    var lineChart = new Chart(multiLineCanvas, {
      type: "line",
      data: multiLineData2,
      options: options,
    });
  }

  if ($("#areachart-multi").length) {
    var multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
    var multiAreaChart = new Chart(multiAreaCanvas, {
      type: "line",
      data: multiAreaData,
      options: multiAreaOptions,
    });
  }

  if ($("#areachart1").length) {
    var multiAreaCanvas = $("#areachart1").get(0).getContext("2d");
    var multiAreaChart = new Chart(multiAreaCanvas, {
      type: "line",
      data: areaData1,
      options: multiAreaOptions,
    });
  }

  if ($("#areachart2").length) {
    var multiAreaCanvas = $("#areachart2").get(0).getContext("2d");
    var multiAreaChart = new Chart(multiAreaCanvas, {
      type: "line",
      data: areaData2,
      options: multiAreaOptions,
    });
  }

  if ($("#doughnutChart").length) {
    var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: "doughnut",
      data: doughnutPieData,
      options: doughnutPieOptions,
    });
  }

  if ($("#pieChart").length) {
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas, {
      type: "pie",
      data: doughnutPieData,
      options: doughnutPieOptions,
    });
  }

  if ($("#areaChart").length) {
    var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: "line",
      data: areaData,
      options: areaOptions,
    });
  }

  if ($("#scatterChart").length) {
    var scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
    var scatterChart = new Chart(scatterChartCanvas, {
      type: "scatter",
      data: scatterChartData,
      options: scatterChartOptions,
    });
  }

  if ($("#browserTrafficChart").length) {
    var doughnutChartCanvas = $("#browserTrafficChart").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: "doughnut",
      data: browserTrafficData,
      options: doughnutPieOptions,
    });
  }
});
