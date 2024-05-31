import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeExamFormComponent } from './eye-exam-form.component';

describe('EyeExamFormComponent', () => {
  let component: EyeExamFormComponent;
  let fixture: ComponentFixture<EyeExamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EyeExamFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EyeExamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
