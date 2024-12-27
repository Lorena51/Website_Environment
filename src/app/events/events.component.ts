import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'env-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  isRTL = false;

  ngOnInit() {
    // Detect RTL writing mode
    const htmlDir = document.documentElement.dir;
    this.isRTL = htmlDir === 'rtl';
  }
}
