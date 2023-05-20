import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePosterComponent } from './available-poster.component';

describe('AvailablePosterComponent', () => {
  let component: AvailablePosterComponent;
  let fixture: ComponentFixture<AvailablePosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailablePosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailablePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
