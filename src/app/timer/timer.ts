import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer {
  
    timeLeft: number = 60;
  interval: any;

  startTimer() {
    // Prevent multiple timers from running at once
    if (this.interval) {
      clearInterval(this.interval);
    }
    
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer();
      }
    }, 1000);
  }
  
   pauseTimer() {
    clearInterval(this.interval);
  }

}
