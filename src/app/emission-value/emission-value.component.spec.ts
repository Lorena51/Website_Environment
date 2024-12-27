import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionValueComponent } from './emission-value.component';

describe('EmissionValueComponent', () => {
  let component: EmissionValueComponent;
  let fixture: ComponentFixture<EmissionValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmissionValueComponent]
    });
    fixture = TestBed.createComponent(EmissionValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
