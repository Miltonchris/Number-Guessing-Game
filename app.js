let min = 1, 
	max = 10,
	winningNum = 3,
	guessLeft = 3;

const game = document.querySelector('#game'),
	  minNum = document.querySelector('.min-num'),
	  maxNum = document.querySelector('.max-num'),
	  input = document.querySelector('#guess-input'),
	  button = document.querySelector('#guess-btn'),
	  message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

button.addEventListener('click', function(){

	let guess = parseInt(input.value);
	// console.log(guess);

	if(isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please eneter a value between ${min} and ${max}` , 'red');
	}

	if(guess === winningNum) {
		input.style.borderColor = 'green';
		input.disabled = true;
		setMessage(`You won! the number is ${winningNum}`, 'green');
	} else {
		guessLeft -= 1;

		if(guessLeft === 0) {
			input.style.borderColor = 'red';
			input.disabled = true;
			setMessage(`You Lost you have ${guessLeft} left the correct number is: ${winningNum}`, 'red');
		} else {
			input.value = '';
			input.style.borderColor = 'red';
			setMessage(`${guess} is wrong you have ${guessLeft} left`, 'red');
		}
	}
});

var setMessage = function(msg, color) {
	message.style.color = color;
	message.textContent = msg;
};
