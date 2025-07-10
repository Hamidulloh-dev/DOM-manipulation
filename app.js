class Svetafor {
  constructor() {
    this.red = document.querySelector(".red");
    this.yellow = document.querySelector(".yellow");
    this.green = document.querySelector(".green");
  }

  allOff() {
    this.red.classList.remove("active");
    this.yellow.classList.remove("active");
    this.green.classList.remove("active");
  }

  start() {
    this.redLight();
  }

  redLight() {
    this.allOff();
    this.red.classList.add("active");
    setTimeout(() => this.yellowAfterGreen(), 3000);
  }

  yellowAfterGreen() {
    this.allOff();
    this.yellow.classList.add("active");
    setTimeout(() => this.greenLight(), 2000);
  }

  greenLight() {
    this.allOff();
    this.green.classList.add("active");
    setTimeout(() => this.yellowAfterRed(), 3000);
  }

  yellowAfterRed() {
    this.allOff();
    this.yellow.classList.add("active");
    setTimeout(() => this.redLight(), 2000);
  }
}

const svetafor = new Svetafor();
svetafor.start();
