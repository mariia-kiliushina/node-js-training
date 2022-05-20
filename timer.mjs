import EventEmitter from "events";

class Timer extends EventEmitter {
  constructor(total, interval) {
    super();
    (this.total = total), (this.interval = interval), (this.ticks = 0);
  }

  _tick() {
    this.ticks += 1;
    if (this.ticks <= this.total) {
      this.emit("tick", this.ticks);
    } else {
      this.end();
    }
  }
  start() {
    this.intervalId = setInterval(() => this._tick(), this.interval);
    this.emit("start");
  }

  end() {
    clearInterval(this.intervalId);
    this.emit("end");
  }
}

const myTimer = new Timer(10, 1000);

myTimer.on("start", () => console.log("Started"));
myTimer.on("tick", (tick) => console.log(`One more tick: ${tick}`));
myTimer.on("end", () => console.log("Ended"));

myTimer.start();
