import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyFormComponent } from './family-form.component';

describe('FamilyFormComponent', () => {
  let component: FamilyFormComponent;
  let fixture: ComponentFixture<FamilyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyFormComponent]
    });
    fixture = TestBed.createComponent(FamilyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
