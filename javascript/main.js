// start of waypoint sticky

let $waypointsticky =$('.js-waypoint')

$waypointsticky.waypoint(function(){
    console.log('.js-waypoint');
});

let $headerwrap = $('.headerwrap')
let $headerwrap2 = $('.headerwrap2')
let $showafter=$('.showafterthis')


$('.showafterthis').waypoint(function() {
  if ($(".headerwrap2").is(":hidden")) {
    $(".headerwrap2").slideDown(100);
  } 
  else {
        $(".headerwrap2").slideUp(100);
    }
});



// Start of Pie Chart JS

var ctx = document.getElementById("myChart");
Chart.defaults.global.tooltips.enabled = false;

var pieChartCanvas = $('#myChart');
var allBox = $(".box-container .box");

pieChartCanvas.mouseleave(hideAll)

function hideAll() {
    allBox.addClass("hide");
}

Chart.defaults.global.hover.onHover = function(x) {
    console.log(x)
    var i = x[0]._index;

    var DA = $(".dicking-around-color");
    var MS = $(".makingshit-color");


    function showDA() {
        DA.removeClass("hide")
    };

    function hideDA() {
        allBox.addClass("hide")
    };

    if (i === 0) {
        showDA();
    } else {
        DA.addClass("hide")
    }

    function showMS() {
        MS.removeClass("hide");
    };
    if (i === 1) {
        showMS();
    } else {
        MS.addClass("hide")
    }



};

var data = {
    datasets: [{
        data: [95, 1],
        backgroundColor: [
            "#E986E6",
            "#000"
        ],
        borderColor: [
            'rgba(255,99,132,0)',
            'rgba(54, 162, 235, 0)'
        ],
        hover: []

    }]
};
var options = {
    toolTip: {

    },

};



var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});


// Start of LineChart

var ctx = document.getElementById("myLineChart");

Chart.defaults.global.tooltips.enabled = false;

var data = {


    labels: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5],
    datasets: [{
        label: "A Regular Day",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(208,2,27,0.4)",
        borderColor: "rgba(208,2,27,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(208,2,27,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, -2, 3, -8, 10, -1, 10, 8, -4, 2, -8, -9, 5, 10, 8, 8, 8, 8, 9, 10, 0, 0, 0, 0, 0],
        spanGaps: false,
    }]
};

var options = {

    labels: {
        display: false
    },

    legend: {
        display: false
    },

    scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            display: false

        }],
        yAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            display: false

        }],
    }




};

var myLineChart = new Chart(ctx, {

    type: 'line',
    data: data,
    options: options,


});


// End of LineChart

// // Here begins LEON GERSON's time slider example

function removeStack() {
    $('.stack.show').last().addClass('hide').removeClass('show');
    console.log('remove');
}

 function addStack() {
    $('.stack.hide').first().addClass('show').removeClass('hide');
    console.log('add');
}

var slider = document.getElementById('slider');
 

noUiSlider.create(slider, {
    start: [0],
    step: 1,
    range: {
        'min': [0],
        'max': [18],
    }
});

var rangeSliderValueElement = document.getElementById('slider-range-value');


var curVal;

slider.noUiSlider.on('update', function(values, handle) {
    var newVal = values[handle];

    if (curVal === undefined) {
        // console.log('undefined');
        curVal = 0;
    }

    if (curVal < newVal) {
        console.log('right-1', curVal, newVal);
        curVal = values[handle];
        console.log('right-2', curVal, newVal);
        removeStack();

    }
    else if (curVal > newVal) {
        console.log('left-1', curVal, newVal);
        curVal = values[handle];
        console.log('left-2', curVal, newVal);
        addStack();

    }

});