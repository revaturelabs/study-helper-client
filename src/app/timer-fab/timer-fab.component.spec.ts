// import 'zone.js/dist/zone-testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { TimerFabComponent } from './timer-fab.component';

fdescribe('TimerFabComponent', () => {
  let component: TimerFabComponent;
  let fixture: ComponentFixture<TimerFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerFabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sets study and break lengths to 50 and 10 minutes, respectively, by default', fakeAsync(() => {
    component.start();
    expect(component.timerService.isOnBreak).toBeFalse();
    tick(1000 * 60 * 50 + 6000); // fifty minutes and one second
    expect(component.timerService.isOnBreak).toBeTrue();
    tick(1000 * 60 * 10 + 6000); // ten minutes and one second
    expect(component.timerService.isOnBreak).toBeFalse();
    component.stop();
  }));
});
