import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAppointmentsComponent } from './student-appointments.component';

describe('StudentAppointmentsComponent', () => {
  let component: StudentAppointmentsComponent;
  let fixture: ComponentFixture<StudentAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentAppointmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
