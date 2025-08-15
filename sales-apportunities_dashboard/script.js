 // Semi-donut Value of Opps
  // Plugin to add shadow to arcs
  const arcShadowPlugin = {
    id: 'arcShadow',
    beforeDatasetDraw(chart, args, options) {
      const ctx = chart.ctx;
      ctx.save();
      ctx.shadowColor = 'rgba(87, 87, 87, 0.3)'; // Shadow color
      ctx.shadowBlur = 2;                   // Blur radius
      ctx.shadowOffsetX = 0;                 // X offset
      ctx.shadowOffsetY = 6;                 // Y offset
    },
    afterDatasetDraw(chart, args, options) {
      chart.ctx.restore();
    }
  };

  // Register the plugin
  Chart.register(arcShadowPlugin);

  // Your doughnut chart with shadow
  new Chart(document.getElementById("valueChart"), {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [1540, 260],
        borderRadius: 4,
        // backgroundColor: ['green', 'white'],
        backgroundColor: ['#FFA726', '#2e3e5c'],
        borderWidth: 0
      }]
    },
    options: {
      cutout: '85%',
      rotation: -135,
      circumference: 270,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      }
    },
    plugins: ['arcShadow'] // ✅ apply the plugin
  });


    // Semi-donut Opp Accepted
    new Chart(document.getElementById("acceptChart"), {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [1310, 190],
          backgroundColor: ['#00e676', '#2e3e5c'],
          // backgroundColor: ['red', '#fff'],
          borderRadius: 4,
          borderWidth: 0
        }]
      },
      options: {
        cutout: '85%',
        rotation: -135,
        circumference: 270,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        }
      }
    });