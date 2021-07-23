import { Injectable } from '@angular/core';

const FIFTY_MINUTES_IN_SECS = 60 * 50;
const TEN_MINUTES_IN_SECS = 60 * 10;

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  timeout: any;
  studyTimeInSeconds: number;
  breakTimeInSeconds: number;
  isOnBreak: boolean;
  counterInSeconds?: number;

  constructor() {
    this.studyTimeInSeconds = FIFTY_MINUTES_IN_SECS; // study time is 50 minutes by default
    this.breakTimeInSeconds = TEN_MINUTES_IN_SECS; // break length 10 minutes by default
    this.isOnBreak = false;
  }

  start = () => {
    this.isOnBreak = false;
    this.timer(this.studyTimeInSeconds, 0, this.break);
  };

  private break = () => {
    this.isOnBreak = true;
    this.timer(this.breakTimeInSeconds, 0, this.start);
  };

  private timer(timeInSeconds: number, counter: number, callback: () => void) {
    this.timeout = setTimeout(() => {
      if (counter < timeInSeconds) {
        this.counterInSeconds = timeInSeconds - counter;
        this.timer(timeInSeconds, ++counter, callback);
      } else callback();
    }, 1000);
  }

  stop() {
    this.isOnBreak = false;
    this.counterInSeconds = undefined;
    clearTimeout(this.timeout);
  }

  public get counter(): number | null {
    return !!this.counterInSeconds ? this.counterInSeconds * 1000 : null;
  }

  public set studyTime(amountInMinutes: number) {
    this.studyTimeInSeconds = amountInMinutes * 60;
  }

  public set breakTime(amountInMinutes: number) {
    this.breakTimeInSeconds = amountInMinutes * 60;
  }

  public get studyTime(): number {
    return this.studyTimeInSeconds / 60;
  }

  public get breakTime(): number {
    return this.breakTimeInSeconds / 60;
  }
}
