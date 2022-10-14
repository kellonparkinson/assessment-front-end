console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully.');
}

const complimentUser = () => {
	alert("You're doing a great job")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseover', complimentUser)