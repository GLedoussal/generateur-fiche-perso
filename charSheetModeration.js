$('body').ready(function() {
	$('#players').on('change', function() {
		$.get('/charsheet/playerChars/' + $(this).val(), (data) => {
			if ($(this).val() !== "null") {
				if (data.success) {
					$('#chars').empty();
					$('#chars').append($('<option>', {value: 'null', text: '-'}));
					data.result.forEach((char) => {
						if (char.active === "0") {
							$('#chars').append($('<option>', {value: char.id, text: char.name}));
						} else {
							$('#chars').append($('<option>', {value: char.id, text: '***'+char.name}));
						}
					});
				}
			}
		});
	});

	$('#chars').on('change', function() {
		if ($(this).val() !== "null") {
			const url = location.href.split('?')[0] + '/' + $(this).val();
			location.href = url;
		}
	});
});