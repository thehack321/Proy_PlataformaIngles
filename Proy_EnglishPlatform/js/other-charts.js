/*** Gray theme for Highcharts JS - @author Torstein Hønsi ***/

Highcharts.theme = {
	colors: ["#c1d177", "#0e3d59", "#9d7cbb", "#d92525", "#d7ad63", "#ff0066", "#eeaaee", 
		"#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
	chart: {
		borderWidth: 0,
		borderRadius: 10,
		plotBackgroundColor: null,
		plotBorderWidth: 0
	},
	title: {
		style: { 
			color: '#000',
			font: '16px Arial, Helvetica, sans-serif',
		}
	},
	subtitle: {
		style: { 
			color: '#000',
			font: '12px Arial, Helvetica, sans-serif'
		}
	},
	xAxis: {
		gridLineWidth: 0,
		lineColor: '#a1adb3',
		labels: {
			style: {
				color: '#4c453d',
				fontWeight: 'normal'
			}
		},
		title: {
			style: {
				color: '#000',
				font: 'bold 12px Arial, Helvetica, sans-serif'
			}				
		}
	},
	yAxis: {
		alternateGridColor: null,
		minorTickInterval: null,
		gridLineColor: '#a1adb3',
		lineWidth: 0,
		tickWidth: 0,
		labels: {
			style: {
				color: '#4c453d',
				fontWeight: 'normal'
			}
		},
		title: {
			style: {
				color: '#000',
				font: 'bold 12px Arial, Helvetica, sans-serif'
			}				
		}
	},
	legend: {
		backgroundColor: '#4D5357',

		itemStyle: {
			color: '#8a9499'
		},
		itemHoverStyle: {
			color: '#F1F3EB'
		},
		itemHiddenStyle: {
			color: '#42474a'
		}
	},
	labels: {
		style: {
			color: '#CCC'
		}
	},
	tooltip: {
		backgroundColor: '#F1F3EB',
		borderWidth: 0,
		style: {
			color: '#4D5357'
		}
	},
	
	
	plotOptions: {
		line: {
			dataLabels: {
				color: '#CCC'
			},
			marker: {
				lineColor: '#333'
			}
		},
		spline: {
			marker: {
				lineColor: '#333'
			}
		},
		scatter: {
			marker: {
				lineColor: '#333'
			}
		},
		candlestick: {
			lineColor: 'white'
		}
	},
	
	toolbar: {
		itemStyle: {
			color: '#CCC'
		}
	},
	
	navigation: {
		buttonOptions: {
			backgroundColor: {
				linearGradient: [0, 0, 0, 20],
				stops: [
					[0.4, '#606060'],
					[0.6, '#333333']
				]
			},
			borderColor: '#000000',
			symbolStroke: '#C0C0C0',
			hoverSymbolStroke: '#FFFFFF'
		}
	},
	
	exporting: {
		buttons: {
			exportButton: {
				symbolFill: '#55BE3B'
			},
			printButton: {
				symbolFill: '#7797BE'
			}
		}
	},
	
	// scroll charts
	rangeSelector: {
		buttonTheme: {
			fill: {
				linearGradient: [0, 0, 0, 20],
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
			stroke: '#000000',
			style: {
				color: '#CCC',
				fontWeight: 'bold'
			},
			states: {
				hover: {
					fill: {
						linearGradient: [0, 0, 0, 20],
						stops: [
							[0.4, '#BBB'],
							[0.6, '#888']
						]
					},
					stroke: '#000000',
					style: {
						color: 'white'
					}
				},
				select: {
					fill: {
						linearGradient: [0, 0, 0, 20],
						stops: [
							[0.1, '#000'],
							[0.3, '#333']
						]
					},
					stroke: '#000000',
					style: {
						color: 'yellow'
					}
				}
			}					
		},
		inputStyle: {
			backgroundColor: '#333',
			color: 'silver'
		},
		labelStyle: {
			color: 'silver'
		}
	},
	
	navigator: {
		handles: {
			backgroundColor: '#666',
			borderColor: '#AAA'
		},
		outlineColor: '#CCC',
		maskFill: 'rgba(16, 16, 16, 0.5)',
		series: {
			color: '#7798BF',
			lineColor: '#A6C7ED'
		}
	},
	
	scrollbar: {
		barBackgroundColor: {
				linearGradient: [0, 0, 0, 20],
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		barBorderColor: '#CCC',
		buttonArrowColor: '#CCC',
		buttonBackgroundColor: {
				linearGradient: [0, 0, 0, 20],
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		buttonBorderColor: '#CCC',
		rifleColor: '#FFF',
		trackBackgroundColor: {
			linearGradient: [0, 0, 0, 10],
			stops: [
				[0, '#000'],
				[1, '#333']
			]
		},
		trackBorderColor: '#666'
	},
	
	// special colors for some of the demo examples
	legendBackgroundColor: 'rgba(48, 48, 48, 0.8)',
	legendBackgroundColorSolid: 'rgb(70, 70, 70)',
	dataLabelsColor: '#444',
	textColor: '#E0E0E0',
	maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

//----------------------------------------------------------

/*** First Chart ***/

	$(document).ready(function() {
		info = new Highcharts.Chart({
			chart: {
				renderTo: 'stat1',
				margin: [0, 0, 0, 0],
				backgroundColor: null,
                plotBackgroundColor: 'none',
							
			},
			
			title: {
				text: null
			},

			tooltip: {
				formatter: function() { 
					return this.point.name +': '+ this.y +' %';
						
				} 	
			},
		    series: [
				{
				borderWidth: 2,
				borderColor: '#F1F3EB',
				shadow: false,	
				type: 'pie',
				name: 'Income',
				innerSize: '50%',
				data: [
					{ name: 'Knowledge', y: 90.0, color: '#dd4a38' },
					{ name: 'rest', y: 10.0, color: '#ced2d4' }
				],
				dataLabels: {
					enabled: false,
					color: '#000000',
					connectorColor: '#000000'
				}
			}]
		});
		
	});

/*** second Chart ***/

	$(document).ready(function() {
		info = new Highcharts.Chart({
			chart: {
				renderTo: 'stat2',
				margin: [0, 0, 0, 0],
				backgroundColor: null,
                plotBackgroundColor: 'none',
							
			},
			
			title: {
				text: null
			},

			tooltip: {
				formatter: function() { 
					return this.point.name +': '+ this.y +' %';
						
				} 	
			},
		    series: [
				{
				borderWidth: 2,
				borderColor: '#F1F3EB',
				shadow: false,	
				type: 'pie',
				name: 'SiteInfo',
				innerSize: '50%',
				data: [
					{ name: 'Knowledge', y: 65.0, color: '#dd4a38' },
					{ name: 'Rest', y: 35.0, color: '#ced2d4' }
				],
				dataLabels: {
					enabled: false,
					color: '#000000',
					connectorColor: '#000000'
				}
			}]
		});
		
	});

/*** third Chart ***/

	$(document).ready(function() {
		info = new Highcharts.Chart({
			chart: {
				renderTo: 'stat3',
				margin: [0, 0, 0, 0],
				backgroundColor: null,
                plotBackgroundColor: 'none',
							
			},
			
			title: {
				text: null
			},

			tooltip: {
				formatter: function() { 
					return this.point.name +': '+ this.y +' %';
						
				} 	
			},
		    series: [
				{
				borderWidth: 2,
				borderColor: '#F1F3EB',
				shadow: false,	
				type: 'pie',
				name: 'TotalUsers',
				innerSize: '50%',
				data: [
					{ name: 'Knowledge', y: 75.0, color: '#dd4a38' },
					{ name: 'Rest', y: 25.0, color: '#ced2d4' }
				],
				dataLabels: {
					enabled: false,
					color: '#000000',
					connectorColor: '#000000'
				}
			}]
		});
		
	});
	
/*** Chart in skills.html example. ***/
