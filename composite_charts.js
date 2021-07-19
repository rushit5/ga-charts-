looker.plugins.visualizations.add({
create: function(element, config) {
  //element.innerHTML = `
//	<style>
//	.sannith {
//	min-width: 500px;
//	height: 600px
//	}
//	</style>
//	`;
	
    var container_1 = element.appendChild(document.createElement("div"));
	container_1.className = "piechart";
    container_1.id = 'piechart_div';
	container_1.style = 'border: none';
	
	
	
    var container_2 = element.appendChild(document.createElement("div"));
	container_2.className = "barchart";
    container_2.id = 'barchart_div';
	container_2.style = 'border: none';
		
  },

updateAsync: function(data, element, config, queryResponse, details, doneRendering) {
// Clear any errors from previous updates:
this.clearErrors();

// Dump data and metadata to console:
console.log('updateAsync() data', data)
console.log('updateAsync() config', config)
console.log('updateAsync() queryResponse', queryResponse)
	
// get the names of the first dimension and measure available in data
// Data retrival and formatting starts here *********************************************************************************
//x  = config.query_fields.dimensions[0].name;
//y  = config.query_fields.dimensions[1].name;
//z  = config.query_fields.dimensions[2].name;
//a  = config.query_fields.dimensions[3].name;
//b  = config.query_fields.dimensions[4].name;     
//c  = config.query_fields.dimensions[5].name;     
//d  = config.query_fields.dimensions[6].name;     
//e  = config.query_fields.dimensions[7].name;     
//f  = config.query_fields.dimensions[8].name;     
//g  = config.query_fields.dimensions[9].name;     
//h  = config.query_fields.dimensions[10].name;     


//var plot_data = [];

//for(var row of data) {
//	var cell = row[queryResponse.fields.dimensions[0].name]
//	plot_data.push([ 
 //          row[x].value,
//		   row[y].value,
//	       row[z].value,
//		   row[a].value,
//		   row[b].value,
//		   row[c].value,
//		   row[d].value,
//		   row[e].value,
//		   row[f].value,
//		   row[g].value,
//		   row[h].value
//	]);}
	
// Data retrival and formatting ends here *********************************************************************************
//console.log('Color', plot_data)	
// here google chart code starts *************************************************************************************
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

     function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);

        var piechart_options = {title:'Pie Chart: How Much Pizza I Ate Last Night',
                       width:400,
                       height:300};
        var piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
        piechart.draw(data, piechart_options);

        var barchart_options = {title:'Barchart: How Much Pizza I Ate Last Night',
                       width:400,
                       height:300,
                       legend: 'none'};
        var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
        barchart.draw(data, barchart_options);
      }
// here google chart code ends **********************************************************************************************
doneRendering();
}
})
