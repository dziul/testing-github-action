import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallMeOutComponent } from './call-me-out.component';

describe('CallMeOutComponent', () => {
  let component: CallMeOutComponent;
  let fixture: ComponentFixture<CallMeOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallMeOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallMeOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
