import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabSelectorComponent } from './cab-selector.component';

describe('CabSelectorComponent', () => {
  let component: CabSelectorComponent;
  let fixture: ComponentFixture<CabSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabSelectorComponent]
    });
    fixture = TestBed.createComponent(CabSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
