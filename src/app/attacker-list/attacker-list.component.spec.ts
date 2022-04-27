import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackerListComponent } from './attacker-list.component';

describe('AttackerListComponent', () => {
  let component: AttackerListComponent;
  let fixture: ComponentFixture<AttackerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
