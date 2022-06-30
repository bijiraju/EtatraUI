import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectcomponentComponent } from './addprojectcomponent.component';

describe('AddprojectcomponentComponent', () => {
  let component: AddprojectcomponentComponent;
  let fixture: ComponentFixture<AddprojectcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprojectcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojectcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
