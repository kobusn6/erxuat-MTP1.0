
$(function () {


    });
    
    
function renderBar($chartTitle,$chartSubTitle,$xDesc,$yDesc,$chartSeries,$chartValues,$legend){

	$('#graph_outer').show();
	
		var mySeriesArray = $chartSeries.split(',');
		var myValuesArray = $chartValues.split(';');
		var myValuesArray2;
		var myLegendArray = $legend.split(',');
		var $data;
		var $dataArray = [[]];
		var $dataArray2 = [];
		var tmpTot = 0;
		var tmpVal = 0;
		var x = 0;
		for (x=0; x<myValuesArray.length; x++)
		{			
			myValuesArray2 = myValuesArray[x].split(',');
			$dataArray[x] = [];
			$dataArray2 = [];
			for (y=0; y<myValuesArray2.length; y++)
			{				
				$dataArray2.push(parseFloat(myValuesArray2[y]));
				$dataArray[x].push(parseFloat(myValuesArray2[y]));
			}			
			
		}		
		
		var $seriesArray = [];
		for (x=0; x<myValuesArray.length; x++)
		{
			var $valuesArray = [];
			for (y=0; y<myValuesArray2.length; y++)
			{
				$valuesArray.push(
	     	       				$dataArray[x][y]			
	     	       			);
			}
			$seriesArray.push({
	            name: myLegendArray[x],
	            data: $valuesArray
	        });
	        
	  }

    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: $chartTitle
        },
        subtitle: {
            text: $chartSubTitle
        },
        xAxis: {
            categories: mySeriesArray,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: $xDesc,
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' calls'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 10,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
//        series: [{
//            name: myLegendArray[0],
//            data: $valuesArray
//        }, {
//            name: myLegendArray[1],
//            data: [
//            				$dataArray[1][0], 
//            				$dataArray[1][1], 
//            				$dataArray[1][2] 
//            ]
//        }]
//				series: [{
//						name:"Target", 
//						data:[1, 11, 111]
//				}, {
//						name:" Actual", 
//						data:[2, 22, 222]
//				}]
        series: $seriesArray
    });	
}

function renderBarStack($chartTitle,$chartSubTitle,$xDesc,$yDesc,$chartSeries,$chartValues,$legend){

	$('#graph_outer').show();
	

		var mySeriesArray = $chartSeries.split(',');
		var myValuesArray = $chartValues.split(';');
		var myValuesArray2;
		var myLegendArray = $legend.split(',');
		var $data;
		var $dataArray = [[]];
		var $dataArray2 = [];
		var tmpTot = 0;
		var tmpVal = 0;
		var x = 0;
		for (x=0; x<myValuesArray.length; x++)
		{			
			myValuesArray2 = myValuesArray[x].split(',');
			$dataArray[x] = [];
			$dataArray2 = [];
			for (y=0; y<myValuesArray2.length; y++)
			{				
				$dataArray2.push(parseFloat(myValuesArray2[y]));
				$dataArray[x].push(parseFloat(myValuesArray2[y]));
			}			
			
		}		
		
		var $seriesArray = [];
		for (x=0; x<myValuesArray.length; x++)
		{
			var $valuesArray = [];
			for (y=0; y<myValuesArray2.length; y++)
			{
				$valuesArray.push(
	     	       				$dataArray[x][y]			
	     	       			);
			}
			$seriesArray.push({
	            name: myLegendArray[x],
	            data: $valuesArray
	        });
	        
	  }

    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: $chartTitle
        },
        subtitle: {
            text: $chartSubTitle
        },
        xAxis: {
            categories: mySeriesArray,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: $xDesc,
                align: 'high'
            }
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        legend: {
            backgroundColor: '#FFFFFF',
            reversed: true
        },
        credits: {
            enabled: false
        },
        series: $seriesArray
    });	
}

