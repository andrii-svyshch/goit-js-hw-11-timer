import refs from "./js/refs.js";
const { daysEl, hoursEl, minsEl, secondsEl } = refs;

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate.getTime();
    this.intervalID = null;
  }
  start() {
    setInterval(() => {
      let currentDate = Date.now();
      this.deltaTime = this.targetDate - currentDate;

      this.insertData(daysEl, this.getDaysCount(this.deltaTime));
      this.insertData(hoursEl, this.getHoursCount(this.deltaTime));
      this.insertData(minsEl, this.getMinsCount(this.deltaTime));
      this.insertData(secondsEl, this.getSecondsCount(this.deltaTime));
    }, 1000);
  }

  padValue(value, num, symbol) {
    return String(value).padStart(num, symbol);
  }

  getDaysCount(time) {
    return this.padValue(Math.floor(time / (1000 * 60 * 60 * 24)), 3, "0");
  }

  getHoursCount(time) {
    return this.padValue(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      2,
      "0"
    );
  }

  getMinsCount(time) {
    return this.padValue(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      2,
      "0"
    );
  }

  getSecondsCount(time) {
    return this.padValue(Math.floor((time % (1000 * 60)) / 1000), 2, "0");
  }

  insertData(place, value) {
    place.textContent = value;
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2021"),
});

timer.start();
