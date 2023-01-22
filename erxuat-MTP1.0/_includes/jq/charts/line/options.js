	function renderLine($chartTitle,$chartSubTitle,chartSeries,chartNames,chartValues)
	{
		
//$chartSeries =  "'8,11,12,13'";
//$chartNames =  "'Male,Female'";
//$chartLineValues = "'|1,0,1,0|:|0,2,0,2|'";
		
		var mySeriesArray = chartSeries.split(',');
		var myNamesArray = chartNames.split(':');
		var myValuesArray = chartValues.split(':');		
		
		var seriesData = [];
		var seriesNameCount = myNamesArray.length;
		var seriesIndex = 0;
		for (seriesIndex=0; seriesIndex < seriesNameCount; seriesIndex++)
		{
			var name = myNamesArray[seriesIndex];
			var $dataArray = [];
			var x = 0;
			for (x=0; x<mySeriesArray.length; x++)
			{
				var valuesArray = myValuesArray[seriesIndex].split(',');
				$dataArray[x] = parseFloat(valuesArray[x]);				
			}
			
			var plot = {
					name: name,
					data: $dataArray
				}
			seriesData[seriesIndex] = plot;
		}
//		alert(seriesData.length);
//		alert(seriesData[0]['name']);
//		alert(seriesData[0]['data']);
//		alert(seriesData[1]['name']);
//		alert(seriesData[1]['data']);
		
		
		var chart;
		jQuery(document).ready(function() {
			chart = new Highcharts.Chart({
				chart: {
					renderTo: 'container',
					defaultSeriesType: 'line',
					marginRight: 130,
					marginBottom: 25
				},
				title: {
					text: $chartTitle,
					x: -20 //center
				},
				subtitle: {
					text: $chartSubTitle,
					x: -20
				},
				xAxis: {
//					categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
//						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					categories: mySeriesArray
				},
				yAxis: {
					title: {
						text: 'Age Profile'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#808080'
					}]
				},
				tooltip: {
					formatter: function() {
			                return '<a href="http://www.google.co.za" target="_blank" style="font-weight:bold;">click'+ this.series.name +'<br/>'+
							this.x +': '+ this.y +'</a>';
					}
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'top',
					x: -10,
					y: 100,
					borderWidth: 0
				},
////				series: [{
////					name: 'Tokyo',
////					data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
////				}, {
////					name: 'New York',
////					data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
////				}, {
////					name: 'Berlin',
////					data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
////				}, {
////					name: 'London',
////					data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
////				}]
//				series: [{
//					name: 'Male',
//					data: [1, 0, 1, 0]
//				}, {
//					name: 'Female',
//					data: [0, 2, 0, 2]
//				}]
				series: seriesData
			});
			
			
		});
		
	}