function renderBarColumn($chartTitle,$chartSubTitle,$xDesc,$yDesc,$chartSeries,$chartValues,$legend){

	$('#graph_outer').show();
	

		var mySeriesArray = $chartSeries.split(',');
		var myValuesArray = $chartValues.split(';');
		var myValuesArray2;
		var myLegendArray = $legend.split(',');
		var $data;
		var $dataArray = [[]];
		var $dataArray2 = [];
		var tmpTot = 0;
		var tmpVal = 0;
		var x = 0;
		for (x=0; x<myValuesArray.length; x++)
		{			
			myValuesArray2 = myValuesArray[x].split(',');
			$dataArray[x] = [];
			$dataArray2 = [];
			for (y=0; y<myValuesArray2.length; y++)
			{				
				$dataArray2.push(parseFloat(myValuesArray2[y]));
				$dataArray[x].push(parseFloat(myValuesArray2[y]));
			}			
			
		}		
		
		var $seriesArray = [];
		for (x=0; x<myValuesArray.length; x++)
		{
			var $valuesArray = [];
			for (y=0; y<myValuesArray2.length; y++)
			{
				$valuesArray.push(
	     	       				$dataArray[x][y]			
	     	       			);
			}
			$seriesArray.push({
	            name: myLegendArray[x],
	            data: $valuesArray
	        });
	        
	  }

    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: $chartTitle
        },
        subtitle: {
            text: $chartSubTitle
        },
        xAxis: {
            categories: mySeriesArray
        },
        yAxis: {
            min: 0,
            title: {
                text: $xDesc
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        legend: {
            backgroundColor: '#FFFFFF',
            reversed: true
        },
        credits: {
            enabled: true
        },
        series: $seriesArray
    });	
}


function renderBarColumnStack($chartTitle,$chartSubTitle,$xDesc,$yDesc,$chartSeries,$chartValues,$legend){

	$('#graph_outer').show();
	

		var mySeriesArray = $chartSeries.split(',');
		var myValuesArray = $chartValues.split(';');
		var myValuesArray2;
		var myLegendArray = $legend.split(',');
		var $data;
		var $dataArray = [[]];
		var $dataArray2 = [];
		var tmpTot = 0;
		var tmpVal = 0;
		var x = 0;
		for (x=0; x<myValuesArray.length; x++)
		{			
			myValuesArray2 = myValuesArray[x].split(',');
			$dataArray[x] = [];
			$dataArray2 = [];
			for (y=0; y<myValuesArray2.length; y++)
			{				
				$dataArray2.push(parseFloat(myValuesArray2[y]));
				$dataArray[x].push(parseFloat(myValuesArray2[y]));
			}			
			
		}		
		
		var $seriesArray = [];
		for (x=0; x<myValuesArray.length; x++)
		{
			var $valuesArray = [];
			for (y=0; y<myValuesArray2.length; y++)
			{
				$valuesArray.push(
	     	       				$dataArray[x][y]			
	     	       			);
			}
			$seriesArray.push({
	            name: myLegendArray[x],
	            data: $valuesArray
	        });
	        
	  }


    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: $chartTitle
        },
        subtitle: {
            text: $chartSubTitle
        },
        xAxis: {
            categories: mySeriesArray,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: $xDesc,
                align: 'high'
            },
		        stackLabels: {
		            enabled: true,
		            style: {
		                fontWeight: 'bold',
		                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
		            }
		        }
	      },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black, 0 0 3px black'
                    }
                }
            }
        },
        legend: {
            align: 'right',
            x: -70,
            verticalAlign: 'top',
            y: 20,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.x +'</b><br/>'+
                    this.series.name +': '+ this.y +'<br/>'+
                    'Total: '+ this.point.stackTotal;
            }
        },
        credits: {
            enabled: false
        },
        series: $seriesArray
    });	
}

