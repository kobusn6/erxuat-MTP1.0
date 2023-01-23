function renderChart($whichType,$chartTitle)
{
	var chart;
	
	jQuery(document).ready(function() 
	{
		chart = new Highcharts.Chart(
		{
			if ($whichType=='pie')
			{
				chart: {
					renderTo: 'container',
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false
				},
				title: {
					text: $chartTitle
				},
				tooltip: {
					formatter: function() {
						return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
					}
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: true,
							color: Highcharts.theme.textColor || '#000000',
							connectorColor: Highcharts.theme.textColor || '#000000',
							formatter: function() {
								return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
							}
						}
					}
				},
			    series: [{
					type: 'pie',
					name: 'Browser share',
					data: [
						['Firefox',   45.0],
						['IE',       26.8],
						{
							name: 'Chrome',    
							y: 12.8,
							sliced: true,
							selected: true
						},
						['Safari',    8.5],
						['Opera',     0.7],
						['Others',   6.2]
					]
				}]
			}
			else if ($whichType=='bar')
			{
				chart: {
					renderTo: 'container',
					defaultSeriesType: 'bar'
				},
				title: {
					text: $chartTitle
				},
				subtitle: {
					text: 'Source: Wikipedia.org'
				},
				xAxis: {
					categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
					title: {
						text: null
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Population (millions)',
						align: 'high'
					}
				},
				tooltip: {
					formatter: function() {
						return ''+
							 this.series.name +': '+ this.y +' millions';
					}
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
					x: -100,
					y: 100,
					floating: true,
					borderWidth: 1,
					backgroundColor: Highcharts.theme.legendBackgroundColor || '#FFFFFF',
					shadow: true
				},
				credits: {
					enabled: false
				},
			        series: [{
					name: 'Year 1800',
					data: [107, 31, 635, 203, 2]
				}, {
					name: 'Year 1900',
					data: [133, 156, 947, 408, 6]
				}, {
					name: 'Year 2008',
					data: [973, 914, 4054, 732, 34]
				}]
				
			}
			else if ($whichType=='line')
			{
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
					text: 'Source: WorldClimate.com',
					x: -20
				},
				xAxis: {
					categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
				},
				yAxis: {
					title: {
						text: 'Temperature (°C)'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#808080'
					}]
				},
				tooltip: {
					formatter: function() {
			                return '<b>'+ this.series.name +'</b><br/>'+
							this.x +': '+ this.y +'°C';
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
				series: [{
					name: 'Tokyo',
					data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
				}, {
					name: 'New York',
					data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
				}, {
					name: 'Berlin',
					data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
				}, {
					name: 'London',
					data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
				}]
				
			}
			
		});	
				
	});
}