import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonsComponent } from './boutons.component';

describe('BoutonsComponent', () => {
  let component: BoutonsComponent;
  let fixture: ComponentFixture<BoutonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoutonsComponent]
    });
    fixture = TestBed.createComponent(BoutonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
