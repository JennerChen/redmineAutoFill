// Listen for messages
// chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
// 	// If the received message has the expected format...
// 	if (msg.text === 'report_back') {
// 		// Call the specified callback, passing
// 		// the web-page's DOM content as argument
// 		sendResponse(document.all[0].outerHTML);
// 	}
// });
var icons = document.querySelectorAll('a.icon.icon-edit');
for(var i=0; i<icons.length ; i++){
	icons[i].addEventListener('click',autoFillForm)
}
function autoFillForm(){
	var currentTime = new Date();
	document.getElementById('issue_status_id').value = 3;
	document.getElementById('issue_assigned_to_id').value = 34;
	document.getElementById('issue_custom_field_values_1').value = 34;
	document.getElementById('issue_done_ratio').value = 100;

	document.getElementById('issue_custom_field_values_2').value = currentTime.getFullYear() + "-" + (currentTime.getMonth() >=9 ? (currentTime.getMonth() + 1) : ("0" + (currentTime.getMonth()+1))) + "-" + currentTime.getDate();

	document.getElementById('time_entry_hours').value = 1;
	document.getElementById('time_entry_activity_id').value = 9;

	document.getElementById('issue_notes').value = "[问题原因]:\n[修改方案]:\n[涉及文件]:\n[修改版本]:";
}
