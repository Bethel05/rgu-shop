$(document).ready(function(){
	$.ajax({
		url: "http://localhost:8080/rgu-shop/admin_area/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var order_date = [];
			var due_amount = [];

			for(var i in data) {
				order_date.push(data[i].order_date);
				due_amount.push(data[i].due_amount);
			}

			var chartdata = {
				labels: order_date,
				datasets : [
					{
						label: 'Order Amount ($)',
						backgroundColor: 'rgba(200, 200, 200, 0.75)',
						borderColor: 'rgba(200, 200, 200, 0.75)',
						hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
						hoverBorderColor: 'rgba(200, 200, 200, 1)',
						data: due_amount
					}
				]
			};

			var ctx = $("#mycanvas");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata
			});
		},
		error: function(data) {
			console.log(data);
		}
	});
});