import { Component } from '@angular/core';
import { TimerService } from '../services/timer/timer.service';

@Component({
  selector: 'app-timer-fab',
  templateUrl: './timer-fab.component.html',
  styleUrls: ['./timer-fab.component.scss'],
})
export class TimerFabComponent {
  Math = Math;

  constructor(public timerService: TimerService) {}

  start() {
    this.timerService.start();
  }

  stop() {
    this.timerService.stop();
  }

  public get counter(): number | null {
    return this.timerService.counter;
  }

  public set studyTime(amountInMinutes: number) {
    this.timerService.studyTime = amountInMinutes;
  }

  public set breakTime(amountInMinutes: number) {
    this.timerService.breakTime = amountInMinutes;
  }

  public get studyTime(): number {
    return this.timerService.studyTime;
  }

  public get breakTime(): number {
    return this.timerService.breakTime;
  }
}