//function renderSplineLive($chartTitle,$chartSubTitle,$xDesc,$yDesc,$chartSeries,$chartValues,$legend){
//
//	$('#graph_outer').show();
//		
//		var mySeriesArray = $chartSeries.split(',');
//		var myValuesArray = $chartValues.split(';');
//		var myValuesArray2;
//		var myLegendArray = $legend.split(',');
//		var $data;
//		var $dataArray = [[]];
//		var $dataArray2 = [];
//		var x = 0;
//		for (x=0; x<myValuesArray.length; x++)
//		{			
//			myValuesArray2 = myValuesArray[x].split(',');
//			$dataArray[x] = [];
//			$dataArray2 = [];
//			for (y=0; y<myValuesArray2.length; y++)
//			{				
//				$dataArray2.push(parseFloat(myValuesArray2[y]));
//				$dataArray[x].push(parseFloat(myValuesArray2[y]));
//			}			
//			
//		}
//
//    $('#container').highcharts({
//        chart: {
//            type: 'spline',
//            animation: Highcharts.svg, // don't animate in old IE
//            marginRight: 10,
//            events: {
//                load: function() {
//
//                    // set up the updating of the chart each second
//                    var series = this.series[0];
//                    setInterval(function() {
//                        var x = (new Date()).getTime(), // current time
//                            y = Math.random();
//                        series.addPoint([x, y], true, true);
//                    }, 1000);
//                }
//            }
//        },
//        title: {
//            text: $chartTitle
//        },
//        subtitle: {
//            text: $chartSubTitle
//        },
////        xAxis: {
////            categories: mySeriesArray,
////            title: {
////                text: null
////            }
////        },
//        xAxis: {
//            type: 'datetime',
//            tickPixelInterval: 150
//        },
//        yAxis: {
//            title: {
//                text: $xDesc
//            },
//            plotLines: [{
//                value: 0,
//                width: 1,
//                color: '#808080'
//            }]
//        },
//        plotOptions: {
//            column: {
//                stacking: 'normal',
//                dataLabels: {
//                    enabled: true,
//                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
//                    style: {
//                        textShadow: '0 0 3px black, 0 0 3px black'
//                    }
//                }
//            }
//        },
//        legend: {
//            enabled: false
//        },
//        exporting: {
//            enabled: false
//        },
//        tooltip: {
//            formatter: function() {
//                    return '<b>'+ this.series.name +'</b><br/>'+
//                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
//                    Highcharts.numberFormat(this.y, 2);
//            }
//        },
//        credits: {
//            enabled: false
//        },
//        series: [{
//            name: myLegendArray[0],
//            data: [
//            				$dataArray[0][0], 
//            				$dataArray[0][1], 
//            				$dataArray[0][2], 
//            				$dataArray[0][3], 
//            				$dataArray[0][4]			
//            ]
//        }, {
//            name: myLegendArray[1],
//            data: [
//            				$dataArray[1][0], 
//            				$dataArray[1][1], 
//            				$dataArray[1][2], 
//            				$dataArray[1][3], 
//            				$dataArray[1][4] 
//            ]
//        }, {
//            name: myLegendArray[2],
//            data: [
//            				$dataArray[2][0], 
//            				$dataArray[2][1], 
//            				$dataArray[2][2], 
//            				$dataArray[2][3], 
//            				$dataArray[2][4] 
//            ]
//        }]
//    });	
//}

