import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLensStockComponent } from './add-lens-stock.component';

describe('AddLensStockComponent', () => {
  let component: AddLensStockComponent;
  let fixture: ComponentFixture<AddLensStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLensStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLensStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
