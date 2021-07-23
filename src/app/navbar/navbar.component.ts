import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimerService } from '../services/timer/timer.service';

interface Link {
  path: string;
  title: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  backgroundColor: string = '#f26925';
  activeRoute: string;
  links: Link[] = [
    {
      path: '/',
      title: 'Main',
    },
    {
      path: '/createset',
      title: 'Create new set',
    },
    {
      path: '/write',
      title: 'Write new notes',
    },
    {
      path: '/timer',
      title: 'Set study timer',
    },
  ];

  constructor(public timerService: TimerService) {
    this.activeRoute = window.location.pathname;
  }

  ngOnInit(): void {}
}