function renderPie($chartTitle,$chartSubTitle,$xDesc,$yDesc,$chartSeries,$chartValues,$legend){

	$('#graph_outer').show();
		
//		var mySeriesArray = $chartSeries.split(',');
//		var myValuesArray = $chartValues.split(';');
//		var myValuesArray2;
//		var myLegendArray = $legend.split(',');
//		var $data;
//		var $dataArray = [[]];
//		var $dataArray2 = [];
//		var x = 0;
//		for (x=0; x<myValuesArray.length; x++)
//		{			
//			myValuesArray2 = myValuesArray[x].split(',');
//			$dataArray[x] = [];
//			$dataArray2 = [];
//			for (y=0; y<myValuesArray2.length; y++)
//			{				
//				$dataArray2.push(parseFloat(myValuesArray2[y]));
//				$dataArray[x].push(parseFloat(myValuesArray2[y]));
//			}			
//			
//		}

//		var mySeriesArray = $chartSeries.split(',');
//		var myValuesArray = $chartValues.split(';');
//		var myValuesArray2;
//		var myLegendArray = $legend.split(',');
//		var $data;
//		//var $dataArray = [[]];
//		var $dataArray = [];
//		var $dataArray2 = [];
//		var tmpTot = 0;
//		var tmpVal = 0;
//		var x = 0;
//		for (x=0; x<mySeriesArray.length; x++)
//		{
//			tmpVal = parseFloat(myValuesArray[x]);
//			$data = [mySeriesArray[x],tmpVal];
//			$dataArray[x] = $data;
//		}
		
		
		
		var mySeriesArray = $chartSeries.split(',');
		var myValuesArray = $chartValues.split(';');
		var myValuesArray2;
		var myLegendArray = $legend.split(',');
		var $data;
		var $dataArray = [[]];
		var $dataArray2 = [];
		var tmpTot = 0;
		var tmpVal = 0;
		var x = 0;
		for (x=0; x<myValuesArray.length; x++)
		{			
			myValuesArray2 = myValuesArray[x].split(',');
			$dataArray[x] = [];
			$dataArray2 = [];
			for (y=0; y<myValuesArray2.length; y++)
			{				
				$dataArray2.push(parseFloat(myValuesArray2[y]));
				$dataArray[x].push(parseFloat(myValuesArray2[y]));
			}			
			
		}			
		
		var $seriesArray = [];
		for (x=0; x<myValuesArray.length; x++)
		{
			var $valuesArray = [];
			for (y=0; y<myValuesArray2.length; y++)
			{
				$valuesArray.push(
	     	       				$dataArray[x][y]			
	     	       			);
			}
			$seriesArray.push({
							type: 'pie',
	            name: myLegendArray[x],
	            data: $valuesArray
	        });
	        
	  }		
		
//    // Radialize the colors
//		Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function(color) {
//		    return {
//		        radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
//		        stops: [
//		            [0, color],
//		            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
//		        ]
//		    };
//		});

    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: $chartTitle
        },
        subtitle: {
            text: $chartSubTitle
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    formatter: function() {
                        return '<b>'+ this.point.name +'</b>: '+ Math.round(this.percentage) +' %';
                    }
                }
            }
        },
//        legend: {
//            layout: 'vertical',
//            align: 'right',
//            verticalAlign: 'top',
//            x: -40,
//            y: 100,
//            floating: true,
//            borderWidth: 1,
//            backgroundColor: '#FFFFFF',
//            shadow: true
//        },
//        series: [{
//        		type: 'pie',
//            name: myLegendArray[0],
//            data: [
//            				$dataArray[0][0], 
//            				$dataArray[0][1], 
//            				$dataArray[0][2], 
//            				$dataArray[0][3], 
//            				$dataArray[0][4]			
//            ]
//        }, {
//        		type: 'pie',
//            name: myLegendArray[1],
//            data: [
//            				$dataArray[1][0], 
//            				$dataArray[1][1], 
//            				$dataArray[1][2], 
//            				$dataArray[1][3], 
//            				$dataArray[1][4] 
//            ]
//        }, {
//        		type: 'pie',
//            name: myLegendArray[2],
//            data: [973, 914, 454, 732, 34]
//        }]
//            series: [{
//                type: 'pie',
//                name: $xDesc,
////                data: [
////                    [mySeriesArray[0],   ($dataArray[0][0]+$dataArray[1][0]+$dataArray[2][0])],
////                    [mySeriesArray[1],   ($dataArray[0][1]+$dataArray[1][1]+$dataArray[2][1])],
//////                    {
//////                        name: 'Chrome',
//////                        y: 12.8,
//////                        sliced: true,
//////                        selected: true
//////                    },
////                    [mySeriesArray[2],    ($dataArray[0][2]+$dataArray[1][2]+$dataArray[2][2])],
////                    [mySeriesArray[3],    ($dataArray[0][3]+$dataArray[1][3]+$dataArray[2][3])],
////                    [mySeriesArray[4],    ($dataArray[0][4]+$dataArray[1][4]+$dataArray[2][4])]
////                ]
//							data: $dataArray
//            }]  
				series: $seriesArray      
    });	
}