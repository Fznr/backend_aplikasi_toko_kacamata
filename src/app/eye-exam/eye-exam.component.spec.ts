import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeExamComponent } from './eye-exam.component';

describe('EyeExamComponent', () => {
  let component: EyeExamComponent;
  let fixture: ComponentFixture<EyeExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EyeExamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EyeExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
