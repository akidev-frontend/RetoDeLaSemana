        let timer;
        let seconds = 0;

        function updateTimerDisplay() {
            let minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
            let secs = (seconds % 60).toString().padStart(2, '0');
            document.getElementById('timer').innerText = `${minutes}:${secs}`;
        }

        function startTimer() {
            if (!timer) {
                timer = setInterval(() => {
                    seconds++;
                    updateTimerDisplay();
                }, 1000);
            }
        }

        function stopTimer() {
            clearInterval(timer);
            timer = null;
        }

        function resetTimer() {
            stopTimer();
            seconds = 0;
            updateTimerDisplay();
        }