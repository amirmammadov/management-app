import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = 'online';

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      let rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'offline';
      } else if (rnd < 0.9) {
        this.currentStatus = 'unknown';
      } else {
        this.currentStatus = 'online';
      }
    }, 5000);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }
}
