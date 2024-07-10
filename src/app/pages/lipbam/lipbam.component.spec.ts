import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipbamComponent } from './lipbam.component';

describe('LipbamComponent', () => {
  let component: LipbamComponent;
  let fixture: ComponentFixture<LipbamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LipbamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LipbamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
