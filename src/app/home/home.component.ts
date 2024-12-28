import { Component, OnInit } from '@angular/core';
import { IEmissionValue } from '../emission-value/emission-value.Model';
import { EmissionValueComponent } from '../emission-value/emission-value.component';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'env-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isRTL: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    // Get the writing direction from the document
    this.isRTL = this.document.dir === 'rtl' || 
                 window.getComputedStyle(this.document.body).direction === 'rtl';
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const element = this.document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
