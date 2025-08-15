const chartConfigs = [
    {
        id: 'ordersChart',
        labels: ['Completed', 'Pending', 'Cancelled'],
        data: [120, 50, 30],
        colors: ['#0d6efd', '#ffc107', '#dc3545']
    },
    {
        id: 'customersChart',
        labels: ['New', 'Returning'],
        data: [200, 80],
        colors: ['#0d6efd', '#ffc107']
    },
    {
        id: 'productsChart',
        labels: ['Product A', 'Product B', 'Product C'],
        data: [1000, 700, 300],
        colors: ['#0d6efd', '#ffc107', '#dc3545']
    },
    {
        id: 'salesChart',
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        data: [5000, 7000, 9000, 11000],
        colors: ['#0d6efd', '#ffc107', '#dc3545', '#cce6ff']
    }
];

chartConfigs.forEach(cfg => {
    new Chart(document.getElementById(cfg.id), {
        type: 'doughnut',
        data: {
            labels: cfg.labels,
            datasets: [{
                data: cfg.data,
                backgroundColor: cfg.colors,
                hoverOffset: 20
            }]
        },
        options: {
            layout: {
                padding: {
                    top: 10,
                    right: 0,
                    bottom: 5,
                    left: 0,
                }
            },
            responsive: true,
            plugins: { legend: { position: 'bottom' } }
        }
    });
});

const barConfigs = {
    ordersDetailChart: [120, 50, 30],
    customersDetailChart: [200, 80],
    productsDetailChart: [1000, 700, 300],
    salesDetailChart: [5000, 7000, 9000, 11000]
};

Object.entries(barConfigs).forEach(([id, data]) => {
    new Chart(document.getElementById(id), {
        type: 'line',
        data: {
            labels: Array.from({ length: data.length }, (_, i) => `#${i + 1}`),
            datasets: [{
                label: 'Details',
                data: data,
                backgroundColor: 'rgba(255,255,255,0.5)',
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: "#fff" },
                    grid: { color: "rgba(255,255,255,0.2)" }
                },
                x: {
                    ticks: { color: "#fff" },
                    grid: { display: false }
                }
            }
        }
    });
});

function showDetail(section) {
    const sections = ['orders', 'customers', 'products', 'sales'];
    sections.forEach(id => {
        document.getElementById(`${id}Details`).style.display = id === section ? 'block' : 'none';
    });
}

document.getElementById("sidebarToggle").onclick = () => {
    document.getElementById("sidebar").classList.toggle("closed");
    document.getElementById("content").classList.toggle("full-width");
};

document.getElementById("themeToggle").onclick = () => {
    const html = document.documentElement;
    html.setAttribute("data-theme", html.getAttribute("data-theme") === "dark" ? "light" : "dark");
};