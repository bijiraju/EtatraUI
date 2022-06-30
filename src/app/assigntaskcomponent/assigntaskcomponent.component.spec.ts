import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigntaskcomponentComponent } from './assigntaskcomponent.component';

describe('AssigntaskcomponentComponent', () => {
  let component: AssigntaskcomponentComponent;
  let fixture: ComponentFixture<AssigntaskcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigntaskcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigntaskcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
