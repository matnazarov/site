function playGuess() {
    var answer = parseInt(Math.random() * 100);
	while (true) {
		var userAnswer = prompt("Введите число от 0 до 100, для выхода введите q");
		if (userAnswer == "q") {
			break;
		}
		userAnswer = parseInt(userAnswer);
		if (userAnswer > answer) {
			alert("Ваш ответ слишком большой");
		} else if (userAnswer < answer) {
			alert("Ваш ответ слишком маленький");
		} else if (userAnswer == answer) {
			alert("Вы угадали!");
			break;
		} else {
			alert("Необходимо ввести число!");
		}
	}
}

