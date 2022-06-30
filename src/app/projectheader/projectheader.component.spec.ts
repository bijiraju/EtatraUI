import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectheaderComponent } from './projectheader.component';

describe('ProjectheaderComponent', () => {
  let component: ProjectheaderComponent;
  let fixture: ComponentFixture<ProjectheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
