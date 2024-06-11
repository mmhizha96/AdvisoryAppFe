import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSidenavComponent } from './control-sidenav.component';

describe('ControlSidenavComponent', () => {
  let component: ControlSidenavComponent;
  let fixture: ComponentFixture<ControlSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
