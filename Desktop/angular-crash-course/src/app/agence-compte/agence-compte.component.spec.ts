import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceCompteComponent } from './agence-compte.component';

describe('AgenceCompteComponent', () => {
  let component: AgenceCompteComponent;
  let fixture: ComponentFixture<AgenceCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgenceCompteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgenceCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
