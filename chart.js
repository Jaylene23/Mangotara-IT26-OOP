
const data = {
    labels: [
        'Purple',
        'Red',
        'Yellow',
        'Pink',
        'Orange'

    ],
    datasets: [{
        label: 'My First Dataset',
        data: [100, 50, 80, 10, 40],
        backgroundColor: [ 
        'Purple',
        'Red',
        'Yellow',
        'Pink',
        'Orange'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
};

const ctx = document.getElementById('myDoughnutChart').getContext('2d');
const myDoughnutChart = new Chart(ctx, config);

       