import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackerDetailsComponent } from './attacker-details.component';

describe('AttackerDetailsComponent', () => {
  let component: AttackerDetailsComponent;
  let fixture: ComponentFixture<AttackerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
