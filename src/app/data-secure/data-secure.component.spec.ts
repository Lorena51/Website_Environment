import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSecureComponent } from './data-secure.component';

describe('DataSecureComponent', () => {
  let component: DataSecureComponent;
  let fixture: ComponentFixture<DataSecureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSecureComponent]
    });
    fixture = TestBed.createComponent(DataSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
