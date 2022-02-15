import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItChildFieldComponent } from './it-child-field.component';

describe('ItChildFieldComponent', () => {
  let component: ItChildFieldComponent;
  let fixture: ComponentFixture<ItChildFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItChildFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItChildFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
