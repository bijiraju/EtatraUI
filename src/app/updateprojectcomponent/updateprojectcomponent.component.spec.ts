import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprojectcomponentComponent } from './updateprojectcomponent.component';

describe('UpdateprojectcomponentComponent', () => {
  let component: UpdateprojectcomponentComponent;
  let fixture: ComponentFixture<UpdateprojectcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprojectcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprojectcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
