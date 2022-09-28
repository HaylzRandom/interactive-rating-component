const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 3;

// Event Bubbling
ratingsContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('rating')) {
		removeActive();
		e.target.classList.add('active');
		selectedRating = e.target.innerHTML;
	}
});

sendBtn.addEventListener('click', (e) => {
	panel.innerHTML = `
	<div class="submit-container">
		<img class="img-thanks" src="./images/illustration-thank-you.svg" alt="" />
		<div class="selection">You selected ${selectedRating} out of 5</div>
		<strong>Thank you!</strong>
		<p>
			We appreciate you taking the time to give a rating. If you ever need more
			support, don't hestitate to get in touch!
		</p>
	</div>
        
    `;
});

const removeActive = () => {
	for (let i = 0; i < ratings.length; i++) {
		ratings[i].classList.remove('active');
	}
};
