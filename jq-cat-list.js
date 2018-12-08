$(document).ready(function() {

function addNewList() {
	$('#of10').css('visibility', 'hidden');
	$('body').append('<ul id="ulId"></ul>');
	$('#ulId').sortable();
	$('#text').click(function() {
		$('#buttonPlus').attr('disabled', false);
		$('#text').val('');
	});
	$('#buttonPlus').attr('disabled', true);
	$('#buttonPlus').click(function newLine() {
		if ($('#text').val() !== '') {
			let listLength = $('li').length;
			if (listLength < 10) {
				$('ul').append(
					'<li class="liClass"><input type="checkbox" class="checkboxLi" value = "Add new action"/>' +
					$('#text').val() + '<button class="buttonDeleteClass"></button></li>');
				$('#text').val('Add new action');
				$('#buttonPlus').attr('disabled', true);
				$('.buttonDeleteClass').click(function() {
					$(this).parent().remove();
					$('#of10').css('visibility', 'hidden');
				});
			} else {
				$('#of10').css('visibility', 'visible');
				$('#text').val('Add new action');
				$('#buttonPlus').attr('disabled', true);
			}
		} else {
			$('#buttonPlus').attr('disabled', false);
			$('#text').val('Add new action');
		}
	});
}
addNewList();


	
});