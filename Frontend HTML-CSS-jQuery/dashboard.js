$(document).ready(function () {
    let url = 'https://localhost:7121/api/Student/';
    $.get(url, function (data) {
        //Displaying Age Chart
        let ageCounts = {};
        data.forEach(student => {
            if (ageCounts.hasOwnProperty(student.age)) {
                ageCounts[student.age]++;
            } else {
                ageCounts[student.age] = 1;
            }
        });
        createPieChart('ageChart', ageCounts);
        //Displaying Gender Chart
        let genderCounts = {};
        data.forEach(student => {
            if (genderCounts.hasOwnProperty(student.gender)) {
                genderCounts[student.gender]++;
            } else {
                genderCounts[student.gender] = 1;
            }
        });
        createBarChart('genderChart', Object.keys(genderCounts), Object.values(genderCounts));
        //Displaying Department Chart
        let departmentCounts = {};
        data.forEach(student => {

            if (departmentCounts.hasOwnProperty(student.department)) {
                departmentCounts[student.department]++;
            } else {
                departmentCounts[student.department] = 1;
            }
        });
        createPieChart('departmentChart', departmentCounts);
         //Displaying Gender Chart
         let interestCounts = {};
         let distinctInterestCounts = 0;
         data.forEach(student => {
             if (interestCounts.hasOwnProperty(student.interest)) {
                interestCounts[student.interest]++;
             } else {
                interestCounts[student.interest] = 1;
                distinctInterestCounts++;
             }
         });
         createBarChart('interestChart', Object.keys(interestCounts), Object.values(interestCounts));
         $("#distinctInterests").text('Distinct Interests: '+distinctInterestCounts)
         //Displaying Degree Chart
         let degreeCounts = {};
         data.forEach(student => {
             if (degreeCounts.hasOwnProperty(student.degree)) {
                degreeCounts[student.degree]++;
             } else {
                degreeCounts[student.degree] = 1;
             }
         });
         createPieChart('degreeChart', degreeCounts);
    });
})




// Function to generate random color
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function createPieChart(canvasId, data) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: Object.keys(data).map(randomColor) // Random colors
            }]
        },
        options: {
            responsive: true, // Enable responsiveness
            maintainAspectRatio: false, // Disable aspect ratio
        }
    });
}

// Function to create a bar chart
function createBarChart(canvasId, labels, data) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Distribution',
                data: data,
                backgroundColor: labels.map(randomColor) // Random colors
            }]
        },
        options: {
            responsive: true, // Enable responsiveness
            maintainAspectRatio: false, // Disable aspect ratio
        }
    });
}