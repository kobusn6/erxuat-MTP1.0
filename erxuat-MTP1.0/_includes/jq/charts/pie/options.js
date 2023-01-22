	function renderPie($chartTitle,$chartSubTitle,chartSeries,chartValues)
	{
		var mySeriesArray = chartSeries.split(',');
		var myValuesArray = chartValues.split(',');		
		var $data;
		var $dataArray = [];
		var tmpTot = 0;
		var tmpVal = 0;
		var x = 0;
		
		for (x=0; x<mySeriesArray.length; x++)
		{
			tmpVal = parseFloat(myValuesArray[x]);
			$data = [mySeriesArray[x],tmpVal];
			$dataArray[x] = $data;
		}
		
		var chart;
		jQuery(document).ready(function() {
			chart = new Highcharts.Chart({
				chart: {
					renderTo: 'container',
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
					formatter: function() {
						//return '<a href="http://www.universal.co.za" target="_blank">click<b>'+ this.point.name +'</b>: '+ Math.round(this.percentage) +' %</a>';
						var rTooltip = '<a href="http://www.google.co.za" target="_blank" style="font-weight:bold;">'+ this.point.name +': '+ Math.round(this.percentage) +' %</a>';
						return rTooltip;
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
								//return '<a href="http://www.universal.co.za" target="_blank"><b>'+ this.point.name +'</b>: '+ Math.round(this.percentage) +' %</a>';
								var rFormatter = '<a href="http://www.google.co.za" target="_blank" style="font-weight:bold;">'+ this.point.name +': '+ Math.round(this.percentage) +' %</a>';
								return rFormatter;
							}
						}
					}
				},
				

			    series: [{
					type: 'pie',
					name: 'Browser share',
//					data: [
//						['Firefox',   45.0],
//						['IE',       26.8],
//						{
//							name: 'Chrome',    
//							y: 12.8,
//							sliced: true,
//							selected: true
//						},
//						['Safari',    8.5],
//						['Opera',     0.7],
//						['Others',   6.2]
//					]
					data: $dataArray
					
				}]
			});
		});
		
	}