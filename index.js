class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
    getRefs() {
        const container = document.querySelector(this.selector);
        const daysRef = container.querySelector('[data-value="days"]');
        const hoursRef = container.querySelector('[data-value="hours"]');
        const minutesRef = container.querySelector('[data-value="mins"]');
        const secondsRef = container.querySelector('[data-value="secs"]');
        return { daysRef, hoursRef, minutesRef, secondsRef };
    }

    updateTimer({ daysRef, hoursRef, minutesRef, secondsRef }) {
        const time = this.targetDate - Date.now();
        if (time > 1000) {
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((time % (1000 * 60)) / 1000);
            daysRef.textContent = days.toString().padStart(2, "0");
            hoursRef.textContent = hours.toString().padStart(2, "0");
            minutesRef.textContent = minutes.toString().padStart(2, "0");
            secondsRef.textContent = seconds.toString().padStart(2, "0");
            return;
        }
    }
    startTimer() {
        setInterval(() => {
            this.updateTimer(this.getRefs())
        }, 1000);
    }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 31, 2021'),
});

timer.startTimer();

