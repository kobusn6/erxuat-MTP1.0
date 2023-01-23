	function renderBar($chartTitle,$chartSubTitle,chartSeries,chartValues)
	{
		//alert(chartSeries);//1941,1951,1981
		//alert(chartValues);//2912,127,77
		var mySeriesArray = chartSeries.split(',');
		var myValuesArray = chartValues.split(',');		
		var $data;
		var $dataArray = [];
		var x = 0;
		for (x=0; x<mySeriesArray.length; x++)
		{
			//$data = [mySeriesArray[x],parseFloat(myValuesArray[x])];
			//$dataArray[x] = $data;
			$dataArray[x] = parseFloat(myValuesArray[x]);
		}
		
		var chart;
		jQuery(document).ready(function() {
			chart = new Highcharts.Chart({
				chart: {
					renderTo: 'container',
					defaultSeriesType: 'bar'
				},
				title: {
					text: $chartTitle
				},
				subtitle: {
					text: $chartSubTitle
				},
				xAxis: {
					//categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
					categories: mySeriesArray,
					title: {
						text: null
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Totals',
						align: 'high'
					}
				},
				tooltip: {
					formatter: function() {
						return '<a href="http://www.google.co.za" target="_blank" style="font-weight:bold;">'+this.series.name +': '+ this.y +' </a>';
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
			  series: [
//			  {
//					name: 'Year 1800',
//					data: [107, 31, 635, 203, 2]
//				}, 
//				{
//					name: 'Year 1900',
//					data: [133, 156, 947, 408, 6]
//				}, 
				{
					name: $chartTitle,
					//data: [973, 914, 4054, 732, 34]
					data: $dataArray
				}
				]
				
			});
			
			
		});
		
	}