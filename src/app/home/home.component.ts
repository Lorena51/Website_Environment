import { Component, OnInit } from '@angular/core';
import { IEmissionValue } from '../emission-value/emission-value.Model';
import { EmissionValueComponent } from '../emission-value/emission-value.component';

@Component({
  selector: 'env-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
