        var score = 0;
        function askQuestion(textBoxId, answer) {
            var userAnswer = document.getElementById(textBoxId).value;
            userAnswer = userAnswer.toLowerCase();
            if (userAnswer == answer) {
                score++;
            }
            document.getElementById(textBoxId).value = '';
        }
        function playPuzzle() {
            askQuestion('userAnswer1', 'елка');
            askQuestion('userAnswer2', 'капуста');
            askQuestion('userAnswer3', 'троллейбус');
            askQuestion('userAnswer4', 'нос');
            document.getElementById('result').innerHTML = '<b class="result">Вы угадали ' + score + ' загадок</b>';
            score = 0;
        }

