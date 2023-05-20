import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalPosterComponent } from './normal-poster.component';

describe('NormalPosterComponent', () => {
  let component: NormalPosterComponent;
  let fixture: ComponentFixture<NormalPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalPosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
