alert('i get in here');
$( document ).ready(function(){
	 //localStorage.clear();
	 alert('i get in here');
	var i = Number(localStorage.getItem('task-counter')) + 1;
	//var i = 1;
	var j, k, orderList;
	var $task = $("#taskName");
	var $taskList = $("#tasks");
	alert('i get in here');
	var order = [];
	orderList = localStorage.getItem('task-orders');
	alert('i get in here');
	
	if(!orderList){
		$("#noErrors").css("display","block");
	}

	
		// Load todo list
		
		orderList = orderList ? orderList.split(',') : [];   
		for( j = 0, k = orderList.length; j < k; j++) {
			$taskList.append(
				"<li id='" + orderList[j] + "'>"
				+ "<a class='editable' data-split-theme='c'>"
				+ "<img src='t.png' alt='Task' class='ui-li-icon ui-li-thumb'>"	
				+ localStorage.getItem(orderList[j]) 
				+ "</a> <a href='#' class='close' data-icon='delete' data-theme='c'>X</a></li>"
			);
		}
	// Add Task 
	$("#Save", "#Name", "#DOB", "#Address", "#NameEmergency","#TelEmergency", "#DocName", "#DocAddress", "#Hospital", "#AddressHospital").live("tap", function() {
		if($Save.val() != ""){
			localStorage.setItem("Save-"+i, $Save.val());
			localStorage.setItem("Name-"+i, $Name.val());
			localStorage.setItem("DOB-"+i, $DOB.val());
			localStorage.setItem("Address-"+i, $Address.val());
			localStorage.setItem("NameEmergency-"+i, $NameEmergency.val());
			localStorage.setItem("TelEmergency-"+i, $TelEmergency.val());
			localStorage.setItem("DocName-"+i, $DocName.val());
			localStorage.setItem("DocAddress-"+i, $DocAddress.val());
			localStorage.setItem("Hospital-"+i, $Hospital.val());
			localStorage.setItem("AddressHospital-"+i, $AddressHospital.val());
			localStorage.setItem("Save-counter",i);
			$("#noErrors").css("display","none");
			$taskList.append(
				"<li id='task-" + i + "'>" 
				+  "<a class='editable' data-split-theme='c'>" 
				+  "<img src='t.png' alt='Task' class='ui-li-icon ui-li-thumb'>"
				+ localStorage.getItem("Save-" + i) 
				localStorage.getItem("Name-"+i, $Name.val());
			localStorage.getItem("DOB-"+i, $DOB.val());
			localStorage.getItem("Address-"+i, $Address.val());
			localStorage.getItem("NameEmergency-"+i, $NameEmergency.val());
			localStorage.getItem("TelEmergency-"+i, $TelEmergency.val());
			localStorage.getItem("DocName-"+i, $DocName.val());
			localStorage.getItem("DocAddress-"+i, $DocAddress.val());
			localStorage.getItem("Hospital-"+i, $Hospital.val());
			localStorage.getItem("AddressHospital-"+i, $AddressHospital.val());
				+ " </a><a href='#' data-icon='delete' class='close' data-theme='c'>x</a></li>"
			);
			$.mobile.changePage("#TaskView", { transition: "slidedown"});		
			listTasks();
			$task.val("");
			
			i++
		} else {
			alert("please enter a task");
		}
		return false;
	});	
	
	// Remove Task
	$("#tasks li a.close").live("tap", function() {
		//alert($(this).parent().attr("id"));
		localStorage.removeItem($(this).parent().attr("id"));
		 $(this).parent().slideUp('normal', function(){
				$(this).remove();
				listTasks();
			});
		 	
		return false;
	});
	
	function listTasks(){
		var $taskLi = $("#Save li");
		order.length = 0;
		
		$taskLi.each(function(){
			var id = $(this).attr("id");
			order.push(id);
		});
		$('ul').listview('refresh');
		localStorage.setItem("task-orders", order.join(","));	
	}	
});