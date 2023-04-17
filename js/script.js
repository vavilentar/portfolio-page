const infoBoxes = document.querySelectorAll('.info-block');
window.addEventListener('scroll', checkBoxes);
const feedbackForm = document.getElementById('contacts__form');

function checkBoxes() {
	const triggerBottom = window.innerHeight / 5 * 4;

	infoBoxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;

		if (boxTop < triggerBottom) {
			box.classList.add('box-show');

		} 
		
	});
}

$('form').submit(function(e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "../mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");


		$('form').trigger('reset');
		feedbackForm.innerHTML = `<h2 style="font-size: 26px;">Спасибо за заявку! Я обазательно с Вами свяжусь!</h2>`
	});

	return false;
});